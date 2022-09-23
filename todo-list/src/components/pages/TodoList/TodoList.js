import sweetAlert from 'sweetalert';
import Todo from '../Todo/index.vue';

export default {
  name: 'TodoList',
  props: ['todos'],
  components: {
    Todo,
  },
  methods: {
    deleteTodo(todo) {
      sweetAlert({
        title: 'Você tem certeza que deseja excluir a Tarefa?',
        text: 'Atenção! Esta Tarefa será Excluída!',
        icon: 'warning',
        buttons: true,
        dangerMode: true,
      }).then((excluirTodo) => {
        if (excluirTodo) {
          const todoIndex = this.todos.indexOf(todo);
          this.todos.splice(todoIndex, 1);
          sweetAlert('Excluído!', 'Sua Tarefa foi Excluída', {
            icon: 'success',
          });
        } else {
          sweetAlert('Cancelado', 'Retornar para a Lista de Tarefas', 'error');
        }
        return false;
      });
    },
    pendenteTodo(todo) {
      sweetAlert({
        title: 'Você tem certeza que deseja Alterar para Pendente?',
        text: 'Atenção! Esta Tarefa poderá ser alterado!',
        icon: 'warning',
        buttons: true,
        dangerMode: true,
      }).then((pendenteTodo) => {
        if (pendenteTodo) {
          const todoIndex = this.todos.indexOf(todo);
          this.todos[todoIndex].concluido = false;
          sweetAlert('Atualizado!', 'Sua Tarefa foi atualizado para pendente', {
            icon: 'success',
          });
        } else {
          sweetAlert('Cancelado', 'Retornar para a Lista de Tarefas', 'error');
        }
        return false;
      });
    },
    completeTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos[todoIndex].concluido = true;
      sweetAlert('Sucesso!', 'Parabéns! A sua Tarefa está Completa!', 'success');
    },
  },
};
