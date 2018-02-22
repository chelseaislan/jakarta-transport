var map; // to initialize bing maps
function loadMapScenario() {
    map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
    center: new Microsoft.Maps.Location(-6.310904, 106.851289),
    mapTypeId: Microsoft.Maps.MapTypeId.aerial,
    zoom: 10 });
}

// to show the schedule of each stations
function stabogor() {
var x = document.getElementById('schedule1');
if (x.style.display === 'none') {
    x.style.display = 'block';
} else {
    x.style.display = 'none';
   }
map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
    center: new Microsoft.Maps.Location(-6.594570, 106.790660),
    mapTypeId: Microsoft.Maps.MapTypeId.aerial,
    zoom: 16 });
}
function stabojong() {
var x = document.getElementById('schedule2');
if (x.style.display === 'none') {
    x.style.display = 'block';
} else {
    x.style.display = 'none';
   }
map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
    center: new Microsoft.Maps.Location(-6.494570, 106.794831),
    mapTypeId: Microsoft.Maps.MapTypeId.aerial,
    zoom: 16 });
}
function stadepok() {
var x = document.getElementById('schedule3');
if (x.style.display === 'none') {
    x.style.display = 'block';
} else {
    x.style.display = 'none';
   }
map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
    center: new Microsoft.Maps.Location(-6.390914, 106.821982),
    mapTypeId: Microsoft.Maps.MapTypeId.aerial,
    zoom: 17 });
}
function staui() {
var x = document.getElementById('schedule4');
if (x.style.display === 'none') {
    x.style.display = 'block';
} else {
    x.style.display = 'none';
   }
map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
    center: new Microsoft.Maps.Location(-6.361275, 106.831738),
    mapTypeId: Microsoft.Maps.MapTypeId.aerial,
    zoom: 16 });
}
function stamgrai() {
var x = document.getElementById('schedule5');
if (x.style.display === 'none') {
    x.style.display = 'block';
} else {
    x.style.display = 'none';
   }
map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
    center: new Microsoft.Maps.Location(-6.210822, 106.850171),
    mapTypeId: Microsoft.Maps.MapTypeId.aerial,
    zoom: 17 });
}
function stasud() {
var x = document.getElementById('schedule6');
if (x.style.display === 'none') {
    x.style.display = 'block';
} else {
    x.style.display = 'none';
   }
map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
    center: new Microsoft.Maps.Location(-6.202829, 106.823540),
    mapTypeId: Microsoft.Maps.MapTypeId.aerial,
    zoom: 17 });
}
function stanabang() {
var x = document.getElementById('schedule7');
if (x.style.display === 'none') {
    x.style.display = 'block';
} else {
    x.style.display = 'none';
   }
map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
    center: new Microsoft.Maps.Location(-6.186037, 106.811186),
    mapTypeId: Microsoft.Maps.MapTypeId.aerial,
    zoom: 17 });
}
function staduri() {
var x = document.getElementById('schedule8');
if (x.style.display === 'none') {
    x.style.display = 'block';
} else {
    x.style.display = 'none';
   }
map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
    center: new Microsoft.Maps.Location(-6.155990, 106.801556),
    mapTypeId: Microsoft.Maps.MapTypeId.aerial,
    zoom: 17 });
}
function stangke() {
var x = document.getElementById('schedule9');
if (x.style.display === 'none') {
    x.style.display = 'block';
} else {
    x.style.display = 'none';
   }
map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
    center: new Microsoft.Maps.Location(-6.144856, 106.800962),
    mapTypeId: Microsoft.Maps.MapTypeId.aerial,
    zoom: 17 });
}

