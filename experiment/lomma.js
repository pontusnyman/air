	//Information om punkterna
	var bjarredcentrum = {
		info: '<strong>Bjärrend Centrum</strong><br>\
                <p>Vid busshållplatserna</p>\<a href="https://maps.apple.com/?daddr=55.722259,13.027003">Hitta hit</a>',
		lat: 55.722259,   
		long: 13.027003
	};

	var ovalen = {
		info: '<strong>Ovalen i Lomma</strong><br>\
                <p>Ej säker på positionen</p>\<a href="https://maps.apple.com/?daddr=55.674014,13.068996">Hitta hit</a>',
		lat: 55.674014,   
		long: 13.068996
	};
	
	//Array
	var locations = [
		[bjarredcentrum.info, bjarredcentrum.lat, bjarredcentrum.long, 0],	
		[ovalen.info, ovalen.lat, ovalen.long, 1]	
	]

function initMap()
{
    var latlng = new google.maps.LatLng(55.698039, 13.054601);
	var myOptions = {
        zoom: 13,
        center: latlng, 
        mapTypeId: google.maps.MapTypeId.ROADMAP
	);
    var map = new google.maps.Map(document.getElementById('map'), myOptions);
	
	var infowindow = new google.maps.InfoWindow({});
    
	var marker, i;

	for (i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
			map: map
		});

		google.maps.event.addListener(marker, 'mouseover', (function (marker, i) {
			return function () {
				infowindow.setContent(locations[i][0]);
				infowindow.open(map, marker);
			}
		})(marker, i));
	}	
    
    // Back button - Create the DIV to hold the control and call the CenterControl() constructor
    var centerControlDiv = document.createElement('div');
    var centerControl = new CenterControl(centerControlDiv, map);
    centerControlDiv.index = 1;
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);
    // Back button end
}

function CenterControl(controlDiv, map) {

  // Set CSS for the control border.
  var controlUI = document.createElement('div');
  controlUI.style.backgroundColor = '#fff';
  controlUI.style.border = '2px solid #fff';
  controlUI.style.borderRadius = '3px';
  controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
  controlUI.style.cursor = 'pointer';
  controlUI.style.marginBottom = '22px';
  controlUI.style.textAlign = 'center';
  controlUI.title = 'Klicka för att gå tillbaka!';
  controlDiv.appendChild(controlUI);

  // Set CSS for the control interior.
  var controlText = document.createElement('div');
  controlText.style.color = 'rgb(25,25,25)';
  controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
  controlText.style.fontSize = '16px';
  controlText.style.lineHeight = '38px';
  controlText.style.paddingLeft = '5px';
  controlText.style.paddingRight = '5px';
  controlText.innerHTML = 'Klicka för att backa';
  controlUI.appendChild(controlText);
    
   // Setup the click event listeners: simply set the map to Chicago.
  controlUI.addEventListener('click', function() {
    window.location.href = '../../index.html';
  });
}