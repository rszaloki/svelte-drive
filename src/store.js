import { Store } from 'svelte/store.js'
import { routes } from './constants/index'

class DriveStore extends Store {
  redirect (newPage) {
    let nextPage
    const gapiLoaded = this.get('gapiLoaded')
    const loggedIn = this.get('loggedIn')
    const doc = this.get('doc')

    if (!gapiLoaded) {
      console.log('missing gapi')
      nextPage = routes.SPINNER
    } else if (!loggedIn) {
      console.log('not logged in')
      nextPage = routes.LOGIN
    } else if (!doc) {
      console.log('empty doc')
      nextPage = routes.EMPTY
    } else {
      nextPage = newPage
    }

    this.set({currentPage: nextPage})
  }
}

const store = new DriveStore({
  gapiLoaded: false,
  loggedIn: false,
  doc: null,
  currentPage: routes.SPINNER,
  name: 'world'
})

window.store = store

export default store
