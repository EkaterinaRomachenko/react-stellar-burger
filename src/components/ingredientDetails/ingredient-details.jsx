import styles from './ingredient-details.module.css';

function IngredientDetails({data}){
  return(
    <>
    <div className={`${styles.container} pt-10 pl-10 pr-10`}>
        <h2 className={`${styles.title} text text_type_main-large`}>Детали ингредиента</h2>
        <img src={data.image_large} alt={data.name} />
        <h3 className={`${styles.name} text text_type_main-medium pt-4 pb-8 `}>{data.name}</h3>
        <ul className={styles.list}>
          <li className={styles.item}>
            <p className={'text text_type_main-default text_color_inactive'}>Калории,ккал</p>
            <p className={'text text_type_digits-default text_color_inactive'}>{data.calories}</p>
          </li>
          <li className={styles.item}>
            <p className={'text text_type_main-default text_color_inactive'}>Белки, г</p>
            <p className={'text text_type_digits-default text_color_inactive'}>{data.proteins}</p>
          </li>
          <li className={styles.item}>
            <p className={'text text_type_main-default text_color_inactive'}>Жиры, г</p>
            <p className={'text text_type_digits-default text_color_inactive'}>{data.fat}</p>
          </li>
          <li className={styles.item}>
            <p className={'text text_type_main-default text_color_inactive'}>Углеводы, г</p>
            <p className={'text text_type_digits-default text_color_inactive'}>{data.carbohydrates}</p>
          </li>
        </ul>
    </div>
  </>
  )
}

export default IngredientDetails;
