const images = ["./Images/womens-day.jpg","./Images/img2.jpg","./Images/img3.jpg","./Images/img4.jpg","./Images/img5.jpg","./Images/img6.jpg"];

let prev = document.querySelector('.left-arrow');
let next = document.querySelector('.right-arrow');
let currentImage = document.getElementById('myImage');
let curr = 0;
prev.addEventListener('click',()=>{
    if(curr===0){
        curr = images.length-1;
    }
    else{
        curr = curr-1;
    }
    currentImage.src = images[curr];
});
next.addEventListener('click',()=>{
    curr = (curr+1)%images.length;
    currentImage.src = images[curr];
})