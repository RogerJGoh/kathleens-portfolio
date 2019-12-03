//sidenav
$("#sidenav_trigger").on("mouseenter",function(e){
    document.getElementById("sidenav").style.width = "100px";
});

$("#sidenav_trigger").on("mouseleave",function(e){
    document.getElementById("sidenav").style.width = "0px";
});