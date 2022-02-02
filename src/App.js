import './App.css'
import AdminPage from './components/admin/AdminPage'
import ModalForDelete from './components/ModalForDelete/ModalForDelete'
function App() {
  return <div className="App">
    <ModalForDelete/>
    <AdminPage/>
  </div>
}

export default App
