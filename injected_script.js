function copyToClipBoard(text) {
    var $temp = $("<textarea>");
    $("body").append($temp);
    $temp.val(text).select();
    document.execCommand("copy");
    $temp.remove();
}

function customizeFocus() {
    //### PAGE : product ####
    // disable tab focus
    $(".header-filter a").attr('tabindex', -1);
    $(".header-filter button").attr('tabindex', -1);
    $(".header-filter #columnSelection").attr('tabindex', -1);
    
    // select input content when focus Search
    $("input[ng-model='filterProduct']").focus(function() {
       $(this).select();
    });

    //### PAGE : PurchaseOrder (Nhap Hang) ####
    $(".k-grid-content a").attr('tabindex', -1);
}

function injectForm() {
    $(".input-group-append .dropdown-content").addClass("shenForm");
    $(".shenForm").insertAfter(".header-filter");
    $(".shenForm").css("display", "contents");
    $(".shenForm button").css("display", "none");

    // show input masp
    $(".shenForm div:first-child").removeClass("ng-hide");

    customizeFocus();
}

$(document).ready(function() {
    setTimeout(function() {
        // show input tìm kiếm hàng hóa
        injectForm();

        // tạo toolbar
        var container = $('<div id="floating_bar"></div>');
        container.css("position","fixed");
        container.css("padding", "14px");
        container.css("text-align", "center");
        container.css("text-align", "center");
        container.css("display", "block");
        container.css("z-index", "20000");
        container.prependTo($("body"));

        var btn = $('<input id="btn_copy_name" type="button" value="Copy tên" />');
        btn.appendTo(container);
        btn.click(function(e) {
            var text = "";
            $("table tr>td.cell-auto.ng-binding:not(:first)").each(function() {
                text = text + $(this).text() + "\n";
            });
            console.log("copy text : " + text);
            copyToClipBoard(text);
        });
    
        btn = $('<input id="btn_copy_sl" type="button" value="Copy SL" />');
        btn.appendTo(container);
        btn.click(function(e) {
            var text = "";
            $("table tr>td:nth-child(14):not(:first)").each(function() {
                text = text + $(this).text() + "\n";
            });
            console.log("copy text : " + text);
            copyToClipBoard(text);
        });
        
        btn = $('<input id="btn_copy_id" type="button" value="Copy mã" />');
        btn.appendTo(container);
        btn.click(function(e) {
            var text = "";
            $("table").find("td.cell-code.tdCodeDoctor").each(function() {
                text = text + $(this).text() + "\n";
            });
            console.log("copy text : " + text);
            copyToClipBoard(text);
        });

        btn = $('<input id="btn_copy_name_id" type="button" value="Copy SP tạo QRcode" />');
        btn.appendTo(container);
        btn.click(function(e) {
            var text = "";
            $(".k-window-poup table").find("td.cell-code").each(function() {
                var masp = $(this).text().trim();
                if(!masp) {
                    return true;
                }

                var trNode = $(this).closest( "tr" )
                var tensp = trNode.find(".cell-auto").first().text().trim();
                tensp = tensp.replace("CL ", "");

                var sl = trNode.find("input").first().val();
                text = text + masp + "__" + tensp + "\t" + sl + "\n";
            });
            if(text) {
            	console.log("copy text : " + text);
            	copyToClipBoard(text);
            } else {
            	$(".k-grid-content table").find("td.cell-code.tdCodeDoctor").each(function() {
	                var masp = $(this).text().trim();
	                if(!masp) {
	                    return true;
	                }

	                var trNode = $(this).closest( "tr" )
	                var tensp = trNode.find(".cell-auto.ng-binding").first().text().trim();
	                tensp = tensp.replace("CL ", "");

	                var sl = trNode.find("td:nth-child(14)").text().trim();
	                text = text + masp + "__" + tensp + "\t" + sl + "\n";
	            });
	            if(text) {
	            	console.log("copy text : " + text);
	            	copyToClipBoard(text);
	            }
            }

        });

    }, 3000);
});

window.addEventListener('hashchange', function(e) {
    setTimeout(function() {
        injectForm();
    }, 3000);
});
