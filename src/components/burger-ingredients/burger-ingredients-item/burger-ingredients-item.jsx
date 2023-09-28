import {Counter,CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import { IngredientPropType } from '../../../utils/prop-types';
import styles from './burger-ingredients-item.module.css'

function IngredientsItem({ingredient}){
 return(
  <li className={styles.item}>
    <div className={styles.content}>
      <Counter count={1} size="default" extraClass="m-1" />
      <img className={'mr-4 ml-4'} src={ingredient.image} alt="изображение элемента бургера" />
    </div>
    <div className={`${styles.content} mt-1 mb-1 `}>
      <span className={'text text_type_digits-default mr-4'}>{ingredient.price}</span>
      <CurrencyIcon type="primary" />
    </div>
    <p className={`${styles.text} text text_type_main-default`}>{ingredient.name}</p>
  </li>
 )
}

IngredientsItem.propTypes ={
  elemnt: IngredientPropType
}

export default IngredientsItem
