$(window).on('load', function() {
	setTimeout(function(){
		$(".input-group-append .dropdown-content").addClass("shenForm");

		$(".shenForm").insertAfter(".header-filter");
		$(".shenForm").css("display", "contents");
		$(".shenForm button").css("display", "none");
	}, 1000);
});

function copyToClipboard(text) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(text).select();
    document.execCommand("copy");
    $temp.remove();
}

// copy MaSP khi click SP ngoai DanhMuc
$('html').on('click', '.tdCode', function(){
    copyToClipboard($(this).text());
    console.log("copied the value: " + $(this).text());
})

// copy MaSP khi click SP tim duoc khi BanHang
$('html').on('click', '.search-product-info', function(){
    var e = $(this).find('.codeValue');
    copyToClipboard(e.text());
    console.log("copied the value: " + e.text());
})
