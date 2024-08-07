import {onMounted, ref} from "vue";
import axios from "axios";

const loggedIn = ref(false)
const token = ref()
const user_id = ref()
const user_name = ref()
const close_modal = ref()

export const userState = () => {

    const setMainParams = (response: any) => {

        axios.defaults.headers.common = {
            'Authorization': 'Bearer ' + response.data.token
        }

        user_id.value = response.data.id
        localStorage.setItem('user_id', response.data.id);

        user_name.value = response.data.name
        localStorage.setItem('user_name', response.data.name);

        // set token to local storage
        localStorage.setItem('token', response.data.token);
        token.value = response.data.token

        loggedIn.value = true
    }


    //hist_county
    const createAccount = async (login: string, password: string, user_name: string, type: number) => {

        //console.log(login, password)

        try {

            await axios.get('/sanctum/csrf-cookie').then(async () => {

                await axios.post('/api/register', {
                    email: login,
                    password: password,
                    name: user_name,
                    type: type
                }).then(response => {


                    // account exist?
                    if(response.data && (response.data.email || response.data.password || response.data.name)) {

                        if(response.data.email){

                            alert(response.data.email)
                        }

                        if(response.data.name) {

                            alert(response.data.name)
                        }

                        if(response.data.password) {
                            alert(response.data.password)
                        }



                    } else if (response.data.data.id) {

                        setTimeout( async () => {

                            setMainParams(response)

                            window.location.href = '/profile';

                        }, 500)


                    }

                    console.log(response.data.data.id)

                });
            });


        } catch (error) {
            console.log('>>> ' + error);
        }
    }



    const LogIn = async (login: string, password: string) => {

        //console.log(login, password)

        loggedIn.value = false
        //checking_login.value = true


        try {

            await axios.get('/sanctum/csrf-cookie').then(async () => {

                await axios.post('/api/login', {email: login, password: password}).then(response => {

                    if (response.data.token) {

                        setMainParams(response)

                        //window.location.reload()

                    }
                });
            });

        } catch (error) {
            console.log('>>> ' + error);
        }

    }

    const LogOut = async () => {

        // Todo: send POST to REST for remove token

        loggedIn.value = false

        token.value = ''
        localStorage.setItem('token', '')

        user_id.value = false
        localStorage.setItem('user_id', '')

        localStorage.setItem('user_name', '')

        await axios.post('/api/logout')

        // for clear cash/cookie

        setTimeout(async () => {

            window.location.href = '/';
        }, 100)

        //return router.push({name: 'home'})
    }

    onMounted(() => {

        // console.log('loggedIn.value')
        // console.log(loggedIn.value)
        // console.log(localStorage.getItem('token'))


        if (localStorage.getItem('token') && loggedIn.value == false) {

            axios.defaults.headers.common = {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }

            //console.log('loggedIn.value 2')

            loggedIn.value = true
            token.value = localStorage.getItem('token')

            user_id.value = localStorage.getItem('user_id')
            user_name.value = localStorage.getItem('user_name')
        }
    });


    return {
        loggedIn, LogIn, LogOut, setMainParams, createAccount,
        user_name, user_id,
        close_modal
    }
}