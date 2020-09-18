<template>
  <div class="contact-show">
    <transition-group name="slide-up">
      <ContactField
        v-for="(field, $fieldIndex) in contact.fields"
        :key="$fieldIndex"
        :fieldIndex="$fieldIndex"
        :fieldName="field.fieldName"
        :contactId="id"
        v-model="field.fieldValue"
      />
    </transition-group>

    <div class="contact-show__add-field">
      <label class="contact-show__label">Добавить поле</label>
      <input
        class="input add-field__input"
        type="text"
        v-model="newFieldName"
      />
      <input
        class="input add-field__input"
        type="text"
        v-model="newFieldValue"
      />
      <button
        class="button button_icon-plus contact-show__button"
        @click="addFieldToContact"
      >
        Добавить
      </button>
    </div>
    <div class="contact-show__footer">
      <button
        class="button contact-show__button"
        @click="canselChanges"
        :disabled="!canUndo"
      >
        Отменить
      </button>
      <button
        class="button button_icon-back contact-show__button"
        @click="undo"
        :disabled="!canUndo"
      >
        Шаг назад
      </button>
      <button class="button contact-show__button" @click="saveChanges">
        Сохранить
      </button>
    </div>
  </div>
</template>

<script>
import ContactField from '@/components/ContactField.vue'
import { UndoFormMixin } from '../mixins/UndoFormMixin.js'

import { mapGetters } from 'vuex'

export default {
  mixins: [UndoFormMixin],
  components: {
    ContactField
  },
  data() {
    return {
      newFieldName: '',
      newFieldValue: '',
      contactFieldsInitialState: {}
    }
  },
  created() {
    /**
     * Копия контакта для отмены изменений
     * передача значения обьекта без ссылки на него
     */
    this.contactFieldsInitialState = JSON.parse(
      JSON.stringify(this.contact.fields)
    )
  },
  computed: {
    id() {
      return this.$route.params.id
    },
    ...mapGetters(['getContact']),
    contact() {
      return this.getContact(this.id)
    },
    /**
     * Заполнены ли нужные поля
     */
    isFieldsFilled() {
      return (
        this.contact.fields[0].fieldValue !== '' &&
        this.contact.fields[1].fieldValue !== ''
      )
    }
  },
  methods: {
    /**
     * Добавление поля к контакту
     * если они не пустые
     */
    addFieldToContact() {
      if (this.newFieldName && this.newFieldValue) {
        this.$store.commit('ADD_FIELD', {
          contact: this.contact,
          fieldName: this.newFieldName,
          fieldValue: this.newFieldValue
        })
        this.newFieldName = ''
        this.newFieldValue = ''
      } else {
        alert('Заполните поля')
      }
    },
    /**
     * Сохранить изменения
     * если не удаляемые поля заполнены
     */
    saveChanges() {
      if (this.isFieldsFilled) {
        this.$store.commit('UPDATE_CHANGES', {
          updatedContact: this.contact.fields,
          contact: this.contact
        })
      } else {
        alert('Поля: "ФИО" и "Номер телефона" должны быть заполнены')
      }
    },
    /**
     * Отменить все изменения
     * с подтверждением
     */
    canselChanges() {
      let isConfirmed = confirm(
        'Вы действительно хотите отменить внесенные изменения?'
      )
      if (isConfirmed) {
        this.$store.commit('UPDATE_CHANGES', {
          updatedContact: JSON.parse(
            JSON.stringify(this.contactFieldsInitialState)
          ),
          contact: this.contact
        })
      }
    }
  }
}
</script>

<style lang="scss">
.contact-show {
  padding: 0 3rem;
  display: flex;
  flex-direction: column;
  &__add-field {
    margin-bottom: 6rem;
    padding-top: 50px;
  }
  &__button {
    width: 9rem;
    height: 2.2rem;
    background-color: #21bcaeb3;
  }
  &__label {
    min-width: 200px;
    display: inline-flex;
  }
  &__input {
    min-width: 400px;
    display: inline-flex;
    margin-right: 40px;
    background-color: #ffffff00;
    border-bottom: 1px solid #a1a3e4bf;
  }
  &__footer {
    display: flex;
    width: 70vw;
    justify-content: space-around;
  }
}
.add-field__input {
  min-width: 250px;
  display: inline-flex;
  margin-right: 40px;
  background-color: #ffffff00;
  border-bottom: 1px solid #a1a3e4bf;
}
</style>
