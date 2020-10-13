window.addEventListener('load' , ()=>{

    var $pX = 'X', $pO = 'O', $player = 1 ;

    var $c = document.getElementById("board").children;
    var x;
    for(x =0; x < $c.length; x++){
        $c[x].className='square';
        $c[x].addEventListener('click', game)
    }

    const $plays = Array.from($c);

    function game(e){
        const $box = $plays.indexOf(e.target);
        $player == 1 ? (e.target.innerHTML = $pX, e.target.classList.add("X"), $player=2) :
        $player == 2 ? (e.target.innerHTML = $pO, e.target.classList.add("O"), $player=1) : alert("Error")
    }




})