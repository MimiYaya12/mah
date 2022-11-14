(".leaflet-container").css("height","0vh")


 $(document).ready(function(){
   $("form").submit (function(event){
      event.preventDefault();
        var settings = {
          "url": "https://api-adresse.data.gouv.fr/search/?q="+$('.input-search').val()+"&type=housenumber&autocomplete=1",
          "method": "GET",
          "timeout": 0,
        };
        <input type="text" name="input1" id="input1" onchange="document.getElementById('input2').value = this.value;" />

         $(".leaflet-container").css("height","90vh");
         $(".leaflet-container").hide(0);
         $(".leaflet-container").show(2000)
         setTimeout (() => {
             $.ajax(settings).done(function (response) {
              LeafletSelection(response.features[0].geometry.coordinates);
            });
         },2100)
    })
 })




const LeafletSelection = (coordinates) =>{


    console.log(coordinates)

    var tableauValeur = [
        [coordinates[1], coordinates[0]],
        [48.905, 2,48],
        [48.805, 2,58],
        [48.705, 2,68],
        [48.605, 2,78],
        [48.505, 2,88]
    ]
    
    var map = L.map('map').setView([tableauValeur[0][0], tableauValeur[0][1]], 13);
    
    
    for (let i = 0; i < tableauValeur.length; i++) {
        L.marker([tableauValeur[i][0], tableauValeur[i][1]]).addTo(map)
        .bindPopup('Hello.<br> j habite ici.')
        .openPopup();
        
    }
    // var polygon = L.polygon([
    //     [48.900, 2.48],
    //     [48.850, 2.45],
    //     [48.800, 2.40]
    // ]).addTo(map);
    
    var circle = L.circle([48.950, 2.48], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(map);
    
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    
    // Maps Layers at: https://leaflet-extras.github.io/leaflet-providers/preview/
    
    

   }

