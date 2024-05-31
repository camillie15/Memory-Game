const img1 = new Image;
img1.src = "img/img1.jpg";

const img2 = new Image;
img2.src = "img/img2.jpg";

const img3 = new Image;
img3.src = "img/img3.jpg";

const img4 = new Image;
img4.src = "img/img4.jpg";

const img5 = new Image;
img5.src = "img/img5.jpg";

const img6 = new Image;
img6.src = "img/img6.jpg";

const img7 = new Image;
img7.src = "img/img7.jpg";

const img8 = new Image;
img8.src = "img/img8.jpg";

const img9 = new Image;
img9.src = "img/img9.jpg";

const img10 = new Image;
img10.src = "img/img10.jpg";

const images = [img1, img1, img2, img2, img3, img3, img4, img4, img5, img5, img6, img6, 
    img7, img7, img8, img8, img9, img9, img10, img10];

var shufImg = images.sort(() => (Math.random() > .5) ? 2 : -1);

const containerGame = document.querySelector(".game");
let documentFrag = document.createDocumentFragment();

for (let i = 0; i < shufImg.length; i++){
    let minDiv = document.createElement('div');
    minDiv.className = 'item';
    const imgElement = shufImg[i];
    const newImg = document.createElement("IMG");
    newImg.src = imgElement.src;
    minDiv.appendChild(newImg); 

    minDiv.onclick = function(){
        this.classList.add('minDivOpen')
        setTimeout(function(){
            if(document.querySelectorAll('.minDivOpen').length > 1){
                if(document.querySelectorAll('.minDivOpen')[0].innerHTML == document.querySelectorAll('.minDivOpen')[1].innerHTML){
                    document.querySelectorAll('.minDivOpen')[0].classList.add('minDivMatch');
                    document.querySelectorAll('.minDivOpen')[1].classList.add('minDivMatch');
                    
                    document.querySelectorAll('.minDivOpen')[1].classList.remove('minDivOpen');
                    document.querySelectorAll('.minDivOpen')[0].classList.remove('minDivOpen');

                    if(document.querySelectorAll('.minDivMatch').length == images.length){
                        alert("Win, All cards are match");
                    }
                }else{
                    document.querySelectorAll('.minDivOpen')[1].classList.remove('minDivOpen');
                    document.querySelectorAll('.minDivOpen')[0].classList.remove('minDivOpen');
                }
            }
        },500);
    }
    documentFrag.appendChild(minDiv); 
}

containerGame.appendChild(documentFrag);

