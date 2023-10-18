$(".gnb li").hover(
    function(){
        // $(this).find(".sub").stop().slideDown();
        $(".sub",this).stop().slideDown();
    },
    function(){
        $(".sub",this).stop().slideUp();
    }
);

$(".tab1").click(
    function(){
        $(".notice").show();
        $(".gallery").hide();
    }
);
$(".tab2").click(
    function(){
        $(".notice").hide();
        $(".gallery").css("display","flex");
    }
);