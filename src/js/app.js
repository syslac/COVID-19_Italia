var globalData;

class DataFrame {

  constructor(regionsData) {
    this.regionsData = regionsData;
  }

  getDataRegion(regions, regionName) {
    return regions.filter(region => region["denominazione_regione"] === regionName);
  }

  augmentData(regionData) {
    regionData.forEach((dataRaw, i) => {
      const regionKey = findRegion(dataRaw["denominazione_regione"]);

      const people = regionsInfo[regionKey].people;

      dataRaw["tamponi_su_popolazione"] = this.getPercentage(dataRaw["tamponi"], people);

      dataRaw["totale_casi_su_tamponi"] = this.getPercentage(dataRaw["totale_casi"], dataRaw["tamponi"]);
      dataRaw["totale_casi_su_popolazione"] = this.getPercentage(dataRaw["totale_casi"], people);

      dataRaw["deceduti_su_totale_casi"] = this.getPercentage(dataRaw["deceduti"], dataRaw["totale_casi"]);
      dataRaw["deceduti_su_popolazione"] = this.getPercentage(dataRaw["deceduti"], people);

      dataRaw["dimessi_guariti_su_totale_casi"] = this.getPercentage(dataRaw["dimessi_guariti"], dataRaw["totale_casi"]);
      dataRaw["totale_ospedalizzati_su_popolazione"] = this.getPercentage(dataRaw["totale_ospedalizzati"], people);

      dataRaw["delta_totale_casi"] = this.getDelta(i, regionData, "totale_casi");
      dataRaw["delta_totale_ospedalizzati"] = this.getDelta(i, regionData, "totale_ospedalizzati");
      dataRaw["delta_deceduti"] = this.getDelta(i, regionData, "deceduti");
      dataRaw["delta_dimessi_guariti"] = this.getDelta(i, regionData, "dimessi_guariti");
      dataRaw["delta_tamponi"] = this.getDelta(i, regionData, "tamponi");

      dataRaw["delta_totale_casi_su_popolazione"] = this.getPercentage(dataRaw["delta_totale_casi"], people);

    });
    return regionData;
  }

  getPercentage(num, div) {
    return 100.0 * (num / div)
  }

  getDelta(i, dataArray, key) {
    return i === 0 ? 0 : dataArray[i][key] - dataArray[i - 1][key];
  }

  getXYDataPoints(data, varName) {
    const X = data.map(elem => elem["data"]);
    const Y = data.map(elem => elem[varName]);
    return [X, Y]; 
  }

  plotData(X, Y, plotName) {
    const data = {
      x: X,
      y: Y,
      mode: "lines+markers",
      type: "scatter",
      name: plotName
    };

    return data;
  }

  getXYDataForFit(X, Y) {
    const data = [];
    Y.forEach((y, i) => {
      data.push([Y[i], y]);
    });
    return data;
  }

  doRegression(fitDataPoints) {
    const regressionData = regression('exponential', fitDataPoints);
    return regressionData;
  }

  getYFromRegression(regressionData) {
    return regressionData.points.map(elem => elem[1]);
  }

  plotRegressionData(X, Y) {
    const data = {
      x: X,
      y: Y,
      mode: 'lines',
      type: 'scatter',
      name: 'Fit',
      line: {
        dash: 'dot',
        width: 1
      }
    };

    return data;
  }

  plotDataHTML(plotTitle, data, divName) {
    const layout = {
      title: plotTitle
    };

    const config = {responsive: true}
    
    Plotly.newPlot(divName, data, layout, config);
  }

  getPlotDataForSingleRegion(regions, regionName, variableKey) {
      const regionDataOrig = this.getDataRegion(regions, regionName);
      const regionData = this.augmentData(regionDataOrig);
      const datapoints = this.getXYDataPoints(regionData, variableKey);
      const plotdata = this.plotData(...datapoints, regionName);
      return plotdata;
  }

  plotAllRegions(variableKey) {
    const allPlotData = Object.values(regionsInfo).map( region => {
      return this.getPlotDataForSingleRegion(this.regionsData, region.name, variableKey);
    });
    this.plotDataHTML(variablesInfo[variableKey].name, allPlotData, "allRegionsDiv");
  }

  plotSingleRegion(regionName, varName, varText) {
    const regionDataOrig = this.getDataRegion(this.regionsData, regionName);
    console.log(regionDataOrig);
    const regionData = this.augmentData(regionDataOrig);
    console.log(regionData);
    const datapoints = this.getXYDataPoints(regionData, varName);
    console.log(datapoints);
    const plotdata = this.plotData(...datapoints, varText);
    console.log(plotdata);
    const fitDataPoints = this.getXYDataForFit(...datapoints);
    console.log(fitDataPoints);
    const regressionData = this.doRegression(fitDataPoints);
    console.log(regressionData);
    const YRegressionData = this.getYFromRegression(regressionData);
    console.log(YRegressionData);
    const plotregressiondata = this.plotRegressionData(datapoints[0], YRegressionData);
    console.log(plotregressiondata);
    this.plotDataHTML(varText, [plotdata, plotregressiondata], "singleRegionDiv");
  }
}

function showPlot() {
  const regionName = $("#regions option:selected").html();
  const varName = $("#variables").val();
  const varText = $("#variables option:selected").html();
  globalData.plotSingleRegion(regionName, varName, varText);
  globalData.plotAllRegions(varName);
}

function populateRegionsSelect() {
  Object.keys(regionsInfo).forEach( regionKey => {
    $('#regions').append($('<option>').val(regionKey).text(regionsInfo[regionKey].name))
  });
}

function populateVariablesSelect() {
  Object.keys(variablesInfo).forEach( variableKey => {
    $('#variables').append($('<option>').val(variableKey).text(variablesInfo[variableKey].name))
  });
}

function findRegion(regionName) {
  const regionInfo = Object.entries(regionsInfo).filter(region => region[1].name === regionName);
  return regionInfo[0][0];
}

function initBodyHTML() {
  populateRegionsSelect();
  populateVariablesSelect();
}

async function getDataRegions(url) {
  try {
    const response = await fetch(url);
    const jsonRest = await response.json();

    return jsonRest;
  } catch (error) {
    console.log(error);
  }
}

$(document).ready(function() {
    initBodyHTML();
    const URL = "https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni.json";
    const regionsData = getDataRegions(URL);
    regionsData.then(regions => {
      globalData = new DataFrame(regions);
      const varibleKey = $("#variables").val();
      globalData.plotAllRegions(varibleKey);
    });
});