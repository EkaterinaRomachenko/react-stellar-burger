import BurgerConstructorItem from "./burger-constructor-item/burger-constructor-item"
import {CurrencyIcon,Button} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-constructor.module.css'
import Modal from '../modal/modal'
import {useState} from 'react'
import OrderDetails from "../orderDetails/orderDetails"

function BurgerConstructor({data}){
   // используем сосотояние для видимости модального окна
  const [isOpen,setIsOpen] = useState(false);

  return(
    <section className={styles.burger_constructor}>
      <div>
        <BurgerConstructorItem  data={data}/>
      </div>
      <div className={styles.container}>
        <span className={` ${styles.price} text text_type_digits-medium`}>610<CurrencyIcon type="primary"/></span>
        <Button htmlType="button" type="primary" size="medium" onClick={()=>setIsOpen(true)}>
          Оформить заказ
        </Button>
      </div>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <OrderDetails />
      </Modal>
    </section>
  )
}

export default BurgerConstructor
