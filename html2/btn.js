$(function(){
    $(".btn2").click(function(){
        $(this).data("status", "inactive");
        $(".circle").removeClass("one, two");
        $(this).html("!");
    });
});