import Vue from 'vue';
import Router from 'vue-router';
import TodoList from '../components/pages/TodoList/TodoList'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/todo-list', name: 'todo-list', component: TodoList },
  ],
});

export default router;
