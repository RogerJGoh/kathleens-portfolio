//sidenav
$("#hamburger").on("click",function(e){
    console.log(document.getElementById("sidenav").style.width)
    if(document.getElementById("sidenav").style.width == "0px" || document.getElementById("sidenav").style.width == ""){
        document.getElementById("sidenav").style.width = "100vw";
    }else{
        document.getElementById("sidenav").style.width = "0px";
    }
    
});

// $("#hamburger").on("click",function(e){
//     document.getElementById("sidenav").style.width = "0px";
// });