import styles from './burger-ingredients.module.css'
import IngredientsList from './burger-ingredients-list/burger-ingredients-list'
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components'
import {useRef, useState, useMemo} from "react";
import { IngredientPropType } from '../../utils/prop-types';
import PropTypes from "prop-types";

// компонент ингредиент-бургер
function BurgerIngredients({data}){

  // фильтруем data на отдельные ингредиенты(булочка,соусы, начинка)
  const dataSauce = useMemo(() => data.filter((data)=> data.type === 'sauce'),[data]);
  const dataBun = useMemo(() => data.filter((data)=> data.type === 'bun'),[data]);
  const dataMain = useMemo(() => data.filter((data)=> data.type === 'main'),[data]);

  const [current, setCurrent] = useState('bun');

  // scroll при нажатии на ингредиет
  const categoryRefs = {
    bun: useRef(null),
    sauce: useRef(null),
    main: useRef(null)
  }

  const handleClick = (value)=>{
    setCurrent(value)
    categoryRefs[value].current.scrollIntoView({behavior:'smooth'});
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
        <h3 className={'text text_type_main-medium'} ref={categoryRefs.bun}>Булки</h3>
        <IngredientsList  data = {dataBun} />

        <h3 className={'text text_type_main-medium'} ref={categoryRefs.sauce}>Соусы</h3>
        <IngredientsList  data = {dataSauce} />

        <h3 className={'text text_type_main-medium'} ref={categoryRefs.main}>Начинки</h3>
        <IngredientsList  data = {dataMain} />
      </div>
    </section>
  )
}

// проверяем на типы
BurgerIngredients.propTypes ={
  data: PropTypes.arrayOf(IngredientPropType).isRequired
}

export default BurgerIngredients;
