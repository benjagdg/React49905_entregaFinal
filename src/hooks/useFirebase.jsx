import { useState, useEffect } from "react";
import { collection, getDocs, doc, getDoc, getFirestore } from "firebase/firestore";

export const useGetCollection = (collectionName = '') => {
  const [collectionData, setCollectionData] = useState([]);

  if(collectionName != ''){

    const fetchCollectionData = () => {
      const db = getFirestore();
      const dataCollection = collection(db, collectionName);
  
      getDocs(dataCollection)
        .then((snap) => {
          setCollectionData(
            snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
          );
        })
        .catch((error) => {
          console.error('Error al obtener datos:', error);
        });
    };
    useEffect(() => {
      if (collectionName !== '') {
        fetchCollectionData();
      } else {
        console.error('No se ha definido la colección a usar...');
      }
    }, [collectionName]);

  }else{
    console.error('No se ha definido la colección a usar...');
  }
  
  return { collectionData };
}
