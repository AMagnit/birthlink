import {ref} from "vue"; // reactive, onMounted
import axios from "axios";

//axios.defaults.baseURL = (window.location.host == 'localhost:3000' ? 'http://127.0.0.1:8000' : 'https://bebeauty.pro')

const email_exists = ref()
const email = ref()
const pin = ref(false)
const pin_input = ref()
const session = ref()
const new_password = ref()

export const Recovery = () => {


    const sendPin = async () => {


        try {

            await axios.get('/sanctum/csrf-cookie').then(async () => {

                await axios.post('/api/login-send-pin', {email: email.value}).then(response => {


                    if (response.data.toString().length == 100) {

                        email_exists.value = true
                        session.value = response.data

                    } else if (response.data == 'doesnt_exist') {

                        email_exists.value = false
                        session.value = ''
                        alert('Account with this email does not exist')
                    }
                })

                //console.log(response.data.toString().length)


            })


        } catch (error) {

            console.log('>>> ' + error);
        }

        //console.log(response.data)
    }

    const checkPin = async () => {

        //console.log(pin_form.value.toString().length)

        if (pin_input.value.toString().length < 5) {
            return;
        }

        try {

            const response = await axios.post('/api/login-pin-check', {code: pin_input.value, code_page: session.value})

            //console.log(response.data.r)

            if (response.data.r == 'true') {

                console.log(response.data.r)

                pin.value = true

            } else if (response.data == 'doesnt_exist') {

                pin.value = false
            }


        } catch (error) {

            console.log('>>> ' + error);
        }
        //console.log(response.data)
    }

    const setPassword = async () => {

        //console.log(pin_form.value.toString().length)

        if (new_password.value.toString().length < 8) {
            return;
        }

        try {

            const response = await axios.post('/api/login-set-password', {p_2: new_password.value, k: session.value})

            //console.log(response.data.r)

            // if (response.data.r == 'true') {
            //
            //     console.log(response.data.r)
            //
            //     pin.value = true
            //
            // } else if (response.data == 'doesnt_exist') {
            //
            //     pin.value = false
            // }


        } catch (error) {

            console.log('>>> ' + error);
        }
        //console.log(response.data)
    }


    return {
        email, email_exists, sendPin, checkPin, pin, pin_input, new_password, setPassword
    }
};