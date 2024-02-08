const geohash = require('geohash');


export const convertToGeoHash = (latitude, longitude,precision) => {

    // // Coordinates obtained from OpenStreetMap
    // const latitude = 37.7749; // Example latitude
    // const longitude = -122.4194; // Example longitude

    // // Encode coordinates to geohash
    // const precision = 6; // Example precision level
    const hash = geohash.encode(latitude, longitude, precision);

    // console.log('Geohash:', hash); // Output the generated geohash
    return hash;
}

