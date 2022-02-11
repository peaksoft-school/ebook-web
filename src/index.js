<<<<<<< HEAD
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
=======
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store/store';
import { Provider } from 'react-redux';
>>>>>>> 0547f701d491ca3a4035ebf2bd50258907e3b788
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'

ReactDOM.render(
<<<<<<< HEAD
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'),
)
=======
  <React.StrictMode>
  <BrowserRouter>
  <Provider store={store}>
    <App/>
  </Provider>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
>>>>>>> 0547f701d491ca3a4035ebf2bd50258907e3b788
