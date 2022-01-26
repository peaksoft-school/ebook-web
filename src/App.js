import './App.css';
import Button from './components/UI/button/Button';

function App() {
  return (
    <div>
      <Button buttonStyle={"btn--btn1"} >Войти</Button>
      <Button buttonStyle={"btn--btn2"} >Добавить в корзину</Button>
      <Button buttonStyle={"btn--btn3"} >Личный кабинет</Button>
      <Button buttonStyle={"btn--btn4"} >Смотреть больше</Button>
      <Button buttonStyle={"btn--btn5"} ><p>+</p><p>Добавить книгу</p></Button>
      <Button buttonStyle={"btn--btn7"}>Создать промокод</Button>
    </div>
  );
}

export default App;
