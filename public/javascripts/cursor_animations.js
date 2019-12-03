//cursor animations

//if enter and leave events trigger prematurely
//https://stackoverflow.com/questions/32024888/multiple-mouseenter-mouseleave-events-fired-on-overlapping-divs

var inContainer = false;
$(".art").on("mouseenter",function(e){  //here we simply add the same event listener to all elements of class art
    if(inContainer==false){
        $("#cursor_substitute").css("visibility", "visible");
        inContainer = true;
        console.log("in")

        //start animation and then end
        document.getElementById("cursor_substitute").src = "/images/cursor_substitute.gif";
        setTimeout(function(){
        document.getElementById("cursor_substitute").src = "/images/cursor_substitute.png";
        }, 900)
    }
});

$(".art").on("mouseleave",function(e){
    if(inContainer==true){
        $("#cursor_substitute").css("visibility", "hidden");
        inContainer = false;
        console.log("out")
    }
});

$(document).mousemove(function(e){
    if(inContainer==true){
        $("#cursor_substitute").css({left:e.pageX-16, top:e.pageY-16});
    }
});