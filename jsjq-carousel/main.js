$(document).ready(function () {
    var nextButton = $(".next");
    var prevButton = $(".prev");

    nextButton.click(function () {
        nextImg();
    });    
    prevButton.click(function () {
        prevImg();
    });

// change image by pressing arrow left-right keys
    $(document).keydown(function() {
        var key = event.which;
        if (key == 39) {
            nextImg();
        }else if (key == 37) {
            prevImg();
        }
    })

    $("i").click(function() {
        $(".nav > i").removeClass("active");
        $("this").addClass("active");
        var thisIndex = $(this).index();
        console.log(thisIndex);
        $("img.active").removeClass("active");
        $("img").eq(thisIndex).addClass("active");
    })
});

function nextImg () {
    var imgActive = $(".slider-wrapper img.active");
        imgActive.removeClass("active");

        var iActive = $(".slider-wrapper i.active")
        iActive.removeClass("active");

        if (imgActive.hasClass("last")) {
            $(".slider-wrapper img.first").addClass("active");
            $(".slider-wrapper i.first").addClass("active");
        } else {
            imgActive.next().addClass("active");
            iActive.next().addClass("active");
        }
}

function prevImg () {
    var imgActive = $(".slider-wrapper img.active");
    imgActive.removeClass("active");

    var iActive = $(".slider-wrapper i.active")
    iActive.removeClass("active");

    if (imgActive.hasClass("first") == true) {
        $(".slider-wrapper img.last").addClass("active");
        $(".slider-wrapper i.last").addClass("active");
    } else {
        imgActive.prev().addClass("active");
        iActive.prev().addClass("active");
    }
}