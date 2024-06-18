import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';
import store from './store/store.jsx'

import './index.css'
import  {Provider}  from 'react-redux';
import { SidebarProvider } from './components/context/SidebarContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<Provider store={store}>
<SidebarProvider>
    <App />
    </SidebarProvider>
    </Provider>

  </React.StrictMode>,
)
