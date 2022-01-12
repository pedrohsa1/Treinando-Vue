import Vue from 'vue';
import Router from 'vue-router';

import LoginPage from './components/login/LoginPage.vue';
import BookListPage from './components/book/BookListPage.vue';
import BookEntryPage from './components/book/BookEntryPage.vue';

Vue.use(Router);

const routes = [
    {path: "/", nome: "login", component: LoginPage },
    {path: "/book", nome: "bookList", component: BookListPage },
    {path: "/book/:id", nome: "bookEntry", component: BookEntryPage}
];

export default new Router({
    routes,
});