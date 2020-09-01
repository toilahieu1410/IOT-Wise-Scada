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
$("#dv25").html(getDataDiagram.resetThanCongDon);
        },
        "error": function(error) {
        console.log(error);
        }
    })
    }, 500);
});
