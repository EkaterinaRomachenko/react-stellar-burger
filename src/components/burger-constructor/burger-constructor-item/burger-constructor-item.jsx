import {ConstructorElement,DragIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from "prop-types";
import {IngredientPropType} from '../../../utils/prop-types'
import style from './burger-constructor-item.module.css'

function BurgerConstructorItem({data}){

  // фильтруем отдельные ингридиетны булочки(верх и низ)
  const bun = data.filter((ingredient)=> ingredient.type === 'bun')

  // фильтруем отдельно ингридиенты все(соусы и начинки), кроме булочки
  const element = data.filter((ingredient)=> ingredient.type !== 'bun')

  // bun[0] - находим только один элемент из первого  массива
  return(
    <>
      <ul className={` ${style.item} pr-4`}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={`${bun[0].name} ('верх')`}
          price={bun[0].price}
          thumbnail={bun[0].image}
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
          text={`${bun[0].name} ('низ')`}
          price={bun[0].price}
          thumbnail={bun[0].image}
        />
      </ul>
    </>
  )
}

// проверяем на типы
BurgerConstructorItem.propTypes ={
  data: PropTypes.arrayOf(IngredientPropType).isRequired
}


export default BurgerConstructorItem
