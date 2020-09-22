/******************************* JS click move item  *************************************/

// let socket = io();
socket.on('requestApi', function abc(getDataDiagram) {

})

// Highcharts.chart('chart-diagram1', {
//     chart: {
//         type: 'spline',
//         zoomType: 'x',
//         backgroundColor:'#0c0b0b40', 

//         animation: Highcharts.svg, // don't animate in old IE
//         marginRight: 10,
//         events: {
//             load: function () {

//                 // set up the updating of the chart each second
//                 var series = this.series[0];
//                 setInterval(function () {
//                     var x = (new Date()).getTime(), // current time
//                         y = getDataDiagram.nhietDoKhoiThai
//                     series.addPoint([x, y], true, true);
//                 }, 5000);
//             }
//         }
//     },

//     time: {
//         useUTC: false
//     },

//     accessibility: {
//         announceNewData: {
//             enabled: true,
//             minAnnounceInterval: 15000,
//             announcementFormatter: function (allSeries, newSeries, newPoint) {
//                 if (newPoint) {
//                     return 'New point added. Value: ' + newPoint.y;
//                 }
//                 return false;
//             }
//         }
//     },

//     xAxis: {
//         type: 'datetime',
//         tickPixelInterval: 150,
//         style: {
//             color: "#fff"
//             }
//     },

//     yAxis: {
//         title: {
//             text: 'Value',
//             style: {
//                 color: "#fff"
//                 }
//         },
//         plotLines: [{
//             value: 0,
//             width: 1,
//             color: '#808080'
//         }]
//     },

//     tooltip: {
//         headerFormat: '<b>{series.name}</b><br/>',
//         pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}',
        
//     },

//     legend: {
//         enabled: false
//     },

//     exporting: {
//         enabled: false
//     },

//     series: [{
//         name: 'Random data',
    
//         data: (function () {
//             // generate an array of random data
//             var data = [],
//                 time = (new Date()).getTime(),
//                 i;

//             for (i = -500; i <= 0; i += 1) {
//                 data.push({
//                     x: time + i * 1000,
//                     y: getDataDiagram.nhietDoKhoiThai
//                 });
//             }
//             return data;
//         }())
//     }]
// })

// $(document).ready(function(){
//     $(".click-btn1").click(function(){
//         $(".hidden-form1").toggle();
//     });
//     $(".click-btn2").click(function(){
//         $(".hidden-form2").toggle();
//     });
//     $(".click-btn3").click(function(){
//         $(".hidden-form3").toggle();
//     });
//     $(".click-btn4").click(function(){
//         $(".hidden-form4").toggle();
//     });
//     $(".click-btn5").click(function(){
//         $(".hidden-form5").toggle();
//     });
//     $(".click-btn6").click(function(){
//         $(".hidden-form6").toggle();
//     });
//     $(".click-btn7").click(function(){
//         $(".hidden-form7").toggle();
//     });
//     $(".click-btn8").click(function(){
//         $(".hidden-form8").toggle();
//     });
//     $(".click-btn9").click(function(){
//         $(".hidden-form9").toggle();
//     });
//     $(".click-btn10").click(function(){
//         $(".hidden-form10").toggle();
//     });
//     $(".click-btn11").click(function(){
//         $(".hidden-form11").toggle();
//     });
//     $(".click-btn12").click(function(){
//         $(".hidden-form12").toggle();
//     });
//     $(".click-btn13").click(function(){
//         $(".hidden-form13").toggle();
//     });
//     $(".click-btn14").click(function(){
//         $(".hidden-form14").toggle();
//     });
//     $(".click-btn15").click(function(){
//         $(".hidden-form15").toggle();
//     });
// });

var View = function () {
  var zoom = 1,
      end,
      scrolling = 0,
      scrolled = 0,
      posX = 0,
      posY = 0,
      board = document.getElementById('board'),
      view = document.getElementById('view'),
      transformPrefix, transform;

  
  function GetVendorPrefix(arrayOfPrefixes) {
    for (var i = 0; i < arrayOfPrefixes.length; ++i) {
      if (typeof board.style[arrayOfPrefixes[i]] != 'undefined') {
        return arrayOfPrefixes[i];
      }
    }
  }
  
  transformPrefix = GetVendorPrefix(["transform", "msTransform", "MozTransform", "webkitTransform", "OTransform"]);
  
  function applyView() {
    board.style[transformPrefix] = 'scale(' + zoom + ') ' + 'translate3d(' + posX + 'px,' + posY + 'px,0)';
  }
  
  view.addEventListener('wheel', function (e) {

    if ((1 !== zoom && e.deltaY > 0) ||
        (0.1 !== zoom && e.deltaY < 0)) {
    
      e.deltaY > 0 ? scrolling++ : scrolling--;

      if (scrolling % 1 === 0) {
        zoom += (scrolling / 50);
        if (zoom > 1) {
          zoom = 1;
        }
        if (zoom < 0.1) {
          zoom = 0.1;
        }

        applyView();
      }
      
      clearTimeout(end);

      end = setTimeout(function () {
        scrolled = 0;
        scrolling = 0;
      }, 20);
    
    }
  });
  
  view.onmousedown = function (e) {
    var prevX = e.clientX,
        prevY = e.clientY;
  
    view.onmousemove = function (ev) {

      posX += (ev.clientX - prevX) * (1 / zoom);
      posY += (ev.clientY - prevY) * (1 / zoom);
      prevX = ev.clientX;
      prevY = ev.clientY;
      applyView();
    }
  };
  view.onmouseup = function () {
    view.onmousemove = null;
  };
}();

var items = document.querySelectorAll('.item');
for ( var i=0, len = items.length; i < len; i++ ) {
  var item = items[i];
  // make element draggable with Draggabilly
  var draggie = new Draggabilly( item,  {
    handle: '.handle'
  });
}