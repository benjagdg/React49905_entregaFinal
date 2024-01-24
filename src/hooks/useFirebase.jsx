import { useState, useEffect } from "react";
import { collection, getDocs, doc, getDoc, query, where, getFirestore } from "firebase/firestore";

export const useGetCollection = (collectionName = '') => {
  const [collectionData, setCollectionData] = useState([]);

  if(collectionName != ''){
    useEffect(() => {
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
    }, [collectionName]);

  }else{
    console.error('No se ha definido la colección a usar...');
  }
  
  return { collectionData };
};

export const useGetCategoryFilter = (collectionName = '', filter) =>{
  const [collectionFilter, setCollectionFilter] = useState([]);
  
  if(collectionName != ''){
    useEffect(() => {
      const db = getFirestore();
      const dataFilterCollection = collection(db, collectionName);
      const q = query(dataFilterCollection, where('category', "==", filter));
      getDocs(q).then((snapshot) => {
        if (snapshot.empty) {
          console.log("No hay resultados...");
          setCollectionFilter(['nodata']);
        }else{
          setCollectionFilter(snapshot.docs.map( doc => ({ id: doc.id, ...doc.data() }) ))
        }
      })
    }, [filter]);
  }else{
    console.error('No se ha definido la colección a usar...');
  }
  return { collectionFilter };
};

export const useGetProductById = (collectionName = '', productId) => {
  const [productData, setProductData] = useState([]);
  
  useEffect(() => {
    const db = getFirestore();
    const docRef = doc(db, collectionName, productId);
    getDoc(docRef).then( (doc) => {
      setProductData({ id:doc.id, ...doc.data() })
    }).catch((error) => {
      console.error('Error al obtener datos:', error);
    })
  }, [productId]);

  return { productData };
};

export const useGetProductCartList = (itemsCart) => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    if (itemsCart.length !== 0) {
      const itemsIdList = itemsCart.map((item) => item.id);
      const db = getFirestore();
      const dataFilterCollection = collection(db, 'products');
      const q = query(dataFilterCollection, where('uid', 'in', itemsIdList));
      
      getDocs(q).then((snapshot) => {
        if (snapshot.empty) {
          console.log("No hay resultados...");
          setProductList(['nodata']);
        } else {
          setProductList(snapshot.docs.map((doc) => ({ 
            id: doc.id,
            quantity: itemsCart.find((item) => item.id == doc.data().uid).quantity,
            ...doc.data()
            })
          ));
        }
      });
    } else {
      setProductList(['nodata']);
    }
  }, [itemsCart]);

  return { productList };
}
