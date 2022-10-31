

//var defaultMapArray = ["EG","SD","ET","DZ","ZM","NG","GH","UG","TZ","SI","QA","AO","KE","GQ","RW","MZ","OM","DZ","MA","RO","TR","SA","KW","IQ","AE","BH","MX","AR","TG","IT","GB","DE","FR","HR","CY","CL","BR","PE","MX","CO","US"];
var valuesDefaultMap = {};
jQuery.each(defaultMapArray, function (idx, valueDefaultMap) {
    valuesDefaultMap[valueDefaultMap] = 'blue';
})



//var factoryArray = ["EG","SD","ET","DZ","ZM","NG","GH","UG","TZ","SI","QA"];
var valuesFactory = {};
jQuery.each(factoryArray, function (idx, valueFactory) {
    valuesFactory[valueFactory] = 'viva';
})


//var projectArray = ["EG","SD","ET","ZM","NG","GH","AO","TZ","KE","GQ","RW","MZ","OM"];
var valuesProject = {};
jQuery.each(projectArray, function (idx, valueProject) {
    valuesProject[valueProject] = 'orange';
})


//var officeArray = ["EG","SD","DZ","NG","GH","MA","SI","RO","TR","SA","KW","QA","IQ","AE","BH","MX","AR","AR"];
var valuesOffice = {};
jQuery.each(officeArray, function (idx, valueOffice) {
    valuesOffice[valueOffice] = 'green';
})

//var exportArray = ["NG","KE","TG","IT","GB","DE","FR","HR","CY","CL","BR","PE","MX","CO","AR","US"];
var valuesExport = {};
jQuery.each(exportArray, function (idx, valueExport) {
    valuesExport[valueExport] = 'brown';
})


function startCalc() {
    var widthVal = 1000;
    var heightVal = 400;
    //var newWidth = $(window).width();
    //var newHeight = (newWidth * heightVal) / widthVal
    var newWidth = $(window).width();
    var newHeight = (newWidth * heightVal) / widthVal

    $(".map1").width(newWidth);
    $(".map1").height(newHeight);



}

startCalc();

$(document).ready(function () {
    $(window).resize(function () {
        startCalc();
    }).resize();
});

$(function mapFun() {


    var map = new jvm.Map({
        container: $('#map1'),
        map: 'world_mill_en',
        zoomAnimate: true,
        zoomOnScroll: false,
        backgroundColor: '#f3f3f3',
        regionStyle: {
            initial: {
                fill: '#d8d8d8'
            },
            hover: {
                fill: '#969696'
            }

        },
        panOnDrag: true,
        focusOn: {
            x: 0.5,
            y: 0.5,
            scale: 1,
            animate: true
        },
        series: {

            regions: [{
                scale: {
                    orange: '#ff9c00',
                    green: '#47902e',
                    blue: '#77b7e5',
                    red: '#ff0009',
                    gray: '#d8d8d8',
                    brown: '#cfaf96',
                    viva: '#90107b'
                },
                attribute: 'fill',
                normalizeFunction: 'polynomial',
                values: valuesDefaultMap
            }]
        },

        onRegionOver: function (element, code, region) {
            var ConCode = code.toUpperCase();

            if (jQuery.inArray(ConCode, factoryArray) != -1) {
                $('#factoryBut .bgMapIcons').addClass("factoryOver");
                $('#factoryBut').addClass("paddingOver");
            }

            if (jQuery.inArray(ConCode, projectArray) != -1) {
                $('#projectBut .bgMapIcons').addClass("projectOver");
                $('#projectBut').addClass("paddingOver");
            }

            if (jQuery.inArray(ConCode, officeArray) != -1) {
                $('#officeBut .bgMapIcons').addClass("officeOver");
                $('#officeBut').addClass("paddingOver");
            }

            if (jQuery.inArray(ConCode, exportArray) != -1) {
                $('#exportBut .bgMapIcons').addClass("exportOver");
                $('#exportBut').addClass("paddingOver");
            }
        },

        onRegionOut: function (element, code, region) {
            var ConCode = code.toUpperCase();
            $('#factoryBut .bgMapIcons').removeClass("factoryOver");
            $('#factoryBut').removeClass("paddingOver");

            $('#projectBut .bgMapIcons').removeClass("projectOver");
            $('#projectBut').removeClass("paddingOver");

            $('#officeBut .bgMapIcons').removeClass("officeOver");
            $('#officeBut').removeClass("paddingOver");

            $('#exportBut .bgMapIcons').removeClass("exportOver");
            $('#exportBut').removeClass("paddingOver");
        },


        onRegionClick: function (event, code) {
            var name = (code);
            //window.location.replace("http://www.google.com/" + code + "");
        }


    });








    function defaultMap() {
        map.series.regions[0].setValues(
            valuesDefaultMap
        );
    }




    function resetColors() {
        //console.log("test");
        var colors = {},
            key;

        for (key in map.regions) {
            colors[key] = 'gray';
        }
        //console.log(colors);
        return colors;
    };


    $("#factoryBut").hover(function () {
        map.series.regions[0].setValues(resetColors());
        //$('#map1').vectorMap('set', 'backgroundColor', 'yellow');
        //$('#map').vectorMap('set', 'colors', {us: '#0000ff'});
        map.series.regions[0].setValues(
            valuesFactory
        );

    });

    $("#factoryBut").mouseout(function () {
        map.series.regions[0].setValues(resetColors());
        defaultMap();
    });



    $("#projectBut").hover(function () {
        map.series.regions[0].setValues(resetColors());
        //$('#map1').vectorMap('set', 'backgroundColor', 'yellow');
        //$('#map').vectorMap('set', 'colors', {us: '#0000ff'});
        map.series.regions[0].setValues(
            valuesProject
        );

    });

    $("#projectBut").mouseout(function () {
        map.series.regions[0].setValues(resetColors());
        defaultMap();
    });



    $("#officeBut").hover(function () {
        map.series.regions[0].setValues(resetColors());
        //$('#map1').vectorMap('set', 'backgroundColor', 'yellow');
        //$('#map').vectorMap('set', 'colors', {us: '#0000ff'});
        map.series.regions[0].setValues(
            valuesOffice
        );

    });

    $("#officeBut").mouseout(function () {
        map.series.regions[0].setValues(resetColors());
        defaultMap();
    });



    $("#exportBut").hover(function () {
        map.series.regions[0].setValues(resetColors());
        //$('#map1').vectorMap('set', 'backgroundColor', 'yellow');
        //$('#map').vectorMap('set', 'colors', {us: '#0000ff'});
        map.series.regions[0].setValues(
            valuesExport
        );

    });

    $("#exportBut").mouseout(function () {
        map.series.regions[0].setValues(resetColors());
        defaultMap();
    });



});



$(document).ready(function () {
    $("path").on("click", function () {
        var ccode = $(this).attr("data-code");
        var link = "javascript:void(0)";
        if (ccode == "EG") {
            link = lang + "/global-presence/egypt/";
        }
        else if (ccode == "SA") {
            link = lang + "/global-presence/gcc/ksa/";
        }
        else if (ccode == "BH") {
            link = lang + "/global-presence/bahrain/";
        }
        else if (ccode == "QA") {
            link = lang + "/global-presence/gcc/qatar/";
        }
        else if (ccode == "AE") {
            link = lang + "/global-presence/gcc/uae/";
        }
        else if (ccode == "KW") {
            link = lang + "/global-presence/gcc/kuwait/";
        }
        else if (ccode == "DZ") {
            link = lang + "/global-presence/africa/algeria/";
        }
        else if (ccode == "AO") {
            link = lang + "/global-presence/africa/Angola/";
        }
        else if (ccode == "BF") {
            link = lang + "/global-presence/africa/burkina-faso/";
        }
        else if (ccode == "ET") {
            link = lang + "/global-presence/africa/ethiopia/";
        }
        else if (ccode == "ZM") {
            link = lang + "/global-presence/africa/zambia/";
        }
        else if (ccode == "NG") {
            link = lang + "/global-presence/africa/nigeria/";
        }
        else if (ccode == "GH") {
            link = lang + "/global-presence/africa/ghana/";
        }
        else if (ccode == "MA") {
            link = lang + "/global-presence/africa/morocco/";
        }
 /*       else if (ccode == "SD") {
            link = lang + "/global-presence/africa/sudan/";
        }*/
        else if (ccode == "TZ") {
            link = lang + "/global-presence/africa/tanzania/";
        }
        else if (ccode == "UG") {
            link = lang + "/global-presence/africa/uganda/";
        }
        else if (ccode == "AR" || ccode == "BR" || ccode == "CL" || ccode == "CO" || ccode == "DO" || ccode == "EC" || ccode == "MX" || ccode == "PY" || ccode == "PE" || ccode == "US") {
            link = lang + "/global-presence/americas/";
        }
        else if (ccode == "KR" || ccode == "AF" || ccode == "AL" || ccode == "CN" || ccode == "IN" || ccode == "IQ" || ccode == "JO" || ccode == "KZ" || ccode == "LB" || ccode == "MY" || ccode == "PK" || ccode == "PS" || ccode == "RU" || ccode == "SC" || ccode == "VN") {
            link = lang + "/global-presence/asia/";
        }
        else if (ccode == "BJ" || ccode == "BW" || ccode == "CM" || ccode == "TD" || ccode == "CI" || ccode == "GQ" || ccode == "GN" || ccode == "KE" || ccode == "LR" || ccode == "LY" || ccode == "MG" || ccode == "MW" || ccode == "MR" || ccode == "MU" || ccode == "MZ" || ccode == "NE" || ccode == "RW" || ccode == "SN" || ccode == "ZA" || ccode == "TG" || ccode == "TN" || ccode == "ZW") {
            link = lang + "/global-presence/africa/";
        }
        else if (ccode == "AT" || ccode == "BE" || ccode == "BA" || ccode == "BG" || ccode == "HR" || ccode == "CY" || ccode == "DK" || ccode == "EE" || ccode == "FI" || ccode == "FR" || ccode == "DE" || ccode == "GR" || ccode == "HU" || ccode == "IS" || ccode == "IE" || ccode == "IT" || ccode == "XK" || ccode == "MT" || ccode == "MD" || ccode == "ME" || ccode == "NL" || ccode == "PL" || ccode == "PT" || ccode == "RO" || ccode == "RS" || ccode == "SK" || ccode == "SI" || ccode == "ES" || ccode == "SE" || ccode == "CH" || ccode == "TR" || ccode == "GB" || ccode == "UA") {
            link = lang + "/global-presence/europe/";
        }
        else if (ccode == "OM" || ccode == "YE"  ) {
            link = lang + "/global-presence/gcc/";
        }
         
        window.location.href = link;
    });

});