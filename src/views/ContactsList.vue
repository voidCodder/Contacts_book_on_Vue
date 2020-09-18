<template>
  <main class="contact-list-content">
    <div class="contact-list-add-panel">
      <button
        class="button button_shadow button_icon-plus contact-list-add__button"
        @click="changeOpenState"
      >
        Новый контакт
      </button>
      <transition name="fade">
        <ContactAddForm v-if="isOpen" />
      </transition>
    </div>
    <div class="contact-list-contacts-block">
      <div class="contact-list__title">
        <span class="contact-list-fio">Контакт</span>
        <span class="contact-list-tel ">Номер телефона</span>
      </div>
      <transition-group name="slide-up">
        <Contact
          v-for="(contact, $contactIndex) in contacts"
          :key="$contactIndex"
          :name="contact.fields[0].fieldValue"
          :phoneNumber="contact.fields[1].fieldValue"
          :contactIndex="$contactIndex"
          :contactId="contact.id"
        />
      </transition-group>
    </div>
  </main>
</template>

<script>
import Contact from '@/components/Contact.vue'
import ContactAddForm from '@/components/ContactAddForm.vue'
import { OpenFormMixin } from '../mixins/OpenFormMixin.js'

import { mapState } from 'vuex'

export default {
  mixins: [OpenFormMixin],
  components: {
    Contact,
    ContactAddForm
  },
  computed: {
    ...mapState(['contacts']),
    isOpen() {
      return this.$store.state.isOpen
    }
  }
}
</script>

<style lang="scss">
.contact-list {
  &-content {
    display: flex;
    padding: 0 3vw;
  }
  &-add__button {
    width: 10rem;
    height: 2.5rem;
  }
  &-add-panel {
    padding: 0 15vw 0 5vw;
  }
  &-contacts-block {
    width: 75vw;
  }
  &-fio {
    width: 33%;
    display: inline-flex;
  }
  &-tel {
    width: 30%;
    display: inline-flex;
  }
  &__button {
    width: 9rem;
    height: 2.2rem;
    background-color: #21bcaeb3;
  }
  &__title {
    margin-bottom: 1rem;
    font-weight: 900;
    font-size: 1.5rem;
    letter-spacing: 0.1rem;
    text-decoration: underline;
    text-decoration-color: #5a96ef96;
  }
}
</style>
