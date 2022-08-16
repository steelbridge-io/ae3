/** Custom JS */
/*jQuery(function($) {
    $("#architecture_animation").hover(function () {
        $(".ae3_animation").addClass('animate__animated animate__fadeInLeft');
    });
    $("#architecture_animation"),function () {
        $(".ae3_animation").removeClass('animate__animated animate__fadeInLeft');
    };
});*/

jQuery(function($) {
    $("#architecture_animation").hover(
        function () {
            $(".ae3_animation").addClass("animate__animated animate__fadeInLeft");
        },
        function () {
            $(".ae3_animation").removeClass("animate__animated animate__fadeInLeft");
        }
    );
    $("#construction_animation").hover(
        function () {
            $(".ae3_animation").addClass("animate__animated animate__fadeInLeft");
        },
        function () {
            $(".ae3_animation").removeClass("animate__animated animate__fadeInLeft");
        }
    );
    $("#real_estate_animation").hover(
        function () {
            $(".ae3_animation").addClass("animate__animated animate__fadeInLeft");
        },
        function () {
            $(".ae3_animation").removeClass("animate__animated animate__fadeInLeft");
        }
    );
    $("#sustainable-design").hover(
        function () {
            $(".ae3_animation").addClass("animate__animated animate__fadeInLeft");
        },
        function () {
            $(".ae3_animation").removeClass("animate__animated animate__fadeInLeft");
        }
    );
});





