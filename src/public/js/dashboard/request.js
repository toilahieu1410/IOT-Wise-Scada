let socket = io();

socket.on('requestApi', function (getDashboard) {
    $(".dv1").html(getDashboard.pressurePv);
    $(".dv2").html(getDashboard.pressureSv);
    $(".dv3").html(getDashboard.currentFreq);

    $(".dv4").html(getDashboard.phase1);
    $(".dv5").html(getDashboard.phase2);
    $(".dv6").html(getDashboard.phase3);

    $(".dv7").html(getDashboard.avgVolt);
    $(".dv8").html(getDashboard.avgAmp);
    $(".dv9").html(getDashboard.totalKw);
})