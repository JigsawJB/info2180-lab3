var redo = window.addEventListener('load' , ()=>{

    var $pX = 'X', $pO = 'O', $player = 1 ;
    var $win_cases = [ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6] ];

    var $c = document.getElementById("board").children;
    var x;
    for(x =0; x < $c.length; x++){
        $c[x].className='square';
        $c[x].addEventListener('click', game, {once:true});
        $c[x].addEventListener('mouseover', cursor);
        $c[x].addEventListener('mouseout', nocursor);
        $c[x].addEventListener('click', selectWinner);
    }

    var $track = [ '' , '' , '' , '' , '', '' , '' , '' , ''];
    const $plays = Array.from($c);
    
    function game(e){
        const $box = $plays.indexOf(e.target);
        $player == 1 ? (e.target.innerHTML = $pX, e.target.classList.add("X"), $player=2) :
        $player == 2 ? (e.target.innerHTML = $pO, e.target.classList.add("O"), $player=1) : alert("Error");
    }

    function cursor(e){
        e.target.classList.add("hover");
    }
    function nocursor(e){
        e.target.classList.remove("hover");
    }

    var status = document.getElementById("status");

    function selectWinner(){
        for(i=0; i < $win_cases.length; i++) {
            if ($plays[$win_cases[i][0]].innerHTML=="X" && $plays[$win_cases[i][1]].innerHTML=="X" && 
                $plays[$win_cases[i][2]].innerHTML=="X") {
                    status.innerHTML= "Congratulations! X is the Winner!";
                    status.classList.add("you-won");
            }else if ($plays[$win_cases[i][0]].innerHTML=="O" && $plays[$win_cases[i][1]].innerHTML=="O" && 
                $plays[$win_cases[i][2]].innerHTML=="O"){
                    status.innerHTML= "Congratulations! O is the Winner!";
                    status.classList.add("you-won");
            }
        }
    }

    var $reload=document.getElementsByClassName("btn")[0];
    $reload.addEventListener('click', restart);
    
    function restart(){
        window.location.reload();
    }
})