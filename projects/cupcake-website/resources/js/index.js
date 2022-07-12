const button =  document.getElementById('back-to-top');
let hasScrolled = false;

const buttonAppears = () => {
    if(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400){
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