<template>
  <div class="contact-list__user-block">
    <router-link :to="{ name: 'contact-show', params: { id: contactId } }">
      <span class="contact-list-fio">{{ name }}</span>
    </router-link>
    <span class="contact-list-tel">{{ phoneNumber }}</span>

    <button
      class="button button_shadow contact-list__button"
      @click="deleteContact"
    >
      Удалить контакт
    </button>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: [String, Number],
      required: true
    },
    contactIndex: {
      type: Number,
      required: true
    },
    contactId: {
      type: [String, Number],
      required: true
    }
  },
  methods: {
    /**
     * Удаление контакта
     */
    deleteContact() {
      let isConfirmed = confirm('Вы действительно хотите удалить контакт?')
      if (isConfirmed) {
        this.$store.commit('DELETE_CONTACT', {
          contactIndex: this.contactIndex
        })
      }
    }
  }
}
</script>

<style lang="scss">
.contact-list {
  &__user-block {
    margin-bottom: 0.8rem;
  }
}
</style>
