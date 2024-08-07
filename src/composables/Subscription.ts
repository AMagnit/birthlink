import {ref} from "vue";
import axios from "axios";

const subscriptions = ref({})

export const Subscriptions = () => {


    const getSubscriptions = async () => {

        try {

            const response = await axios.post('/api/subscription-by-user')

            subscriptions.value = response.data


        } catch (error) {

            console.log('>>> ' + error);
        }
        //console.log(response.data)
    }

    return{

        subscriptions, getSubscriptions
    }

}