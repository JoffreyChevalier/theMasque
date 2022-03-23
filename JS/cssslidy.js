let i = 0;
let images = [src ="https://i.postimg.cc/brT8xtPf/photo-1.jpg", "https://i.postimg.cc/1RHZYwkL/photo-2.jpg", "https://i.postimg.cc/9M1CT9C5/photo-3.jpg", "https://i.postimg.cc/TYK5ddJY/photo-4.jpg", "https://i.postimg.cc/sfN1NFCF/photo-5.jpg", "https://i.postimg.cc/KjBzTzqn/photo-6.jpg", "https://i.postimg.cc/5Nm9WDZN/photo-7.jpg", "https://i.postimg.cc/yY64cxbs/photo-8.jpg", "https://i.postimg.cc/qRrZrZf4/photo-9.jpg", "https://i.postimg.cc/wB2DtWy6/photo-10.jpg", "https://i.postimg.cc/qvLLPccC/photo-11.jpg", "https://i.postimg.cc/3rFdCL3p/photo-13.jpg"];
let time = 6000;

function changeImg(){
    document.slide.src = images[i];
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout ("changeImg()", time);
}

window.onload = changeImg;