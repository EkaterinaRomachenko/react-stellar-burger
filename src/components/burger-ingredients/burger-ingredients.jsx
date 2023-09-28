import styles from './burger-ingredients.module.css'
import IngredientsList from './burger-ingredients-list/burger-ingredients-list'
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components'
import {data} from '../../utils/data'
import {useRef, useState} from "react"



// компонент ингредиент-бургер
function BurgerIngredients(){
  const [current, setCurrent] = useState('bun');

  // фильтруем data на отдельные ингредиенты(булочка,соусы, начинка)
  const dataSauce = data.filter((data)=> data.type === 'sauce')
  const dataBun = data.filter((data)=> data.type === 'bun')
  const dataMain = data.filter((data)=> data.type === 'main')

  // scroll при нажатии на ингредиет
  const bunRef = useRef(null);
  const sauceRef = useRef(null);
  const mainRef = useRef(null);

  const handleClick = (value)=>{
    setCurrent(value)
    if(value ==='bun')bunRef.current.scrollIntoView({behavior:'smooth'});
    if(value === 'sauce')sauceRef.current.scrollIntoView({behavior:'smooth'});
    if(value === 'main')mainRef.current.scrollIntoView({behavior:'smooth'});
  }


  return(
    <section className={styles.burger_ingridients}>
      <h1 className={'text text_type_main-large mt-10 mb-5'}>Соберите бургер</h1>
      <div style={{ display: 'flex' }}>
        <Tab value='bun' active={current === 'bun'} onClick={handleClick}>
          Булки
        </Tab>
        <Tab value='sauce' active={current === 'sauce'} onClick={handleClick}>
          Соусы
        </Tab>
        <Tab value='main' active={current === 'main'} onClick={handleClick}>
          Начинки
        </Tab>
      </div>
      <div className={`${styles.wrapper} mt-10 custom-scroll`}>
        <h3 className={'text text_type_main-medium'} ref={bunRef}>Булки</h3>
        <IngredientsList  data = {dataBun} nameIngridients= 'Булки'/>

        <h3 className={'text text_type_main-medium'} ref={sauceRef}>Соусы</h3>
        <IngredientsList  data = {dataSauce}/>

        <h3 className={'text text_type_main-medium'} ref={mainRef}>Начинки</h3>
        <IngredientsList  data = {dataMain}/>
      </div>
    </section>
  )
}

export default BurgerIngredients
