$("#hamburger").click(function () {
    $("#hamburger").toggleClass("fa-grip-lines  fa-times");
    $(".hamburger-menu").toggle();
    
})

$(".ham-drop").click(function() {
    $(this).children(".ham-drop-links").toggle();
})

