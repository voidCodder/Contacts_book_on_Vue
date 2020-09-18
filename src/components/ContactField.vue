<template>
  <div class="contact-info">
    <label class="contact-show__label">{{ fieldName }}</label>
    <input
      class="input contact-show__input"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
    <button
      class="button button_icon-close contact-show__button"
      @click="deleteField(fieldIndex, contactId)"
      :disabled="disabled"
    >
      Удалить поле
    </button>
  </div>
</template>

<script>
export default {
  props: {
    fieldName: {
      type: [String, Number],
      required: true
    },
    fieldIndex: {
      type: Number,
      required: true
    },
    contactId: {
      type: [String, Number],
      required: true
    },
    value: [String, Number]
  },
  methods: {
    /**
     * Удаление поля
     * @param {Number} fieldIndex - Индекс поля
     * @param {Object} contactId - id контакта
     */
    deleteField(fieldIndex, contactId) {
      let isConfirmed = confirm('Вы действительно хотите удалить поле?')
      if (isConfirmed) {
        this.$store.commit('DELETE_FIELD', {
          contactId,
          fieldIndex
        })
      }
    }
  },
  computed: {
    /**
     * Если не удаляемые поля
     */
    disabled() {
      return this.fieldIndex == 1 || this.fieldIndex == 0
    }
  }
}
</script>

<style lang="scss">
.contact-info {
  margin-bottom: 0.5rem;
}
</style>
