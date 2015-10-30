$(document).ready(function() {
    $('#vmap').vectorMap({ map: 'world_en',
    backgroundColor: 'black',
    borderColor: '#818181',
    borderOpacity: 0.25,
    borderWidth: 1,
    color: 'grey',
    enableZoom: true,
    selectedRegions: [],
    hoverColor: '#c9dfaf',
    hoverOpacity: 0.5,
    normalizeFunction: 'linear',
    scaleColors: ['#b6d6ff', '#005ace'],
    selectedColor: '#c9dfaf',
    showTooltip: true,
    multiSelectRegion: true,
    });

    var bsSuggest = $("#testNoBtn").bsSuggest({
        url: "http://ac-tyh9mcmk.clouddn.com/f097bc9fc882e7c0.json",
        effectiveFields: ["c+e"],
        searchFields: ["eng"],
        showBtn: false,
        idField: "id",
        keyField: "chs"
    }).on('onSetSelectValue', function (e, keyword) {
       $('#vmap').vectorMap('select', keyword.id.toLowerCase());
    }).on('onUnsetSelectValue', function (e) {

    }
    );

    

})