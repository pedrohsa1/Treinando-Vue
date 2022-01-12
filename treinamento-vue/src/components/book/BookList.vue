<template>

    <div>
        <v-row>
            <v-col cols="12">
                <search-input-field @search="doSearch"/>
            </v-col>
        </v-row>

        <v-row justify="center" v-if="!bookList.length" > 
            <v-col cols="12" md="4" class="text-center">
                <p class="overline">Digite algo para iniciar a pesquisa.</p>
            </v-col>
        </v-row>

        <loading :condition="searchOnGoing">
            <v-row>
                <v-col v-for="(book, i) in bookList" :key="i" cols="12" md=3>
                        <book-item :book="book"/>    
                </v-col>
            </v-row>
        </loading>
    </div>

</template>

<script>
import api from "../api/api";
import Loading from '../loading/Loading.vue';
import SearchInputField from '../search/SearchInputField.vue';
import BookItem from './BookItem.vue';

export default {
    name:'BookList',
    mixins: [api],
    data() {
        return {
          bookList: [],
          searchOnGoing: false
        };
    },
    components: {Loading, SearchInputField, BookItem},
    methods: {
        doSearch(textSearch){
            if(textSearch){
                this.searchOnGoing = true;

                this.get("/volumes?q=" + textSearch).then(
                    (response) => {
                        console.log(this.bookList);
                        this.bookList = response.data.items;
                        this.searchOnGoing = false;
                    }
                );
            }else{
                this.bookList = [];
            }
        }
    }
}
</script>

<style scoped>
</style>