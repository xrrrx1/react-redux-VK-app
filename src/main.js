import React from 'react'
import {render} from 'react-dom'
import "../styles/main.sass"
import { Provider } from 'react-redux'
import App from "./containers/App"
import configureStore from "./store/configureStore"

render(<Provider store={configureStore}>
    <App/>
</Provider>, document.getElementById('container'));
