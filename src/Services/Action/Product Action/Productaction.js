
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../../MyFireBase/myfirebase";


export const addProduct = (data) => {

    // console.log(data,"add");

    return{
        type : 'ADD_PRODUCT',
        payload : data
    }
}

export const addProductasync = (data) => {

    console.log(data,"Add Product Data");
    return async dispatch => {
        const docRef = await addDoc(collection(db, "products"),data)
        console.log(docRef.data(),"sdsfsa");
        // dispatch(addProduct(docRef.data()));
    }
}