//рандомайзер
export function uuid() {
  return Math.random()
    .toString(16)
    .slice(2)
}
//Локальное хранилище
export function saveStatePlugin(store) {
  store.subscribe((mutation, state) => {
    localStorage.setItem('contacts', JSON.stringify(state.contacts))
  })
}
