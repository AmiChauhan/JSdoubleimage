var moveDiv = document.getElementById('second');



window.onmousemove = function (e)
{
    var y = e.pagey;
    var x=e.pageX;
    moveDiv.style.top=(y+0)+'px';
    moveDiv.style.left=(x+0)+'px';
    // moveDiv.style.backgroundColor="pink";
    //  moveDiv.style. backgroundImage = url("../image/img2.jpg");
}

  