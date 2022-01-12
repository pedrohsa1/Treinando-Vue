//Obs.: Nomeclatura dos mixins tem a primeira letra minúscula
export default {
    name: "bookServices",
    methods: {
        goToPreview(book) { //Se existir um método no componente, a prioridade é do componente
            window.open(book.volumeInfo.previewLink, '_blank');
        }
    }
}