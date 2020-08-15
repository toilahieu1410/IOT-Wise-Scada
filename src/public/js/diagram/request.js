$(document).ready(function() {

    setInterval(function() {
    $.ajax({
        "url": "http://10.10.11.222:1880/diagram_plc_mitsubishi",

    "success": function(getDataDiagram) {
$("#dv1").html(getDataDiagram.nhietDoKhoiThai);
$("#dv2").html(getDataDiagram.beChuaNuoc);
$("#dv3").html(getDataDiagram.statusBomDapBui);

$("#dv4").html(getDataDiagram.statusBom_1);
$("#dv5").html(getDataDiagram.statusBom_2);
$("#dv6").html(getDataDiagram.quatHut);

$("#dv7").html(getDataDiagram.nhietDoNuoc);
$("#dv8").html(getDataDiagram.apSuatHoi);
$("#dv9").html(getDataDiagram.boHamNuoc);

//LVMSB1
$("#dv10").html(getDataDiagram.chanKhongBuongDot);
$("#dv11").html(getDataDiagram.buongDot_TS1);
$("#dv12").html(getDataDiagram.buongDot_TS2);

$("#dv13").html(getDataDiagram.apSuatGio);
$("#dv14").html(getDataDiagram.quatDay);
$("#dv15").html(getDataDiagram.bangTai_1);

$("#dv16").html(getDataDiagram.bangTai_2);
$("#dv17").html(getDataDiagram.statusBangTai_1);
$("#dv18").html(getDataDiagram.statusBangTai_2);

$("#dv19").html(getDataDiagram.statusQuatDay);
$("#dv20").html(getDataDiagram.statusQuatOxy);
$("#dv21").html(getDataDiagram.statusQuatHut);
$("#dv22").html(getDataDiagram.luuLuongTucThoi);
$("#dv23").html(getDataDiagram.khoiLuongThanTucThoi);
$("#dv24").html(getDataDiagram.khoiLuongThanCongDon);
        },
        "error": function(error) {
        console.log(error);
        }
    })
    }, 1000);
});
    

// var selector = '.text-content a';

// $(selector).on('click', function(){
// $(selector).removeClass('active');
// $(this).addClass('active');
// });


// flexFont = function () {
// var divs = document.getElementsByClassName("main-panel");
// for(var i = 0; i < divs.length; i++) {
//     var relFontsize = divs[i].offsetWidth*0.05;
//     divs[i].style.fontSize = relFontsize+'px';
// }
// };

// window.onload = function(event) {
// flexFont();
// };
// window.onresize = function(event) {
// flexFont();
// };


// $('.sub-menu ul').hide();
// $(".sub-menu a").click(function () {
// $(this).parent(".sub-menu").children("ul").slideToggle("100");
// $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
// });

