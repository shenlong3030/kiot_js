function copyToClipboard(text) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(text).select();
    document.execCommand("copy");
    $temp.remove();
}

$('html').on('click', '.tdCode', function(){
    copyToClipboard($(this).text());
    console.log("copied the value: " + $(this).text());
})
