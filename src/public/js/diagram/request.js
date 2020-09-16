let socket = io();

socket.on('requestApi', function (getDataDiagram) {
    $("#dv1").html(getDataDiagram.nhietDoKhoiThai);
    $("#dv2").html(getDataDiagram.beChuaNuoc);
    $("#dv3").html(getDataDiagram.statusBomDapBui);

    $("#dv4").html(getDataDiagram.statusBom_1);
    $("#dv5").html(getDataDiagram.statusBom_2);
    $("#dv6").html(getDataDiagram.quatHut);

    $("#dv7").html(getDataDiagram.nhietDoNuoc);
    $("#dv8").html(getDataDiagram.apSuatHoi);
    $("#dv9").html(getDataDiagram.boHamNuoc);

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

    if(getDataDiagram.statusQuatOxy === 0) {
        $('#form-fan').html('<img src="../images/background/quat-01.png" width="90" style="position: absolute;" class="test"/>')
    } else {
        $('#form-fan').html('<img src="../images/background/quat.gif" width="90" style="position: absolute;" class="test"/>')
    }

    if(getDataDiagram.statusQuatDay === 0) {
        $('#form-fan-mini1').html('<img src="../images/background/quat-01.png" width="50" style="position: absolute;" class="test"/>')
    } else {
        $('#form-fan-mini1').html('<img src="../images/background/quat.gif" width="50" style="position: absolute;" class="test"/>')
    }

    if(getDataDiagram.statusQuatHut === 0) {
        $('#form-fan-mini2').html('<img src="../images/background/quat-01.png" width="50" style="position: absolute;" class="test"/>')
    } else {
        $('#form-fan-mini2').html('<img src="../images/background/quat.gif" width="50" style="position: absolute;" class="test"/>')
    }
})


