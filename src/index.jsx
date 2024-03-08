import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import {Toaster} from "react-hot-toast";
import rootReducer from './redux/Store.jsx';
import { configureStore } from "@reduxjs/toolkit";


const store= configureStore({
  reducer: rootReducer,
});


ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
      <Provider store={store}>
          <App />
        <Toaster/>
      </Provider>
  </BrowserRouter>
)
