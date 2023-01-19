import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async() => {
      const newImages = await getGifs( category );
      setImages( newImages );
      setIsLoading( false );
    }

    useEffect( () => {
      getImages();
    }, [])


  return {
    images, // "images: images", es lo mismo si el nombre de la proiedad apunta al elemento con el mismo nombre
    isLoading // "isLoading: true" igual que arriba
  }
}
