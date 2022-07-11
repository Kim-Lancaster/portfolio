let button =  document.getElementById('back-to-top');

const buttonAppears = () => {
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        button.style.display = "block";
    }
    else {
        button.style.display = "none";
    }
}

const backToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.addEventListener('scroll', buttonAppears);
button.addEventListener('click', backToTop);