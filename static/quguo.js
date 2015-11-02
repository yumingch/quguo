$(document).ready(function(){

    $('#vmap').vectorMap({ map: 'world_en',
    backgroundColor: 'black',
    borderColor: '#818181',
    borderOpacity: 0.25,
    borderWidth: 1,
    color: 'grey',
    enableZoom: true,
    selectedRegions: [],
    hoverColor: '#grey',
    hoverOpacity: '0.85',
    normalizeFunction: 'linear',
    scaleColors: ['grey', 'grey'],
    selectedColor: 'yellow',
    showTooltip: true,
    multiSelectRegion: true,
    });

    var bsSuggest = $("#countrySearch").bsSuggest({
        url: "http://ac-tyh9mcmk.clouddn.com/f097bc9fc882e7c0.json",
        effectiveFields: ["c+e"],
        searchFields: ["eng"],
        showBtn: false,
        idField: "id",
        keyField: "chs",
        autoMinWidth: false,
        inputWarnColor: 'white',
        listStyle: {
                    "padding-top": 0, "max-height": "150px", "max-width": "300px",
                    "overflow": "auto", "width": "auto",
                    "transition": "0.3s", "-webkit-transition": "0.3s", "-moz-transition": "0.3s", "-o-transition": "0.3s"
                },    
    }).on('onSetSelectValue', function (e, keyword) {
       id1 = keyword.id.toLowerCase();
       if(jQuery.inArray(id1, window.visited)==-1){
            $('#remove').append("<button id="+id1+ ">" + keyword.key + "</button>")
        };
       $('#vmap').vectorMap('select', keyword.id.toLowerCase());
       
       // $('#remove').text('删除已选择国家(' + window.visited.length + ')');
       $('input').val("");
       $('button').click(function(){
            $('#vmap').vectorMap('deselect',this.id);
            $(this).remove()})

        window.visited = $('#vmap').vectorMap('getS')
    });



/*    $('#remove').click(function(){
        if(window.visited){
            $('#selected').text("");
            for(i=window.visited.length-1;i>=0;i--){
                $('#selected').append('<li class=\'sl\' id='+window.visited[i]+'><a>'+window.visited[i]+'</a></li>')
            };
        };
    }); 
*/

});