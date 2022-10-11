// Map initialization 
    var map = L.map('map',{
        measureControl: true,
    }
    ).setView([9.9252, 78.1198], 10.4);
// Map initialization 

//osm layer
    var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href=""></a> '
    });
    osm.addTo(map);
//osm layer

// google street 
        googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    });
// googleStreets.addTo(map);

// google satellite
        googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    });
// googleSat.addTo(map)

// Marker
    var myIcon = L.icon({
        iconUrl: 'img/red_marker.png',
        iconSize: [40, 40],
    });
    var singleMarker = L.marker([9.9252, 78.1198], { icon: myIcon, draggable: false });
    var popup = singleMarker.bindPopup('Madurai City.').openPopup()
        popup.addTo(map);

    console.log(singleMarker.toGeoJSON())
// Marker

// GEOJSON
    //001
    var Madurai_Road = L.geoJSON(Madurai_RoadJson, {
        onEachFeatur: function(feature,layer) {
            layer.bindPopup(`<b>Name: </b)` + feature.properties.name)
        },
        style: {
            fillcolor:'red',
            fillcolor: 2,
            color: '#006400',
            Width: 0.1,
        }
    }).addTo(map);
    //001
    
    //002
    var geojsonMarkerOptions = {
        redius: 1,
        fillcolor: "#ff7800",
        color: "#000",
        weight : 1,
        opacity: 1,
        fillOpacity: 0.8
    };
    
    var markers = L.markerClusterGroup();

    var Madurai_Road_Intersect = L.geoJSON(Madurai_Road_IntersectJson,{
        pointToLayer: function(feature,latlng) {
            return markers.addLayer(L.circleMarker(latlng, geojsonMarkerOptions))
        }
    }).addTo(map);
    //002

    //003
    var Madurai_Village = L.geoJSON(Madurai_VillageJson,{
        onEachFeature: function (feature, layer) {
    
               const popupContent =
              '<h4 class = "text-primary">Madurai Village</h4>' +
              '<div class="container"><table class="table table-striped">' +
              "<thead><tr><th>Properties</th><th>Value</th></tr></thead>" +
              "<tbody><tr><td> NAME </td><td>" +
              feature.properties.NAME +
              "</td></tr>" +
              "<tr><td>TOWN_VILL </td><td>" +
              feature.properties.TOWN_VILL +
              "</td></tr>" +
              "<tr><td> SUB_DIST</td><td>" +
              feature.properties.SUB_DIST +
              "</td></tr>" +
              "<tr><td> TOT_P </td><td>" +
              feature.properties.TOT_P +
              "</td></tr>" +
              "<tr><td> TOT_F </td><td>" +
              feature.properties.TOT_F +
              "</td></tr>" +
              "<tr><td> TOT_WORK_P </td><td>" +
              feature.properties.TOT_WORK_P +
              "</td></tr>" +
              "<tr><td> TOT_WORK_M </td><td>" +
              feature.properties.TOT_WORK_M +
              "</td></tr>" +
              "<tr><td> TOT_M </td><td>" +
              feature.properties.TOT_M +
              "</td></tr>";
              
              layer.bindPopup(popupContent);
    
        },
        style: {
            fillcolor:'rgb(26, 5, 214)',
            fillcolor: 0.5,
            color: '#0000FF',
            outerWidth: 0,
            
        }
        }).addTo(map);


    //003

    //004
    var Madurai_Taluk = L.geoJSON(Madurai_TalukJson,{
        onEachFeature: function (feature, layer) {
    
               const popupContent =
              '<h4 class = "text-primary">Madurai_Taluk</h4>' +
              '<div class="container"><table class="table table-striped">' +
              "<thead><tr><th>Properties</th><th>Value</th></tr></thead>" +
              "<tbody><tr><td> Country </td><td>" +
              feature.properties.NAME_0 +
              "</td></tr>" +
              "<tr><td>State </td><td>" +
              feature.properties.NAME_1 +
              "</td></tr>" +
              "<tr><td>District </td><td>" +
              feature.properties.NAME_2 +
              "</td></tr>" +
              "<tr><td> Taluk </td><td>" +
              feature.properties.NAME_3+
              "</td></tr>";
              
              layer.bindPopup(popupContent);
        },
        style: {
            fillcolor:'rgb(26, 5, 214)',
            fillcolor: 0.5,
            color: 'red',
            outerWidth: 0,
            
        }
    }).addTo(map);
    //004

    //005
    var Madurai_District = L.geoJSON(Madurai_DistrictJson, {
        onEachFeatur: function(feature,layer) {
            layer.bindPopup(`<b>Name: </b)` + feature.properties.name)
        },
        style: {
            fillcolor:"rgba(255, 255, 255, 0)",
            fillcolor: 0.1,
            color: "rgb(0, 0, 0)",
            outerWidth: 0.1,
            
        }
     }).addTo(map);
    //005
   
    //006
    var District = L.geoJSON(Madurai_DistrictJson, {
        style: {
            fillcolor:'rgba(0, 0, 0, 0)',
            fillcolor: 0.5,
            color: '',
            outerWidth: 0,
            
        }
    }).addTo(map);
    //006
// GEOJSON

// Layer controller
    var baseMaps = {
        "OSM": osm,
        'Google Street': googleStreets,
        "Google Satellite": googleSat
    };

    var overlayMaps = {
        "Marker": singleMarker,
        'Madurai_Road': Madurai_Road,
        'Madurai_Road_Intersect': Madurai_Road_Intersect,
        'Madurai_Village': Madurai_Village,
        'Madurai_Taluk': Madurai_Taluk,
        'Madurai_District': Madurai_District,
        'District': District,

    };

    map.removeLayer(singleMarker)
    map.removeLayer(Madurai_Road)
    map.removeLayer(Madurai_Road_Intersect)
    map.removeLayer(Madurai_Village)
    map.removeLayer(Madurai_Taluk)
    map.removeLayer(Madurai_District)

    L.control.layers(baseMaps, overlayMaps, { collapsed: true}).addTo(map);
// Layer controller

// Map coodinate display
    map.on('mouseover', function () {
        console.log('your mouse is over the map')
    })

    map.on('mousemove', function (e) {
        document.getElementsByClassName('coordinate')[0].innerHTML = 'lat: ' + e.latlng.lat + 'lng: ' + e.latlng.lng;
        console.log('lat: ' + e.latlng.lat, 'lng: ' + e.latlng.lng)
    })
// Map coodinate display

// add map scale
    L.control.scale().addTo(map)
// add map scale

// Full screen map view
    var mapId = document.getElementById('map');
    function fullScreenview() {
        mapId.requestFullscreen();
    }
// Full screen map view

// Zoom to Layer
//$('.zoom-to-layer').click(function(){
//    map.setView([9.9252, 78.1198], 10.4)
//})
// Zoom to Layer

