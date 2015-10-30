$(document).ready(function() {

    var bsSuggest = $("#testNoBtn").bsSuggest({
        url: "http://ac-tyh9mcmk.clouddn.com/f097bc9fc882e7c0.json",
        effectiveFields: ["c+e"],
        searchFields: ["eng"],
        effectiveFieldsAlias:{countryEng: " ", countryChs: " "},
        showBtn: false,
        idField: "id",
        keyField: "chs"
    }).on('onDataRequestSuccess', function (e, result) {

    }).on('onSetSelectValue', function (e, keyword) {
        $("h3").append(keyword.id);
        $("#vmap").vectorMap('set', 'selectedRegions', ['CN'])
    
    }).on('onUnsetSelectValue', function (e) {

    });

    $('#vmap').vectorMap({ map: 'world_en',
    backgroundColor: 'black',
    borderColor: '#818181',
    borderOpacity: 0.25,
    borderWidth: 1,
    color: 'grey',
    enableZoom: true,
    hoverColor: '#c9dfaf',
    hoverOpacity: 0.5,
    normalizeFunction: 'linear',
    scaleColors: ['#b6d6ff', '#005ace'],
    selectedColor: '#c9dfaf',
    showTooltip: true,
    multiSelectRegion: true,
     });

})