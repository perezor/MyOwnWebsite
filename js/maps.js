const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const galleryIframes = document.querySelectorAll('.map-ifr');
let mapIndex= 0;

prevBtn.addEventListener('click', function(){
    galleryIframes[mapIndex].classList.remove("active");
    mapIndex--;
    galleryIframes[mapIndex].classList.add("active");
    nextBtn.disabled=false;
    
    if (mapIndex === 0){
        prevBtn.disabled = true;
    }
});

nextBtn.addEventListener('click', function(){
    galleryIframes[mapIndex].classList.remove("active");
    mapIndex++;
    console.log(mapIndex);
    galleryIframes[mapIndex].classList.add("active");
    prevBtn.disabled = false;

    if (galleryIframes.length === mapIndex+1){
        nextBtn.disabled = true;
     }
});
