export default {
    name: 'Todo',
    props: ['todo'],
    data() {
      return {
        ehEditavel: false,
      };
    },
    methods: {
      completeTodo(todo) {
        this.$emit('complete-todo', todo);
      },
      deleteTodo(todo) {
        this.$emit('delete-todo', todo);
      },
      pendenteTodo(todo) {
        this.$emit('pendente-todo', todo);
      },
      abrirForm() {
        this.ehEditavel = true;
      },
      fecharForm() {
        this.ehEditavel = false;
      },
    },
  };
  