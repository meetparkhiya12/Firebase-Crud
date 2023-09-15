

const initiale = {
    products: [],
    product:null,


}

const Productreducer = (state = initiale, action) => {


    switch (action.type) {



        case 'ADD_PRODUCT':
                return {
                    ...state,
                    products : action.payload
                }

                
           



      

        default:
            return state

    }


}

export default Productreducer
