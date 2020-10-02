$('.datepicker input').click(function(event){
    $('.datepicker').data("datepicker").show();
 });

 $('.datepicker').pickadate();
        $('#end-date').datepicker({
    dateFormat: "yy/mm/dd" ,
    
  });

  $("#start-date").datepicker({
    dateFormat: "yy/mm/dd",
    allowInputToggle: true,
    onSelect: function(date) {
      var date1 = $('#start-date').datepicker('getDate');
      var date = new Date(Date.parse(date1));
      date.setDate(date.getDate());
      var newDate = date.toDateString();
      newDate = new Date(Date.parse(newDate));
      $('#end-date').datepicker("option", "minDate", newDate);
    }
  });

  $('#endTime').datepicker({
    dateFormat: "yy/mm/dd" 
  });

  $("#startTime").datepicker({
    dateFormat: "yy/mm/dd",
    allowInputToggle: true,
    onSelect: function(date) {
      var date2 = $('#startTime').datepicker('getDate');
      var date = new Date(Date.parse(date2));
      date.setDate(date.getDate());
      var newDate = date.toDateString();
      newDate = new Date(Date.parse(newDate));
      $('#endTime').datepicker("option", "minDate", newDate);
    }
  });