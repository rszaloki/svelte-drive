import { Store } from 'svelte/store.js'

const store = new Store({
  gapiLoaded: false,
  name: 'world'
})

window.store = store

export default store
