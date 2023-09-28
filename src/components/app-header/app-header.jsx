import {BurgerIcon,ListIcon,Logo,ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from "./app-header.module.css";

function AppHeader(){
  return(
    <header className = {styles.header}>
      <nav className={`${styles.container} pt-4 pb-4`}>
        <ul className={styles.navigation}>
          <li className={`${styles.item} pl-5 pr-5 pb-4 pt-4`}><a href="" className={`${styles.link}`}><BurgerIcon type="primary" /><span className={`${styles.text}text text_type_main-default`}>Конструктор</span></a></li>
          <li><a href="" className={`${styles.link} pl-5 pr-5 pb-4 pt-4`}><ListIcon type="secondary" /><span className={`${styles.text} text text_type_main-default text_color_inactive`}>Лента заказов</span></a></li>
        </ul>
        <div className={styles.logo}><Logo /></div>
        <div className={styles.profile}>
          <a href="" className={`${styles.link} pl-5 pr-5 pb-4 pt-4`}><ProfileIcon type="secondary"/><span className={`${styles.text} text text_type_main-default text_color_inactive`}>Личный кабинет</span></a>
        </div>
      </nav>
    </header>
  )
}

export default AppHeader;
