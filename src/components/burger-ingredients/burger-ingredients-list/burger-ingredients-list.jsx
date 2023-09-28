import {IngredientPropType} from '../../../utils/prop-types'
import styles from './burger-ingredients-list.module.css'
import PropTypes from "prop-types";
import IngredientsItem from '../burger-ingredients-item/burger-ingredients-item';

function IngredientsList({data}){
  return(
    <>
      <ul className={`${styles.list_ingridients} pt-6 pl-4 pr-4 pb-10`}>
        {data.map((ingredient)=>(
          <IngredientsItem ingredient={ingredient} key = {ingredient._id} />
        ))}
      </ul>
    </>
  )
}


// проверяем на типы
IngredientsList.propTypes ={
  data: PropTypes.arrayOf(IngredientPropType).isRequired
}

export default IngredientsList;
