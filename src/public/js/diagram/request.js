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
        $('#form-fan').html('<img src="../images/background/quat-01.png"  style="position: relative;" class="img-scada"/>');
        $('#form-fan-mini3').html('<img src="../images/background/lua-scada.png" width="180" style="position: relative;" class="img-scada"/>');
        $("#qh1on").html('QH1 On').show();
        $("#qh1off").hide();
    } else {
        $('#form-fan').html('<img src="../images/background/quat.gif"  style="position: relative;" class="img-scada"/>');
        $('#form-fan-mini3').html('<img src="../images/background/lua-scada.gif" width="180" style="position: relative;" class="img-scada"/>');
        $("#qh1off").html('QH1 Off').show();
        $("#qh1on").hide();
    }

    if(getDataDiagram.statusQuatDay === 0) {
        $('#form-fan-mini1').html('<img src="../images/background/quat-01.png" width="50" style="position: relative;" class="img-scada"/>');
        $("#qh2on").html('QH2 On').show();
        $("#qh2off").hide();
    } else {
        $('#form-fan-mini1').html('<img src="../images/background/quat.gif" width="50" style="position: relative;" class="img-scada"/>');
        $("#qh2off").html('QH2 Off').show();
        $("#qh2on").hide();
    }

    if(getDataDiagram.statusQuatHut === 0) {
        $('#form-fan-mini2').html('<img src="../images/background/quat-01.png" width="50" style="position: relative;" class="img-scada"/>');
        $("#qh3on").html('QH3 On').show();
        $("#qh3off").hide();
    } else {
        $('#form-fan-mini2').html('<img src="../images/background/quat.gif" width="50" style="position: relative;" class="img-scada"/>');
        $("#qh3off").html('QH3 Off').show();
        $("#qh3on").hide();
    }
})

$(document).ready(function() {
    $("#qh1off").click(function() {
        socket.emit('qh1', {D529: 0});
    });
    $("#qh1on").click(function() {
        socket.emit('qh1', {D529: 1});
    });
    $("#qh2off").click(function() {
        socket.emit('qh1', {D528: 0});
    });
    $("#qh2on").click(function() {
        socket.emit('qh1', {D528: 1});
    });
    $("#qh3off").click(function() {
        socket.emit('qh1', {D530: 0});
    });
    $("#qh3on").click(function() {
        socket.emit('qh1', {D530: 1});
    })
})


// flexFont = function () {
//     var divs = document.getElementsByClassName("main-panel");
//     for(var i = 0; i < divs.length; i++) {
//         var relFontsize = divs[i].offsetWidth*0.05;
//         divs[i].style.fontSize = relFontsize+'px';
//     }
// };

// window.onload = function(event) {
//     flexFont();
// };
// window.onresize = function(event) {
//     flexFont();
// };
// $(document).ready(function(){
//     $('#btnResetThanCongDon').click(function(){
//         socket.emit('resetThanCongDon', $('#exampleInputPassword1').val());
//     })
// })

