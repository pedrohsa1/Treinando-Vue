<template>
    <v-container>
        <v-row justify="center"> 
            <v-col cols=12 md=4 class="text-center">

                <h6 class="display-1 text-uppercase">Login</h6>

                <v-text-field v-model="token" label="Token"/>
                
                <v-btn text dark depressed block color="secondary" class="mb-2" @click="login">
                    Login
                </v-btn>

                <v-btn text color="primary" @click="loginAsGuest">
                    Entrar como Visitante
                </v-btn>

            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    //import Feedback from '../feedback/Feedback.vue'

    export default{
        name:"LoginPage",
        /*components:{Feedback},*/
        data() {
            return {
                token: 'AIzaSyBg6GF5UQQ-ODFQWrhi87PyxWIQk29H5sc'
            };
        },
        methods: {
            login(){
                if(this.token){
                    this.$store.commit('setAuthToken', this.token);
                    this.$store.commit('setLogged', true);
                    this.$router.push("/book");
                }else{
                    this.$store.commit('showErrorMessage', 'Você deve informar o token.');
                }
            },
            loginAsGuest(){ //TODO: Melhorar
                this.$store.commit('setLogged', true);
                this.$router.push('/book');
            },
        },
    };
</script>

<style scoped>
    
</style>