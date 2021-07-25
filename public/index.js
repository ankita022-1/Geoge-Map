// mapping using map box
mapboxgl.accessToken = 'pk.eyJ1IjoiYW5raXRhLTEyMyIsImEiOiJja3I2M2dueWwwMjloMnZtYXcyZ3JveHh4In0.4MKO87mc6jXmROj2OCl37w';
var center = [80.283333, 13.083333];
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: center,
    zoom: 3
});
function setupMap(props) {
    map.flyTo({center:[props.lon, props.lat]});
    // create the popup    
     var popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`<h2>${props.tittle}</h2> <h4>lon:${props.lon} | lat:${props.lat} </h4>`);
    // create the marker
    var marker = new mapboxgl.Marker({
        draggable: false
    }).setLngLat([props.lon, props.lat])
        .addTo(map)
        .setPopup(popup);    
}
//taking inputs from user
function formSubmit() {
    let place = document.getElementById("place").value;
    let lon=document.getElementById("lon").value;
    let lat=document.getElementById("lat").value;

    if(lon <= 180 && lon >= -180 && lat <= 89.45016124669523 && lat >=  -87.71179927260242 ){
        let props = {
            tittle: place,
            lon: lon,
            lat: lat
        }
        setupMap(props);
    }
    else{
        alert("Please enter valid Data");
    }
    
}
// reset form 
function formReset(){
    let form=document.getElementById("form");
    form.reset();
}
