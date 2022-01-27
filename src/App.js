import './App.css';
import Button from './components/UI/button/Button';

function App() {
  return (
    <div>
      <Button variant={"btn--primary"} >Войти</Button>
      <Button variant={"btn--secondary"} >Добавить в корзину</Button>
      <Button variant={"btn--tertiary"} >Личный кабинет</Button>
      <Button variant={"btn--load"} >Смотреть больше</Button>
      <Button variant={"btn--contained"} ><p>+</p><p>Добавить книгу</p></Button>
      <Button variant={"btn--select"}>Создать промокод</Button>
      <Button variant={"btn--light"}>Создать промокод</Button>
    </div>
  );
}

export default App;
