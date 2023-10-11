import {IngredientPropType} from '../../../utils/prop-types'
import styles from './burger-ingredients-list.module.css'
import PropTypes from "prop-types";
import IngredientsItem from '../burger-ingredients-item/burger-ingredients-item';
import Modal from '../../modal/modal'
import IngredientDetails from '../../ingredientDetails/ingredient-details';
import {useState} from "react";

function IngredientsList({data}){
  // используем состояние для видимости модального окна с деталями бургера
  const [isActive,setIsActive] = useState(false);

  // информация о ингридиенте
  const [infoCurrent,setInfoCurrent] = useState({});

  return(
    <>
      <ul className={`${styles.list_ingridients} pt-6 pl-4 pr-4 pb-10`}>
        {data.map((ingredient)=>(
          <IngredientsItem open={()=>{setInfoCurrent(ingredient);setIsActive(true)}}  data={ingredient} key = {ingredient._id} />
        ))}
      </ul>
      <Modal open={isActive} onClose={()=>setIsActive(false)}>
        <IngredientDetails data={infoCurrent}/>
      </Modal>
    </>
  )
}


// проверяем на типы
IngredientsList.propTypes ={
  data: PropTypes.arrayOf(IngredientPropType).isRequired
}

export default IngredientsList;
