export default {
    name: 'CreateTodo',
    data() {
      return {
        textoTitulo: '',
        textoProjeto: '',
        foiCriado: false,
      };
    },
    methods: {
      abrirForm() {
        this.foiCriado = true;
      },
      fecharForm() {
        this.foiCriado = false;
      },
      enviarForm() {
        if (this.textoTitulo.length > 0 && this.textoProjeto.length > 0) {
          const titulo = this.textoTitulo;
          const projeto = this.textoProjeto;
  
          this.$emit('create-todo', {
            titulo,
            projeto,
            concluido: false,
          });
          this.textoTitulo = '';
          this.textoProjeto = '';
          this.foiCriado = false;
        }
      },
    },
  };
  