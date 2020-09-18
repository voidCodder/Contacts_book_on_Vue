import Vue from 'vue'
import Vuex from 'vuex'

import defaultContactBook from '../default-contact-book'
import { saveStatePlugin, uuid } from '../utils'

Vue.use(Vuex)

//Если есть уже созданные контакты - получить с хранилища
//Иначе использовать заданный образец
const contacts =
  JSON.parse(localStorage.getItem('contacts')) || defaultContactBook

export default new Vuex.Store({
  plugins: [saveStatePlugin],
  state: {
    contacts,
    isOpen: false
  },
  mutations: {
    CHANGE_IS_OPEN(state) {
      state.isOpen = !state.isOpen
    },
    ADD_CONTACT(state, { name, phoneNumber }) {
      state.contacts.push({
        id: uuid(),
        fields: [
          {
            fieldName: 'ФИО',
            fieldValue: name
          },
          {
            fieldName: 'Номер телефона',
            fieldValue: phoneNumber
          }
        ]
      })
    },
    DELETE_CONTACT(state, { contactIndex }) {
      state.contacts.splice(contactIndex, 1)
    },
    DELETE_FIELD(state, { contactId, fieldIndex }) {
      const contact = state.contacts.find(contact => contact.id == contactId)
      contact.fields.splice(fieldIndex, 1)
    },
    ADD_FIELD(state, { contact, fieldName, fieldValue }) {
      contact.fields.push({
        fieldName: fieldName,
        fieldValue: fieldValue
      })
    },
    UPDATE_CHANGES(state, { contact, updatedContact }) {
      contact.fields = updatedContact
    },
    UNDO_STARTING_STATE_FOR_CONTACT(state, { contact, initialState }) {
      // this.replaceState({ contactFieldsInitialState })
      contact.fields = initialState
    }
  },
  actions: {},
  modules: {},
  getters: {
    getContact: state => id => {
      return state.contacts.find(contact => contact.id == id)
    }
  }
})
