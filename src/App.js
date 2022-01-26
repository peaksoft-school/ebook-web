import './App.css';
import UserList from './components/UserList/UserList';
import useHttp from './hooks/use-http';
function App() {
  const config= {
    url:'https://ebook-api-e48c7-default-rtdb.firebaseio.com/users.json',
    data: [
      {
        id:1,
        first_name:'Baybolot',
        last_name:'Janybekov',
        phone_number:'+996 705 889 125',
        email: 'ieye7531@gmail.com',
        booksum:18,
      },
      {
        id:2,
        first_name:'Baybolot',
        last_name:'Janybekov',
        phone_number:'+996 705 889 125',
        email: 'ieye7531@gmail.com',
        booksum:18,
      },
      {
        id:3,
        first_name:'Baybolot',
        last_name:'Janybekov',
        phone_number:'+996 705 889 125',
        email: 'ieye7531@gmail.com',
        booksum:18,
      },
      {
        id:4,
        first_name:'Baybolot',
        last_name:'Janybekov',
        phone_number:'+996 705 889 125',
        email: 'ieye7531@gmail.com',
        booksum:18,
      },
      {
        id:5,
        first_name:'Baybolot',
        last_name:'Janybekov',
        phone_number:'+996 705 889 125',
        email: 'ieye7531@gmail.com',
        booksum:18,
      }
    ]
}
const postUserList = useHttp(config)
  return (
    <div className="App">
      <UserList/>
    </div>
  );
}

export default App;
