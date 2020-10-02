var setDefaultActive = function () {
    var path = window.location.pathname;

    var element = $("ul.collapsible-accordion li.item a.collapsible-header[href='" + path + "']");
    element.addClass("active-sidebar");

}

setDefaultActive()