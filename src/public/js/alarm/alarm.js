$('.datepicker input').click(function(event){
    $('.datepicker').data("datepicker").show();
 });

 $('.datepicker').pickadate();
 $('#end-date-alarm').datepicker({
dateFormat: "yy/mm/dd" ,

});

$("#start-date-alarm").datepicker({
    dateFormat: "yy/mm/dd",
    allowInputToggle: true,
    onSelect: function(date) {
    var date1 = $('#start-date-alarm').datepicker('getDate');
    var date = new Date(Date.parse(date1));
    date.setDate(date.getDate());
    var newDate = date.toDateString();
    newDate = new Date(Date.parse(newDate));
    $('#end-date-alarm').datepicker("option", "minDate", newDate);
    }
});

function ConfirmDelete(){
    var x = confirm("Are you sure you want to delete?");
    if (x)
    return true;
    else
    return false;
}