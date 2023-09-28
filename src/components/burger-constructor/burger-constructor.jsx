import BurgerConstructorItem from "./burger-constructor-item/burger-constructor-item"
import {data} from '../../utils/data'
import {CurrencyIcon,Button} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-constructor.module.css'

function BurgerConstructor(){
  return(
    <section className={styles.burger_constructor}>
      <div>
        <BurgerConstructorItem  data={data}/>
      </div>
      <div className={styles.container}>
        <span className={` ${styles.price} text text_type_digits-medium`}>610<CurrencyIcon type="primary"/></span>
        <Button htmlType="button" type="primary" size="medium">
          Оформить заказ
        </Button>
      </div>
    </section>
  )
}

export default BurgerConstructor
