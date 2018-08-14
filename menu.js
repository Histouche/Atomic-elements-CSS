/**
 * Created by Jonathan Rodrigues on 10/08/2018.
*/
$(document).ready(function(){
    /* sidebar */
    $(".hamburger").on("touchstart click", function(e) {
        /* animation cross */
        $(this).toggleClass("is-active");
        /* open menu */
        e.preventDefault(), $(".sidebar").toggleClass("active"), $(".nav").removeClass("active"), $(".sidebar .sidebar-overlay").removeClass("fadeOut animated").addClass("fadeIn animated")
    }), $(".sidebar .sidebar-overlay").on("touchstart click", function(e) {
        e.preventDefault(), $(".hamburger").click(),$('.hamburger').removeClass("is-active"), $(this).removeClass("fadeIn").addClass("fadeOut")
    })

    /* change theme */
    $('.changeTheme').on('click', function(){
        console.log("aaa");
        $("body, #stars, #stars2, #stars3").toggleClass('light');
    });
});

