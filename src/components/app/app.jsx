import styles from "./app.module.css";
import AppHeader from "../app-header/app-header"
import BurgerIngredients from "../burger-ingredients/burger-ingredients"
import BurgerConstructor from "../burger-constructor/burger-constructor";
import {useEffect,useState} from 'react'

function App() {
  // подключаем API
  const [state,setState] = useState({
    isLoading: false,
    hasError: false,
    data: []
  });

  function  getResponseData (res){
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
  }
    return res.json();
  }

  function getIngredients(){
    return fetch('https://norma.nomoreparties.space/api/ingredients')
    .then(getResponseData)
  }

  useEffect(() => {
    const getData = () => {
    setState({ ...state, hasError: false, isLoading: true });
    getIngredients()
      .then(data => setState({ ...state, data:data.data, isLoading: false }))
      .catch(e => {
        this.setState({ ...state, hasError: true, isLoading: false });
      });
    };
   getData()
  },[])


  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients data={state.data}/>
        <BurgerConstructor data={state.data}/>
      </main>
    </div>
  );
}

export default App;
