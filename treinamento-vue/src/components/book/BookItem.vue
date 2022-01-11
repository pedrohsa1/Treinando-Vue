<template>
    <v-card class="mx-auto book-card" max-width="344">
        <v-card-title>
            <span>{{book.volumeInfo.title.substring(0,maxTitleLength)}}</span>
            <span v-if="book.volumeInfo.title.length > maxTitleLength">...</span>
        </v-card-title>
        <v-card-text>
            {{book.volumeInfo.subtitle || 'Sem descrição'}}
        </v-card-text>
        <v-card-actions>
            <v-btn text small color="primary">Detalhes</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: "BookItem",
    props: {
        book: {type: Object, required: true},
    },
    data(){
        return {
            maxTitleLength: 20,
        }
    }
}
</script>

<style scoped>
    .book-card{
        height: 100%;
    }
</style>