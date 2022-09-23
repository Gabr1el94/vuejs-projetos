<template>
  <div id="app">
    <div class="ui inverted vertical masthead center aligned segment">
      <div class="ui text container">
        <h1 class="ui inverted header"> Aplicação Todo List com Vue.js 3</h1>
      </div>
    </div>
    <br />
    <div class="ui three column centered grid">
      <div class="column">
        <todo-list v-bind:todos="todos"></todo-list>
        <create-todo v-on:create-todo="createTodo"></create-todo>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import sweetAlert from 'sweetalert';
  import TodoList from './components/pages/TodoList/index';
  import CreateTodo from './components/pages/CreateTodo/index';

  export default {
    name: 'App',
    components: {
      TodoList,
      CreateTodo,
    },
    data() {
      return {
        todos: [
          {
            titulo: 'Todo A',
            projeto: 'Projeto A',
            concluido: false,
          },
          {
            titulo: 'Todo B',
            projeto: 'Projeto B',
            concluido: true,
          },
          {
            titulo: 'Todo C',
            projeto: 'Projeto C',
            concluido: false,
          },
          {
            titulo: 'Todo D',
            projeto: 'Projeto D',
            concluido: false,
          },
        ],
      };
    },
    methods: {
      createTodo(novoTitulo) {
        this.todos.push(novoTitulo);
        sweetAlert('Sucesso!', 'Nova Tarefa Adicionada.', 'success');
      },
    },
  };
</script>
