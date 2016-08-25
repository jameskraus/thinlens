import { createStore, compose } from 'redux'


import rootReducer from './reducers'


const defaultState = {}

// Allows use of redux dev tools
const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
)

const store = createStore(rootReducer, defaultState, enhancers)

export default store

