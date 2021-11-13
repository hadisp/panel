// input field
$('.mod-edit').on('click', function(){
    $('.mod-input-t').removeAttr('disabled');
});        
$('.mod-edit-reg').on('click', function(){
    $('.mod-input-t').prop('disabled',true);
});

var arr = $('input:checkbox.mod-check').filter(':checked').map(function () {
    console.log(this.id);
});
// menu
// var selector = '.uk-list.mod-list li';
// $(selector).on('click', function(){
//     $(selector).removeClass('mod-active');
//     $(this).addClass('mod-active');
// });
$(document).ready(function() {
	// get current URL path and assign 'active' class
    var pathname = window.location.pathname;
    // alert(pathname);
    $('.mod-list> li > a[href="' + pathname + '"]').parent().addClass('mod-active');
})


$(".mod-check").change(function() {
    if(this.checked) {
        var num = $(this).attr('id').replace(/m/, '');
        var t="t"+num;
        $('.'+t).removeAttr('disabled');
        
    }
});
