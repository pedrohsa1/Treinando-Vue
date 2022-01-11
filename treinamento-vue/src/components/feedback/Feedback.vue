<template>
        <v-snackbar v-model="showMessage" multi-line color="error">
            {{ message }}
            <template v-slot:action="{ attrs }">
                <v-btn  text
                        :color="pink"  
                        v-bind="attrs" 
                        @click="showMessage = false">
                    Close
                </v-btn>
            </template>
        </v-snackbar>
</template>

<script>

export default {
    name: "Feedback",
    data(){
        return {
            message: '',
            color: '',
            showMessage: false
        }
    },
    watch:{
        '$store.state.message.text': 'setMessage',
    },
    methods:{
        setMessage(){
            this.message = this.$store.state.message.text;
            this.color = this.$store.state.message.type === 'ERROR' ? 'error' : 'success';
            this.showMessage = true;
        }
    }
}

</script>

<style scoped>

</style>