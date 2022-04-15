mapboxgl.accessToken= 'pk.eyJ1IjoiYWt3YXNpMzAiLCJhIjoiY2t6aG5wN2Q1NDNndTJvcDQ0ZzBkbzQyOSJ9.Om7ek_mM4fe3ClIt_IrOIw'


// lngLat New York
var nys = [-75.000000,43.000000]

var map = new mapboxgl.Map({
  container:'mapContainer', // HTML container id
  style:'mapbox://styles/mapbox/dark-v9', // style URL
  center: nys, //starting position as [lng, lat]
  zoom: 3
  //minZoom: 9,
  // maxZoom:9,

});
var popup = new mapboxgl.Popup({
  offset:20,
})
   .setHTML('<h3>New York</h3>');

// add a marker for the New York
var marker = new mapboxgl.Marker({
  color:'gold'
})
.setLngLat (nys)
.setPopup(popup)
.addTo(map);

var popup = new mapboxgl.Popup({
  offset:20,
});

var img = document.createElement("img");

var pointsOfInterest= [

{
lnglat: [-149.895000000379611,61.237780000086417],
popupHtml: 'Anchorage Port',
subText: 'Port of Alaska is a Municipality of Anchorage-owned and -operated facility that serves Anchorage, the State of Alaska and the nation. It opened with the “Port of Anchorage” name in 1961 to support regional economic development. Anchorage Assembly renamed Port of Alaska in October 2017 to reflect its regional, state and national significance.'
},
{

lnglat: [-117.178400000264745, 32.708209999763774],
popupHtml: 'San Diego Port',
subText: 'The Port of San Diego manages San Diego Bay and 34 miles of its beautiful, natural waterfront for the people of California.The Port was established in 1962 under the Port Act and is charged with implementing the Tidelands Trust Doctrine. For over fifty years,the Ports five member cities Chula Vista, Coronado, Imperial Beach, National City and San Diego have worked together to develop and promote commerce, navigation, recreation and fisheries on and around San Diego Bay.',
},
{
lnglat: [-122.21401199961349, 37.505360000269583],
popupHtml: 'Redwood City Port',
subText: 'While in use since 1851, the Port of Redwood City was founded by City Charter in 1937. The Port of Redwood City is located 18 nautical miles south of San Francisco and is the only deep-water port in the South San Francisco Bay. The Port of Redwood City serves the Silicon Valley region and is a leading west-coast foreign trade agency. The Port’s strategic location fuels the construction industry by moving construction cargo used in the region. The Port of Redwood City specializes in bulk, neo-bulk and liquid cargoes',
},
{
lnglat: [-155.0758000003635, 19.728609999822265],
popupHtml: 'Honolulu Port',
subText: 'Honolulu Harbor, also called Kulolia and Ke Awa O Kou, is the principal seaport of Honolulu and the State of Hawaiʻi in the United States.',
},
{
lnglat: [-122.308100000064826, 37.821520000055834],
popupHtml: 'Oakland Port CA"',
subText: 'Port history spans a period of 165 years, which encompassed the Civil War, the Industrial Revolution, two World Wars, and America’s coming of age as a global power. We begin with Captain Thomas Gray, grandfather of the famous dancer Isadora Duncan, who initiated ferry service to San Francisco.',
},
{
lnglat: [-118.241000000112649, 33.777280000002655],
popupHtml: 'Port of Los Angeles',
subText: 'The Port of Los Angeles is America’s Port®, the nation’s premier gateway for international commerce and the busiest seaport in the Western Hemisphere. Located in San Pedro Bay, 25 miles south of downtown Los Angeles, the Port encompasses 7,500 acres of land and water along 43 miles of waterfront',
},
{
lnglat: [-122.359217999792023, 47.587711000257926],
popupHtml: 'Seattle Port',
subText: 'Founded in 1911 by a vote of the people as a special purpose government, the Port of Seattles mission is to promote economic opportunities and quality of life in the region by advancing trade, travel, commerce and job creation in an equitable, accountable and environmentally responsible manner.',
},
{
lnglat: [-80.181641999923116, 25.782862000181144],
popupHtml: 'Miami Port ',
subText: 'PortMiami is one of America’s fastest-growing global gateways. It contributes more than $43 billion annually to Miami-Dade County’s local economy and supports over 334,500 jobs in Florida. Located at the crossroads of north-south and east-west trade lanes and with big-ship capabilities, PortMiami serves ocean carrier customers by linking worldwide markets with U.S. consumers and producers.',
},
{
lnglat: [-82.522350000320714, 27.785340000128098],
popupHtml: 'Tampa Port ',
subText: 'Port Tampa Bay will be recognized as a leader in the maritime industry. Port Tampa Bay will have a customer driven, strategic business focus in working with stakeholders to develop and manage marine terminals and supporting infrastructure for the benefit of the regional economy. Port Tampa Bay will employ sound financial, business and environmental management practices in fulfilling its mission.',
},
{
lnglat: [-74.038356999904764, 40.673949000227203],
popupHtml: 'Port of New York and New Jersey',
subText: 'In the early 1900s, the Hudson and East Rivers were bustling with maritime activity. There was very little harmony and cooperation between New York and New Jersey. The two states frequently fought over jurisdiction rights on the mighty Hudson River.  After years of political negotiation, a compact between the two states was signed in 1921 and created The Port of New York Authority. The agency was given a broad mandate to develop and modernize the entire port district.',
},
{
lnglat: [-75.202191000372792, 39.918819999993325],
popupHtml: 'Port of Philadelphia',
subText: 'Philadelphia has been a major center of international commerce for over 300 years. Even today, with major port complexes serving major metropolitan centers throughout the country, Philadelphia and its international seaport maintains a preeminent position in several areas of trade, such as the importation of perishable cargoes from South America, high-quality paper products from Scandinavia, and premium meat from Australia and New Zealand.',
},
{
lnglat: [-71.052290000035896, 42.350939000244608],
popupHtml: 'Port of Massachusetts',
subText: 'At the Massachusetts Port Authority, our history is long, our responsibilities serious and our mission unwavering: to connect Massachusetts and New England to the world, safely, securely and efficiently, never forgetting our commitment to our neighbors who live and work around our ports and facilities.',

},
]

pointsOfInterest.forEach(function(pointOfInterest) {
var popup = new mapboxgl.Popup({offset:20 })
 .setHTML(`
   <h3>${pointOfInterest.popupHtml}</h3>
   <p>${pointOfInterest.subText}</p>
   <P>${pointsOfInterest.img}</p>
  `);
new mapboxgl.Marker({
color:'Cyan'

})
  .setLngLat(pointOfInterest.lnglat)
  .setPopup(popup)
  .addTo(map);

});

map.on ('load', function () {
map.addSource('major-ports', {
type: 'geojson',
//Use a URL for the value for the data property.
data: 'data/major-ports.geojson'
});

map.addLayer({
'id': 'major-ports',
'type': 'circle',
'source': 'major-ports',
'paint': {
  'circle-color': 'DarkSlateGrey',
}
});
})
map.on ('load', function () {
map.addSource('-7162369445271272240navigable-waterways-fixed', {
type: 'geojson',
//Use a URL for the value for the data property.
data: 'data/-7162369445271272240navigable-waterways-fixed.geojson'
});

map.addLayer({
'id': '-7162369445271272240navigable-waterways-fixed',
'type': 'line',
'source': '-7162369445271272240navigable-waterways-fixed',
'paint': {
  'line-color': 'LimeGreen',
}
});
})

map.on ('load', function (){
map.addSource('major_ports',{
'type': 'geojson',
'data': {
'type': 'FeatureCollection',
'features': [
{
'type': 'Feature',
'properties': {
'description':
'<strong>Chester Port</p>'
},
'geometry': {
'type': 'Point',
'coordinates': [-75.322199999738501, 39.854230000206684]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Buffalo Port</p>',
},
'geometry': {
'type': 'Point',
'coordinates': [-78.909476000143357, 42.937633000232054]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Fort Smith Port</p>',
},
'geometry': {
'type': 'Point',
'coordinates': [-94.385441999658141, 35.44520200009255]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Little Rock Port</p>',
},
'geometry': {
'type': 'Point',
'coordinates': [-92.358281000340696, 34.790791000257002]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Morgan City Port</p>',
},
'geometry': {
'type': 'Point',
'coordinates': [-91.280491000179737, 29.420290000226256]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Sacramento Port</p>',
},
'geometry': {
'type': 'Point',
'coordinates': [-122.399041999779854, 37.806664999659269]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>San Juan Port</p>',
},
'geometry': {
'type': 'Point',
'coordinates': [-66.099890000077295, 18.442329000185815]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Ponce Port</p>',
},
'geometry': {
'type': 'Point',
'coordinates': [-66.620996000352903, 17.978613000085073]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Sears Port</p>',
},
'geometry': {
'type': 'Point',
'coordinates': [-68.924969999625802, 44.452849999920929]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Portland Port</p>',
},
'geometry': {
'type': 'Point',
'coordinates': [-70.251339999594563, 43.649509999762756]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Portsmouth Port</p>',
},
'geometry': {
'type': 'Point',
'coordinates': [-70.738059999963767, 43.073979999770472]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Albany Port</p>',
},
'geometry': {
'type': 'Point',
'coordinates': [-73.74815999963289, 42.642709999942802]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Providence Port</p>',
},
'geometry': {
'type': 'Point',
'coordinates': [-71.398439999693721, 41.811780000039576]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>New Haven Port</p>',
},
'geometry': {
'type': 'Point',
'coordinates': [-72.904729999810499, 41.298829999841828]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Port Jefferson</p>',
},
'geometry': {
'type': 'Point',
'coordinates': [-73.072160000317893, 40.948810000222728]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Bridgeport</p>',
},
'geometry': {
'type': 'Point',
'coordinates': [-73.178859999710255, 41.172000000328872]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Camden-Gloucester Port</p>',
},
'geometry': {
'type': 'Point',
'coordinates': [-75.104320000223922, 39.943050000051358]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Paulsboro Port</p>',
},
'geometry': {
'type': 'Point',
'coordinates': [-75.22654999968799, 39.826890000156126]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Macus Hook Port</p>',
},
'geometry': {
'type': 'Point',
'coordinates': [-75.404240000415115, 39.81543999992801]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Conneaut Port</p>',
},
'geometry': {
'type': 'Point',
'coordinates': [-80.548599999900503, 41.966710000262147]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Stoneport</p>',
},
'geometry': {
'type': 'Point',
'coordinates': [-83.420781000025244, 45.298455000191495]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Calcite Port</p>',
},
'geometry': {
'type': 'Point',
'coordinates': [ -83.7755999999913, 45.392930000182211]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Alpena Port</p>',
},
'geometry': {
'type': 'Point',
'coordinates': [ -83.422269999829481, 45.055600000025002]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>St Clair Port</p>',
},
'geometry': {
'type': 'Point',
'coordinates': [-82.494129999693556, 42.826630000097147]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Detroit Port</p>',
},
'geometry': {
'type': 'Point',
'coordinates': [-83.109586000361318, 42.269094000260175]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Wilmington Port</p>',
},
'geometry': {
'type': 'Point',
'coordinates': [-75.506969999613872, 39.715889999656902]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>New Castle Port</p>',
},
'geometry': {
'type': 'Point',
'coordinates': [-75.561579999683744, 39.656680000110903]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Baltimore Port</p>',
},
'geometry': {
'type': 'Point',
'coordinates': [-76.517120000289182, 39.208990000340613]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Virginia Port</p>',
},
'geometry': {
'type': 'Point',
'coordinates': [-76.311739999562647, 36.866420000120833]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Morehead Port</p>',
},
'geometry': {
'type': 'Point',
'coordinates': [-76.724209999854594, 34.716929999991791]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Wilmington NC Port</p>',
},
'geometry': {
'type': 'Point',
'coordinates': [-77.953953999979603, 34.239278000103141]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Wilmington NC Port</p>',
},
'geometry': {
'type': 'Point',
'coordinates': [-77.953953999979603, 34.239278000103141]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Pittsburgh Port</p>',
},
'geometry': {
'type': 'Point',
'coordinates': [-80.016120000417956, 40.442340000286514]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Ashtabula Port</p>',
},
'geometry': {
'type': 'Point',
'coordinates': [-80.791719999885586, 41.918730000172815]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Panama City Port</p>',
},
'geometry': {
'type': 'Point',
'coordinates': [ -84.199260000265483, 30.190090000216639]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Jacksonville Port</p>',
},
'geometry': {
'type': 'Point',
'coordinates': [ -81.665125000278167, 30.322756999810611]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Chicago Port</p>',
},
'geometry': {
'type': 'Point',
'coordinates': [-87.637989999586765, 41.886620000123123]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Louisville Port</p>',
},
'geometry': {
'type': 'Point',
'coordinates': [-85.760993000130256, 38.26147000010436 ]

}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Milwaukee Port</p>',
},
'geometry': {
'type': 'Point',
'coordinates': [-87.899670000028891, 42.988240000004311]

}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Tulsa Port</p>',
},
'geometry': {
'type': 'Point',
'coordinates': [-95.740019999660191, 36.218200000003336 ]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Memphis Port</p>',
},
'geometry': {
'type': 'Point',
'coordinates': [-90.061979999694685, 35.181769999752454 ]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Cleveland Port</p>',
},
'geometry': {
'type': 'Point',
'coordinates': [-81.67190999987362, 41.478519999935159]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Savannah Port</p>',
},
'geometry': {
'type': 'Point',
'coordinates': [-81.095381999766403, 32.084711000216075]

}
}
]
}
});

// Add a layer showing the places.
map.addLayer({
'id': 'major_ports',
'type': 'circle',
'source': 'major_ports',
'paint': {
'circle-color': '#FF1493',
'circle-radius': 12,
'circle-stroke-width': 2,
'circle-stroke-color': '#ffffff'
}
});

// Create a popup, but don't add it to the map yet.
const popup = new mapboxgl.Popup({
closeButton: false,
closeOnClick: false
});

map.on('mouseenter', 'major_ports', (e) => {
// Change the cursor style as a UI indicator.
map.getCanvas().style.cursor = 'pointer';

// Copy coordinates array.
const coordinates = e.features[0].geometry.coordinates.slice();
const description = e.features[0].properties.description;

// Ensure that if the map is zoomed out such that multiple
// copies of the feature are visible, the popup appears
// over the copy being pointed to.
while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
}

// Populate the popup and set its coordinates
// based on the feature found.
popup.setLngLat(coordinates).setHTML(description).addTo(map);
});

map.on('mouseleave', 'major_ports', () => {
map.getCanvas().style.cursor = '';
popup.remove();
});
})
