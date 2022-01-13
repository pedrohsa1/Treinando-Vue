<template>
    <v-card class="mx-auto book-card" max-width="344">
        <v-card-title>
            <span>{{shelf.title}}</span>
        </v-card-title>

        <v-card-text>
            <span class="font-weight-medium ml-2">
                Número de Livros: <span>{{shelf.volumCount}}</span>
            </span>
        </v-card-text>

    </v-card>
</template>

<script>
    export default {
        name: "LibraryItem",
        props: {
            shelf: { type: Object, required: true },
        }
    };
</script>

<style scoped>

</style>