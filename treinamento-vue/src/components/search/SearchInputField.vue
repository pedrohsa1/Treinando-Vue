<template>
    <v-text-field @input="doSearch" v-model="textSearch" label="Pesquise por um livro"/>
</template>

<script>
    export default{
        name: "SearchInputField",
        data(){
            return {
                textSearch: '',
                lastChange: 0,
                delay: 300
            }
        },
        methods: {
            doSearch(){
                this.lastChange = new Date().getTime();
                setTimeout(() => {
                    if(new Date().getTime() >= this.lastChange + this.delay){
                        this.$emit('search', this.textSearch);
                    }
                }, this.delay)
            }
        }
    }
</script>

<style scoped>
    
</style>