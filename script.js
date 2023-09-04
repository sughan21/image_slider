'use script';

// i/p
const imageEle = document.querySelector('.image');
const nextBtnEle = document.getElementById('btn-next');
const previousBtnEle = document.getElementById('btn-previous');

// gv
let index = 0;
const imageArr = ["image-0.jpg","image-1.jpg","image-2.jpg","image-3.jpg","image-4.jpg"];
const str = "./images/";

// functions
function init(){
  imageEle.src = `${str}${imageArr[0]}`;
}

const changeImage = ()=>{
  if(index < 0){
    index = imageArr.length-1;
  }else if(index >= 0 && index < imageArr.length){
  }else if(index == imageArr.length){
    index = 0;
  }
  imageEle.src = `${str}${imageArr[index]}`;
}

// eventlistener
nextBtnEle.addEventListener('click',()=>{
  index += 1;
  changeImage();
});

previousBtnEle.addEventListener('click',()=>{
  index -= 1;
  changeImage();
});

init();

