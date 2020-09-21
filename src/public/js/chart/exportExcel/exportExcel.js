var tablesToExcelMultiTabs = (function ($) {
    var uri = 'data:application/vnd.ms-excel;base64,'
    , html_start = `<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">`
    , template_ExcelWorksheet = `<x:ExcelWorksheet><x:Name>{SheetName}</x:Name><x:WorksheetSource HRef="sheet{SheetIndex}.htm"/></x:ExcelWorksheet>`
    , template_ListWorksheet = `<o:File HRef="sheet{SheetIndex}.htm"/>`
    , template_HTMLWorksheet = `
------=_NextPart_dummy
Content-Location: sheet{SheetIndex}.htm
Content-Type: text/html; charset=windows-1252

` + html_start + `
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <link id="Main-File" rel="Main-File" href="../WorkBook.htm">
  <link rel="File-List" href="filelist.xml">
</head>
<body><table>{SheetContent}</table></body>
</html>`
        , template_WorkBook = `MIME-Version: 1.0
X-Document-Type: Workbook
Content-Type: multipart/related; boundary="----=_NextPart_dummy"

------=_NextPart_dummy
Content-Location: WorkBook.htm
Content-Type: text/html; charset=windows-1252

` + html_start + `
<head>
<meta name="Excel Workbook Frameset">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<link rel="File-List" href="filelist.xml">
<!--[if gte mso 9]><xml>
 <x:ExcelWorkbook>
  <x:ExcelWorksheets>{ExcelWorksheets}</x:ExcelWorksheets>
  <x:ActiveSheet>1</x:ActiveSheet>
 </x:ExcelWorkbook>
</xml><![endif]-->
</head>
<frameset>
  <frame src="sheet0.htm" name="frSheet">
  <noframes><body><p>This page uses frames, but your browser does not support them.</p></body></noframes>
</frameset>
</html>
{HTMLWorksheets}
Content-Location: filelist.xml
Content-Type: text/xml; charset="utf-8"

<xml xmlns:o="urn:schemas-microsoft-com:office:office">
  <o:MainFile HRef="../WorkBook.htm"/>
  {ListWorksheets}
  <o:File HRef="filelist.xml"/>
</xml>
------=_NextPart_dummy--
`
	, base64 = function (s) { return window.btoa(unescape(encodeURIComponent(s))) }
	, format = function (s, c) { return s.replace(/{(\w+)}/g, function (m, p) { return c[p]; }) }
	return function (tables, filename) {
		var context_WorkBook = {
			ExcelWorksheets: ''
		, HTMLWorksheets: ''
		, ListWorksheets: ''
		};
		var tables = jQuery(tables);
		var dt = new Date();
		var day = dt.getDate();
		var month = dt.getMonth() + 1;
		var year = dt.getFullYear();
		var hour = dt.getHours();
		var mins = dt.getMinutes();
		var postfix = day + "." + month + "." + year + "_" + hour + "." + mins;
		$.each(tables, function (SheetIndex) {
			var $table = $('#' + tables[SheetIndex]);

			var SheetName = $table.attr('data-SheetName');
			if ($.trim(SheetName) === '') {
				SheetName = 'Sheet' + SheetIndex;
			}
			context_WorkBook.ExcelWorksheets += format(template_ExcelWorksheet, {
				SheetIndex: SheetIndex
			, SheetName: SheetName
			});
			context_WorkBook.HTMLWorksheets += format(template_HTMLWorksheet, {
				SheetIndex: SheetIndex
			, SheetContent: $table.html()
			});
			context_WorkBook.ListWorksheets += format(template_ListWorksheet, {
				SheetIndex: SheetIndex
			});
		});

		var link = document.createElement("A");
		link.href = uri + base64(format(template_WorkBook, context_WorkBook));
		link.download = "ReportChart" + postfix + ".xls";
		link.target = '_blank';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
        }
    })(jQuery);