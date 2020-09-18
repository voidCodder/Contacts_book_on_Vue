<template>
  <div class="contact-add-container" @click.self="closePopup">
    <div class="contact-add-wrapper">
      <div class="contact-add-title">
        <h2>Добавление контакта</h2>
      </div>
      <form class="contact-add__content" @submit.prevent="AddContact">
        <div class="contact-info-wrapper">
          <label for="contact-name" class="contact-info__label"
            >Введите ФИО контакта:</label
          >
          <input
            class="input contact-info__input"
            type="text"
            name="contact-name"
            v-model="contactName"
            required
            placeholder="Иванов Иван"
          />
          <label for="contact-phone" class="contact-info__label"
            >Введите телефон контакта:</label
          >
          <input
            class="input contact-info__input"
            type="tel"
            name="contact-phone"
            v-model="contactPhone"
            required
            placeholder="8 (900) 000-00-00"
          />
        </div>
        <div class="contact-add__buttons-wrapper">
          <button
            class="button button_shadow contact-add__button"
            type="button"
            @click="closePopup"
          >
            Отмена
          </button>
          <button
            class="button button_shadow contact-add__button"
            type="submit"
          >
            Добавить
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { OpenFormMixin } from '../mixins/OpenFormMixin.js'

export default {
  mixins: [OpenFormMixin],
  data() {
    return {
      contactName: null,
      contactPhone: null
    }
  },
  methods: {
    /**
     * Добавление контакта
     */
    AddContact() {
      this.$store.commit('ADD_CONTACT', {
        name: this.contactName,
        phoneNumber: this.contactPhone
      })
      this.contactName = ''
      this.contactPhone = ''
    },
    /**
     * Закрытие модально окна
     */
    closePopup() {
      this.changeOpenState()
      this.contactName = ''
      this.contactPhone = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.contact-add {
  &-container {
    width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    overflow: hidden;
    position: fixed;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
  }
  &-wrapper {
    background-color: #ffffff;
    padding: 15px 2vw;
    display: flex;
    flex-direction: column;
    width: 350px;
  }
  &__content {
    display: flex;
    flex-direction: column;
  }
  &__buttons-wrapper {
    display: flex;
    justify-content: space-between;
  }
  &__button {
    width: 110px;
    height: 40px;
    background-color: #64bae2;
  }
  &-title {
    text-shadow: 4px 2px 3px #dadada;
  }
}
.contact-info {
  &-wrapper {
    display: flex;
    flex-direction: column;
    margin-bottom: 12px;
  }
  &__label {
    margin-bottom: 10px;
  }
  &__input {
    margin-bottom: 10px;
  }
}

.visible {
  visibility: visible;
}
</style>
