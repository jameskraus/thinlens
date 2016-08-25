import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import store from './store'

function renderApp() {
    const App = require('./components/App').default
    ReactDOM.render(
            <Provider store={store} >
                <App/>
            </Provider>
        ,
        document.getElementById('root')
    );
}


renderApp()