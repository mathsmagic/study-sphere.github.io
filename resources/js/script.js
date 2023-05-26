/*$ sticky nav bar */
$(document).ready(function(){
    $(".about-section").waypoint(function(direction){
        if(direction=="down"){
        $("nav").addClass('sticky-nav');
        }else{
        $("nav").removeClass('sticky-nav');}
        });

        /* scroll to about section */

        $(".js--about-box").waypoint(function(direction){
            $(".js--about-box").addClass('animate__animated animate__fadeIn');
        }, {
            offset:'50%'
        });

        $(".js--services-section").waypoint(function(direction){
            $(".js--services-section").addClass('animate__animated animate__zoomIn');
        }, {
            offset:'50%'
        });

        $(".js--package-section").waypoint(function(direction){
            $(".js--enterprise").addClass('animate__animated animate__pulse');
        })
});
    