import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux';
import './index.css'
import { createStore } from 'redux';
import { rootReducer } from './services/reducers';

const initialState = {};

const store = createStore(
  rootReducer,
  initialState
)

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
)
