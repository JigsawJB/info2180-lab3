window.addEventListener("load", function(){

    
    let c = document.getElementById("board").children;

    for (var bx = 0; bx <= c.length; bx++)
    {
        c[bx].className="square";
    }
});