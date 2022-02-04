import './App.css'
import UserProfile from './components/UserProfile/UserProfile'
import SellerProfile from './components/SellerProfile/SellerProfile'
import SellerTableHeader from './components/SellerTableHeader/SellerTableHeader'
import UserTableHeader from './components/UserTableHeader/UserTableHeader'
function App() {
	return <div className='App'>
		<UserTableHeader/>
		<UserProfile/>
		<SellerTableHeader/>
		<SellerProfile/>
	</div>
}

export default App
