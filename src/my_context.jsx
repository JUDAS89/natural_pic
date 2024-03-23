//import { createContext } from "react"
//const MyContext=createContext ({})
//export default MyContext

import React, { createContext, useEffect, useState } from "react";

const MyContext = createContext([]);

export const MyProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/photos.json");
        const data = await response.json();
        setPhotos(data.photos);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };

    fetchData();
  }, []);

  return <MyContext.Provider value={photos}>{children}</MyContext.Provider>;
};

export default MyContext;