$(document).ready(function(){



    $('#vmap').vectorMap({ map: 'world_en',
    backgroundColor: 'black',
    borderColor: '#818181',
    borderOpacity: 0.25,
    borderWidth: 1,
    color: 'grey',
    enableZoom: true,
    selectedRegions: [],
    hoverColor: 'grey',
    hoverOpacity: '0.85',
    normalizeFunction: 'linear',
    scaleColors: ['grey', 'grey'],
    selectedColor: '#99CCFF',
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
       window.visited = $('#vmap').vectorMap('getS');
       if(jQuery.inArray(id1, window.visited)==-1){
            $('#remove').append("<button class = \"btn btn-sm btn-primary zz\" id="+id1+ ">" + keyword.key + "<span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span></button>")
        };
       $('#vmap').vectorMap('select', keyword.id.toLowerCase());
  
       // $('#remove').text('删除已选择国家(' + window.visited.length + ')');
       $('input').val("");
       $('.zz').click(function(){
            $('#vmap').vectorMap('deselect',this.id);
            $(this).remove();     
        
    });



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