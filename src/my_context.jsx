import React, { createContext, useEffect, useState } from "react";

const MyContext = createContext([]);

export const MyProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/photos.json");
        const data = await response.json();
        setPhotos(data.photos);
        setFavorites(Array(data.photos.length).fill(false))
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };

    fetchData();
  }, []);

  return <MyContext.Provider value={ {photos, favorites, setFavorites}}>{children}</MyContext.Provider>;
};

export default MyContext;