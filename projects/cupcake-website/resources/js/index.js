//Back to top button functionality
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


// Map functionality
const mapDiv = document.getElementById('map');
let map = new ol.Map({
    target: mapDiv,
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([-119.239278, 34.276556]),
      zoom: 15.5
    })
  });
