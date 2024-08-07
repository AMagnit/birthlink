import {ref} from "vue";
import axios from "axios";

const products = ref({})
const product = ref({})


export const Products = () => {


    const getProductsByType = async () => {

        try {

            const response = await axios.post('/api/product-material')

            products.value = response.data


        } catch (error) {

            console.log('>>> ' + error);
        }
        //console.log(response.data)
    }

    return{

        products, getProductsByType, product
    }

}