mapboxgl.accessToken= 'pk.eyJ1IjoiYWt3YXNpMzAiLCJhIjoiY2t6aG5wN2Q1NDNndTJvcDQ0ZzBkbzQyOSJ9.Om7ek_mM4fe3ClIt_IrOIw'


// lngLat New York
var nys = [-75.000000,43.000000]

var map = new mapboxgl.Map({
  container:'mapContainer', // HTML container id
  style:'mapbox://styles/mapbox/light-v9', // style URL
  center: nys, //starting position as [lng, lat]
  zoom:2
  //minZoom: 9,
  // maxZoom:14,

});
var popup = new mapboxgl.Popup({
  offset:20,
})
   .setHTML('<h3>New York</h3>');

// add a marker for the New York
var marker = new mapboxgl.Marker({
  color:'crimson'
})
.setLngLat (nys)
.setPopup(popup)
.addTo(map);

var popup = new mapboxgl.Popup({
  offset:20,
})

var pointsOfInterest= [
{
lnglat: [-168.938199999710662,53.759610000020977],
popupHtml: 'Unalaska Island Port',
subText: 'Unalaska, home to the Port of Dutch Harbor, sits in the heart of the North Pacific and Bering Sea fisheries. The city of Unalaska is on the northern end of Unalaska Island, the second largest island in the Aleutian Chain, 800 miles southwest of Anchorage. World War II history, cultural opportunities, and beautiful scenery draw people to Unalaska/Dutch Harbor. The island provides many outdoor activities including hiking, sportfishing, kayaking, and birding. Dutch Harbor is the main delivery port for the crab fleet featured on the Discovery Channel’s hit reality show “The Deadliest Catch.'

},
{
lnglat: [-156.472800000020328,20.898610000380238 ],
popupHtml: 'Kahului Port',
subText: 'Kahului Harbor is primarily a commercial harbor and port for Hawaii. Many cruiseships such as Carnival and Norwegian Cruise Lines Harbor is conveniently located in Kahului.This is the island largest town and location of Maui Airport. Kahului Harbor has lots of shopping and restaurants nearby within walking distance for cruisepassengers.'
},
{
lnglat: [-155.833299999681657,20.037780000067926 ],
popupHtml: 'Kawaihae Harbor, HI',
subText: 'Kawaihae is a port community on the north west side of the island ofHawaiʻi which includes a fuel depot, shipping terminal and militarylanding site. Outside of the man-made breakwall is a popular surf spot,the Pua Kailima o Kawaihae Cultural Surf Park.'
},
{
lnglat: [-159.35309999973407,21.961109999827457 ],
popupHtml: 'Nawiliwili Port, HI',
subText: 'Nawiliwili Harbor is located about 1.5 miles southeast of the small city of Lihue, along Kauai southeast coast, and has been the main harbor on the island since 1930. However, the Nawiliwili Bay area has a long history of being an integral part of life on the island'
},
{
lnglat: [-158.10890000013822,21.297229999983575 ],
popupHtml: 'Barbers Point Port, Oahu, HI',
subText: 'Kalaeloa Harbor occupies the location of theformer Naval Air Station Barbers Point,which was closed in 1999 and subsequentlytransferred to the State of Hawaii'
},
{
lnglat: [-151.314400000092377,60.747929999989488],
popupHtml: 'Nikiski Port',
subText: 'Nikiski is located on the Kenai Peninsula, 9 miles north of the City of Kenai, off of the Sterling Highway. It is also known as Port Nikiski and Nikishka. It lies at approximately 60° 44 N Latitude, 151° 19 W Longitude (Sec. 02, T006N, R012W, Seward Meridian). The community is located in the Kenai Recording District. The area encompasses 28 sq. miles of land and 90 sq. miles of water.'
},
{
lnglat: [-149.895000000379611,61.237780000086417],
popupHtml: 'Anchorage Port',
subText: 'Alaska'
},
{
lnglat: [-164.53890000013152, 67.719179999985016],
popupHtml: 'Kivilina, AK',
subText: 'Alaska'
},
{
lnglat: [-117.178400000264745, 32.708209999763774],
popupHtml: 'San Diego',
subText: 'California'
},
{
lnglat: [-122.21401199961349, 37.505360000269583],
popupHtml: 'Redwood City Port',
subText: 'California'
},
{
lnglat: [-155.0758000003635, 19.728609999822265],
popupHtml: 'Honolulu Port',
subText: 'Hawaii'
},
{
lnglat: [-122.374233000202878, 37.924237000220607],
popupHtml: 'Richmond Port CA',
subText: 'Hawaii'
},
{
lnglat: [-122.308100000064826, 37.821520000055834],
popupHtml: 'Oakland Port CA"',
subText: 'California'
},
{
lnglat: [-119.20847499961657, 34.148244000358737],
popupHtml: 'Port Hueneme, CA',
subText: 'California'
},
{
lnglat: [-118.241000000112649, 33.777280000002655],
popupHtml: 'Port of Los Angeles',
subText: 'California'
},
{
lnglat: [-124.209500000115767, 43.363510000279902],
popupHtml: 'Coos Bay',
subText: 'Oregon'
},
{
lnglat: [-122.862799999678302, 46.020479999842856],
popupHtml: 'Kalama Port',
subText: 'Washington'
},
{
lnglat: [-122.359217999792023, 47.587711000257926],
popupHtml: 'Seattle Port',
subText: 'Washington'
},
{
lnglat: [-97.398138000242639, 25.952201000183674],
popupHtml: 'Brownsville Port',
subText: 'Texas'
},
{
lnglat: [-92.440674000296426, 31.312083000112647],
popupHtml: 'Lake Charles Port',
subText: 'Louisiana'
},
{
lnglat: [-90.617939999681852, 30.033450000329701],
popupHtml: 'South Louisiana Port',
subText: 'Louisiana'
},
{
lnglat: [-91.430732000033572, 31.547237999901483],
popupHtml: 'Natchez Port',
subText: 'Mississippi'
},
{
lnglat: [-84.199260000265483, 30.190090000216639],
popupHtml: 'Panama City Port',
subText: 'Florida'
},
{
lnglat: [-80.181641999923116, 25.782862000181144],
popupHtml: 'Miami Port ',
subText: 'Florida'
},
{
lnglat: [-82.522350000320714, 27.785340000128098],
popupHtml: 'Tampa Port ',
subText: 'Florida'
},
{
lnglat: [-80.052669999622992, 26.769039999836934],
popupHtml: 'Palm Beach Port ',
subText: 'Florida'
},
{
lnglat: [-80.052669999622992, 26.769039999836934],
popupHtml: 'Palm Beach Port ',
subText: 'Florida'
},
{
lnglat: [-80.052669999622992, 26.769039999836934],
popupHtml: 'Brunswick Port',
subText: 'Georgia'
},
{
lnglat: [-79.921595000123617, 32.788780999960537],
popupHtml: 'Charleston, SC',
subText: 'South Carolina'
},
{
lnglat: [-74.038356999904764, 40.673949000227203],
popupHtml: 'Port of New York and New Jersey',
subText: 'NYNJ'
},
{
lnglat: [-75.202191000372792, 39.918819999993325],
popupHtml: 'Port of Philadelphia',
subText: 'Philadelphia, PA'
},
{
lnglat: [-71.052290000035896, 42.350939000244608],
popupHtml: 'Port of Massachusetts',
subText: 'Boston, MA'

},
]

pointsOfInterest.forEach(function(pointOfInterest) {
var popup = new mapboxgl.Popup({offset:20 })
 .setHTML(`
   <h3>${pointOfInterest.popupHtml}</h3>
   <p>${pointOfInterest.subText}</p>
  `);
new mapboxgl.Marker({
color:'crimson'

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
  'circle-color': 'gold',
}
});
})


map.on ('load', function () {
map.addSource('navigable-waterway-lines', {
type: 'geojson',
//Use a URL for the value for the data property.
data: 'data/navigable-waterway-lines.geojson'
});

map.addLayer({
'id': 'navigable-waterway-lines',
'type': 'line',
'source': 'navigable-waterway-lines',
'paint': {
  'line-color': 'darkblue',

}
});
})
