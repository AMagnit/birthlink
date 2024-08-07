import {ref} from 'vue';
import axios from 'axios';

const user = ref({})
const users = ref({})


export const Users = () => {


    const getUser = async () => {

        try {

            const response = await axios.post('/api/user')

            user.value = response.data


        } catch (error) {

            console.log('>>> ' + error);
        }
        //console.log(response.data)
    }



    const updateUser = async () => {

        try {

            await axios.put('/api/crm/user_update', user.value)


        } catch (e: any) {

            console.log(e)
        }
    }

    const userType = (type: number) => {

        if(type == 0) {

            return 'Professional'

        } else if (type == 1){

            return 'Individual'

        } else if (type == 2){

            return 'Corporate'
        }
    }

    return {
        users, user, getUser, updateUser, userType
    }

}