// import React, { useState, useEffect } from "react";

// export default function useGeoLocation() {
//   const GEO_API = process.env.REACT_APP_GEO_API_KEY;

//   const [details, setDetails] = useState(null);

//   const getUserGeolocationDetails = () => {
//     const response = fetch(`https://geolocation-db.com/json/${GEP_API}`);
//     let location = response.json();
//     setDetails(location);
//   };

// useEffect(() => {
//   if (!("geolocation" in navigator)) {
//     onError({
//       code: 0,
//       message: "Geolocation not supported",
//     });
//   }

//   navigator.geolocation.getCurrentPosition((position) => {
//     const { latitude, longitude } = position.coords;
//     setLocaiton({ lat: latitude, lng: longitude });
//   });
// }, []);

// return location;
// }
