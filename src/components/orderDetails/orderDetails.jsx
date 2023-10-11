import styles from './orderDetails.module.css'
import ready from '../../images/ready.svg'

function OrderDetails(){
  return(
    <>
      <div className={styles.container}>
        <p className={` ${styles.order_number} text text_type_digits-large pb-8`}>034536</p>
        <h3 className='text text_type_main-medium'>идентификатор заказа</h3>
        <img src={ready} alt="Ваш заказ начали готовить" className='pb-15 pt-15'/>
        <p className="text text_type_main-default pb-2">Ваш заказ начали готовить</p>
        <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
      </div>
    </>
  )
}

export default OrderDetails
