import ReactDOM from 'react-dom/client'
import App from './Shortly/App'
import './index.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import { store } from './Shortly/store'


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>
      <App />
      <ToastContainer position="top-center" />
    </Provider>
  </>
)
