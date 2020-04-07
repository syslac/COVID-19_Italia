const regionsInfo = 
{
	italia: {name: "Italia",people: 60359546},
	abruzzo: { name: "Abruzzo",people: 1311580},
	basilicata: { name: "Basilicata",people: 562869},
	bolzano: { name: "P.A. Bolzano",people: 531178},
	calabria: { name: "Calabria",people: 1947131},
	campania: { name: "Campania",people: 5801692},
	emilia_romagna: { name: "Emilia-Romagna",people: 4459477 },
	friuli_venezia_giulia: { name: "Friuli Venezia Giulia",people: 1215220},
	lazio: { name: "Lazio",people: 5879082},
	liguria: { name: "Liguria",people: 1550640 },
	lombardia: { name: "Lombardia",people: 10060574},
	marche: { name: "Marche",people: 1525271},
	molise: { name: "Molise",people: 305617},
	piemonte: { name: "Piemonte",people: 4356406 },
	puglia: { name: "Puglia",people: 4029053},
	sardegna: { name: "Sardegna",people: 1639591},
	sicilia: { name: "Sicilia",people: 4999891},
	toscana: { name: "Toscana",people: 3729641},
	trento: { name: "P.A. Trento",people: 541098},
	umbria: { name: "Umbria",people: 882015},
	valle_aosta: { name: "Valle d'Aosta",people: 125666},
	veneto: { name: "Veneto",people: 4905854}
};

const variablesInfo =
{
	totale_casi: { name: "Totale Casi", xAxis: "data", xAxisLogScale: false},
	ricoverati_con_sintomi: { name: "Ricoverati Con Sintomi", xAxis: "data", xAxisLogScale: false},
	terapia_intensiva: { name: "Terapia Intensiva", xAxis: "data", xAxisLogScale: false},
	totale_ospedalizzati: { name: "Totale Ospedalizzati", xAxis: "data", xAxisLogScale: false},
	isolamento_domiciliare: { name: "Isolamento Domiciliare", xAxis: "data", xAxisLogScale: false},
	totale_positivi: { name: "Totale Positivi", xAxis: "data", xAxisLogScale: false},
	variazione_totale_positivi: { name: "Variazione Totale Positivi", xAxis: "data", xAxisLogScale: false},
	dimessi_guariti: { name: "Dimessi Guariti", xAxis: "data", xAxisLogScale: false},
	deceduti: { name: "Deceduti", xAxis: "data", xxAxisLogScaleAxisLog: false},
	tamponi: { name: "Tamponi", xAxis: "data", xAxisLogScale: false},
	tamponi_su_popolazione : {name: "[%] Tamponi Su Popolazione", xAxis: "data", xAxisLogScale: false},
	totale_casi_su_tamponi: { name: "[%] Totale Casi Su Tamponi", xAxis: "data", xAxisLogScale: false},
	totale_casi_su_popolazione : {name: "[%] Totale Casi Su Popolazione", xAxis: "data", xAxisLogScale: false},
	deceduti_su_totale_casi: { name: "[%] Deceduti Su Totale Casi", xAxis: "data", xAxisLogScale: false},
	deceduti_su_popolazione: {name: "[%] Deceduti Su Popolazione", xAxis: "data", xAxisLogScale: false},
	dimessi_guariti_su_totale_casi: {name: "[%] Dimessi Guariti Su Totale Casi", xAxis: "data", xAxisLogScale: false},
	totale_ospedalizzati_su_popolazione: {name: "[%] Totale Ospedalizzati Su Popolazione", xAxis: "data", xAxisLogScale: false},
	terapia_intensiva_su_popolazione: {name: "[%] Terapia Intensiva Su Popolazione", xAxis: "data", xAxisLogScale: false},
	ricoverati_con_sintomi_su_popolazione: {name: "[%] Ricoverati Con Sintomi Su Popolazione", xAxis: "data", xAxisLogScale: false},
	isolamento_domiciliare_su_popolazione: {name: "[%] Isolamento Domiciliare Su Popolazione", xAxis: "data", xAxisLogScale: false},
	delta_totale_casi: {name: "Delta Totale Casi", xAxis: "data", xAxisLogScale: false},
	delta_totale_casi_su_popolazione: {name: "[%] Delta Totale Casi Su Popolazione", xAxis: "data", xAxisLogScale: false},
	delta_totale_ospedalizzati: {name: "Delta Totale Ospedalizzati", xAxis: "data", xAxisLogScale: false},
    delta_deceduti: {name: "Delta Deceduti", xAxis: "data", xAxisLogScale: false},
    delta_dimessi_guariti: {name: "Delta Dimessi Guariti", xAxis: "data", xAxisLogScale: false},
	delta_tamponi: {name: "Delta Tamponi", xAxis: "data", xAxisLogScale: false},
	perc_incr_totale_casi: {name: "[%] Incremento Totale Casi", xAxis: "data", xAxisLogScale: false},
	perc_incr_totale_ospedalizzati: {name: "[%] Incremento Totale Ospedalizzati", xAxis: "data", xAxisLogScale: false},
    perc_incr_deceduti: {name: "[%] Incremento Deceduti", xAxis: "data", xAxisLogScale: false},
    perc_incr_dimessi_guariti: {name: "[%] Incremento Dimessi Guariti", xAxis: "data", xAxisLogScale: false},
	perc_incr_tamponi: {name: "[%] Incremento Tamponi", xAxis: "data", xAxisLogScale: false},
	perc_delta_totale_positivi_su_delta_tamponi: {name: "[%] Nuovi positivi su nuovi tamponi", xAxis: "data", xAxisLogScale: false},
	perc_delta_totale_positivi_su_delta_tamponi_media_3: {name: "[%] Nuovi positivi su nuovi tamponi (media 3gg)", xAxis: "data", xAxisLogScale: false},
	perc_delta_totale_positivi_su_delta_tamponi_media_5: {name: "[%] Nuovi positivi su nuovi tamponi (media 5gg)", xAxis: "data", xAxisLogScale: false},
	totale_casi_vs_delta_totale_casi_settimana : {name: "Totale Casi VS Delta Totale Casi Settimana Prima", xAxis: "totale_casi", xAxisLogScale: true}
};