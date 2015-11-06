$(document).ready(function() {
    window.visited = []

    $('#vmap').vectorMap({
        map: 'world_en',
        backgroundColor: 'black',
        borderColor: '#818181',
        borderOpacity: 0.25,
        borderWidth: 1,
        color: 'grey',
        enableZoom: false,
        selectedRegions: [],
        hoverColor: 'grey',
        normalizeFunction: 'linear',
        scaleColors: ['grey', 'grey'],
        selectedColor: '#99CCFF',
        showTooltip: true,
        multiSelectRegion: true,
    });

    $('#vmapcn').vectorMap({
        map: 'china_en',
        backgroundColor: 'black',
        borderColor: '#818181',
        borderOpacity: 0.25,
        borderWidth: 1,
        color: 'grey',
        enableZoom: false,
        selectedRegions: [],
        hoverColor: 'grey',
        normalizeFunction: 'linear',
        scaleColors: ['grey', 'grey'],
        selectedColor: '#99CCFF',
        showTooltip: true,
        multiSelectRegion: true,
    });

    var bsSuggest = $("#countrySearch").bsSuggest({
        url: "http://ac-TYH9McMk.clouddn.com/f7d49ff22a2ac60d.json",
        effectiveFields: ["continent", "chs"],
        effectiveFieldsAlias: {
            "continent": "  ",
            "chs": "找到"
        },
        searchFields: ["eng", "c+e"],
        showBtn: false,
        idField: "id",
        keyField: "chs",
        autoMinWidth: false,
        inputWarnColor: 'white',
        listStyle: {
            "padding-top": 0,
            "max-height": "150px",
            "max-width": "300px",
            "overflow": "auto",
            "width": "100px",
            "transition": "0.3s",
            "-webkit-transition": "0.3s",
            "-moz-transition": "0.3s",
            "-o-transition": "0.3s"
        },
    }).on('onSetSelectValue',
    function(e, keyword) {
        id1 = keyword.id.toLowerCase();

        if (jQuery.inArray(id1, window.visited) == -1) {
            $('#remove').append("<button class = \"btn btn-sm btn-primary zz\" id=" + id1 + ">" + keyword.key + "<span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span></button>")
        };
        if (id1.length == 2) {
            $('#vmap').vectorMap('select', keyword.id.toLowerCase());
        } else {
            $('#vmapcn').vectorMap('select', keyword.id.toLowerCase());
        }

        
        /* $('input').val("");
        $('.zz').click(function() {
            if (this.id.length == 2){
                $('#vmap').vectorMap('deselect', this.id);
                $(this).remove();} else {
                $('#vmapcn').vectorMap('deselect', this.id);
                $(this).remove();   
                }

        });*/

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
$('#selected').click(function(){
    $('#remove').toggle('fast')
})
$('#add_new').click(function() {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/add/",
        data: JSON.stringify({
            title: window.visited
        }),
        success: function(data) {
            console.log(data.title);
        },
        dataType: "json"
    });

});