$(window).on('load', function() {
	setTimeout(function(){
		$(".input-group-append .dropdown-content").addClass("shenForm");

		$(".shenForm").insertAfter(".header-filter");
		$(".shenForm").css("display", "contents");
		$(".shenForm button").css("display", "none");
	}, 3000);
    
    function copyToClipBoard(text) {
        var $temp = $("<textarea>");
        $("body").append($temp);
        $temp.val(text).select();
        document.execCommand("copy");
        $temp.remove();
    }
    
    var $btn2 = $('<input id="btn_copy_name" type="button" value="Copy tên" />');
    $btn2.prependTo($("body"));
    $('#btn_copy_name').click(function (e) {
          var text = "";
          $("table").find("td.cell-auto.ng-binding").each(function(){
              text = text + $(this).text() + "\n";
          });
          console.log("copy text : " + text );
          copyToClipBoard(text);
    });
    
    var $btn1 = $('<input id="btn_copy_id" type="button" value="Copy mã" />');
    $btn1.prependTo($("body"));
    $('#btn_copy_id').click(function (e) {
          var text = "";
          $("table").find("td.cell-code.tdCodeDoctor").each(function(){
              text = text + $(this).text() + "\n";
          });
          console.log("copy text : " + text );
          copyToClipBoard(text);
    });
    
     // copy MaSP khi click SP
    $('body').on('click', 'tr.k-master-row', function(){
        $(this).find(".cell-code.tdCodeDoctor").each(function(){
            copyToClipBoard($(this).text());
            console.log("copied the value: " + $(this).text());
        });
    })
});

window.addEventListener('hashchange', function(e) {
    setTimeout(function(){
		$(".input-group-append .dropdown-content").addClass("shenForm");

		$(".shenForm").insertAfter(".header-filter");
		$(".shenForm").css("display", "contents");
		$(".shenForm button").css("display", "none");
	}, 3000);
});

