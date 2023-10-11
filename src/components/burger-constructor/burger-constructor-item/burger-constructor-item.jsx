import {ConstructorElement,DragIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from "prop-types";
import {IngredientPropType} from '../../../utils/prop-types'
import style from './burger-constructor-item.module.css'
import React, {useMemo,useState} from 'react';


function BurgerConstructorItem({data}){

  // фильтруем отдельные ингридиетны булочки(верх и низ)
  const bun = data.find((ingredient)=> ingredient.type === 'bun')

  // фильтруем отдельно ингридиенты все(соусы и начинки), кроме булочки
  const element = useMemo(()=>data.filter((ingredient) => ingredient.type !== 'bun'),[data]);

  // bun[0] - находим только один элемент из первого  массива

  if(!bun){
    return false
  }
  return(
    <>
      <ul className={` ${style.item} pr-4`}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={`${bun.name} ('верх')`}
          price={bun.price}
          thumbnail={bun.image}
        />
      </ul>
      <ul className={` ${style.lists} custom-scroll`}>
          {element.map((ingredient)=>(
            <li key={ingredient._id} className={` ${style.list} mb-4 mr-2`}>
              <div>
                <DragIcon type="primary" />
              </div>
              <ConstructorElement
                text={ingredient.name}
                price={ingredient.price}
                thumbnail={ingredient.image}
              />
            </li>
          ))}
      </ul>
      <ul className={` ${style.item} pr-4 `}>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={`${bun.name} ('низ')`}
          price={bun.price}
          thumbnail={bun.image}
        />
      </ul>
    </>
  )
}

// проверяем на типы
BurgerConstructorItem.propTypes ={
  data: PropTypes.arrayOf(IngredientPropType).isRequired
}

export default BurgerConstructorItem;
