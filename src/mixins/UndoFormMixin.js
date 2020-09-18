export const UndoFormMixin = {
  data() {
    return {
      //Массив сделанных мутаций
      doneMutations: []
    }
  },
  created() {
    //Добавляем в массив сделанные мутации
    //Избегая дублирования 'UNDO_STARTING_STATE_FOR_CONTACT'
    this.$store.subscribe(mutation => {
      if (mutation.type !== 'UNDO_STARTING_STATE_FOR_CONTACT') {
        this.doneMutations.push(mutation)
      }
    })
  },
  methods: {
    /**
     * Заменяем state изначальным значением,
     * потом добаляем мутации, внесенные в doneMutations
     * последовательно, избегая последней
     */
    undo() {
      this.doneMutations.pop()
      this.$store.commit('UNDO_STARTING_STATE_FOR_CONTACT', {
        initialState: JSON.parse(
          JSON.stringify(this.contactFieldsInitialState)
        ),
        contact: this.contact
      })
      this.doneMutations.forEach(mutation => {
        this.$store.commit(`${mutation.type}`, mutation.payload)
        this.doneMutations.pop()
      })
    }
  },
  computed: {
    /**
     * Можно ли использовать
     */
    canUndo() {
      return Boolean(this.doneMutations.length)
    }
  }
}
