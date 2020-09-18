export const OpenFormMixin = {
  methods: {
    changeOpenState() {
      this.$store.commit('CHANGE_IS_OPEN')
    }
  }
}
