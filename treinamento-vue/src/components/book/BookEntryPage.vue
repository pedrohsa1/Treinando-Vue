<template>
    <v-container fluid>
        <v-row justify="end">
            <v-col cols="12" md="2">
                <v-btn text block @click="goBack">
                    Voltar
                </v-btn>
            </v-col>

        </v-row>

        <v-row v-if="book && book.volumeInfo">
            <v-col cols="12" 
                   md="3"
                   class="text-center"
                   v-if="book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail">
                <img :src="book.volumeInfo.imageLinks.smallThumbnail"/>
            </v-col>
            <v-col cols="12" md="9">
                <h4 class="display-1">{{book.volumeInfo.title}}</h4>
                <h5 class="headline">{{book.volumeInfo.subtitle || 'Sem subtítulo.'}}</h5>
                <p class="mt-2">{{book.volumeInfo.description || "Sem descrição"}}</p>

                <div>
                    <v-subheader>Autores</v-subheader>
                    <v-divider class="mb-2"></v-divider>
                    <v-chip v-for="(author, i) in book.volumeInfo.authors" :key="i">
                        <v-icon left>mdi-account-circle-outline</v-icon>
                        {{author}}
                    </v-chip>
                </div>

                <div class="mt-4"
                     v-if="book.volumeInfo.categories && book.volumeInfo.categories.length">
                    <v-subheader>Categorias</v-subheader>
                    <v-divider class="mb-2"></v-divider>
                    <v-chip v-for="(category, i) in book.volumeInfo.categories" :key="i">
                        {{category}}
                    </v-chip>
                </div>

                <div class="mt-4"
                     v-if="book.volumeInfo.previewLink">
                    <v-subheader>Categorias</v-subheader>
                    <v-divider class="mb-2"></v-divider>
                    <v-btn text color="primary" @click="goToPreview(book)">
                        Preview
                    </v-btn>
                </div>

            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import api from '../api/api';
import bookServices from './bookServices';

export default {
    name: "BookEntryPage",
    mixins: [api, bookServices], //os mixins é um array
    data(){
        return {
            book: {}
        }
    },
    created(){
        this.get("/volumes/" + this.$route.params.id).then(
            (response) => {
                this.book = response.data;
                console.log(this.book);
            });
        
    },
    methods: {
        goBack() {
            this.$router.push("/book");
        },
        
    }
}
</script>

<style scoped>
</style>