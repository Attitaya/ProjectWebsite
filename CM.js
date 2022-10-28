$(document).ready(function() {
    $(".sb-ul li").click(function() {
        $(".sb-sub-ul").slideUp();

        if($(this).children(".sb-sub-ul").is(":visible")) {
            $(this).children(".sb-sub-ul").slideUp();
            $(".chev-pos").removeClass("chev-rotate");
        }
        else {
            $(this).children(".sb-sub-ul").slideDown();
            $(" ul li a").on("click", function() {
                $(".chev-pos").removeClass("chev-rotate");
                $(this).find(".chev-pos").toggleClass("chev-rotate");
            });
        }
    });

    // --------------

    $("ul li a").click(function() {
        $("ul li a").removeClass("sb-ul-active");
        $(this).addClass("sb-ul-active");
    });
});