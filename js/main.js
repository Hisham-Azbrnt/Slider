var myImg = Array.from(document.querySelectorAll('.item img')),
    myPopContent = document.querySelector('.list-content'),
    close = document.getElementById('close'),
    prev = document.getElementById('prev'),
    next = document.getElementById('next'),
    counterBox = 0;

for(var i=0; i<myImg.length; i++){    
    myImg[i].addEventListener('click', showBox)
}

function showBox(e) {
    var imgSrc = e.target.src;
    myPopContent.style.display = 'flex';
    myPopContent.firstElementChild.style.backgroundImage = 'url('+imgSrc+')';

    counterBox = myImg.indexOf(e.target)
}

close.addEventListener('click', myClose);
function myClose() {
    myPopContent.style.display = 'none';
}

next.addEventListener('click', goNext);
function goNext() {
    counterBox++;
    if(counterBox === myImg.length) {
        counterBox = 0
    }
    myPopContent.firstElementChild.style.backgroundImage = 'url('+myImg[counterBox].src+')';

}

prev.addEventListener('click', goPrev);
function goPrev() {
    counterBox--;
    if(counterBox < 0) {
        counterBox = myImg.length-1;
    }
    myPopContent.firstElementChild.style.backgroundImage = 'url('+myImg[counterBox].src+')';

}


document.addEventListener('keydown', function (e) {
    if(e.keyCode == 39) {
        goNext()
    } else if(e.keyCode == 37) {
        goPrev()
    } else if (e.keyCode == 27) {
        myClose()
    }
})

