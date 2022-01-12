<template>
    <v-card class="mx-auto book-card" max-width="344">

        <div
            v-if="book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail"
            class="text-center pt-3"
        >
            <img :src="book.volumeInfo.imageLinks.smallThumbnail"/>
        </div>

        <v-card-title>
            <span>{{book.volumeInfo.title.substring(0,maxTitleLength)}}</span>
            <span v-if="book.volumeInfo.title.length > maxTitleLength">...</span>
        </v-card-title>

        <v-card-text>
            {{book.volumeInfo.subtitle || 'Sem descrição'}}
        </v-card-text>

        <v-card-actions>
            <v-btn text small color="primary" @click="goToDetails">Detalhes</v-btn>
            <v-btn text small color="primary" @click="goToPreview(book)">Preview</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import bookServices from './bookServices';

export default {
    name: "BookItem",
    mixins: [bookServices],
    props: {
        book: {type: Object, required: true},
    },
    data(){
        return {
            maxTitleLength: 20,
        }
    },
    methods: {
        goToDetails() {
            this.$router.push('/book/' + this.book.id);
        }
    }
}
</script>

<style scoped>
    .book-card{
        height: 100%;
    }
</style>