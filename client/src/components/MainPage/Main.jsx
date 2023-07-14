import { NavLink } from "react-router-dom";
import style from './Main.module.css';

const Main = () => {
    return (
        <div className={style.main}>
            <div className={style.contain}>
            <NavLink to='/home'><button className={style.boton} >HOME...</button></NavLink>
            {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis quis eligendi mollitia amet saepe eum ipsam blanditiis, molestias neque quisquam quos porro minus, magni a vel nisi laboriosam aperiam vitae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, itaque? Deleniti modi sunt libero ad illo molestiae, nam aliquam, explicabo tempore nihil dignissimos quas fugit. Corporis quaerat nemo voluptatibus voluptas! Lorem, ipsum dolor sit amet consectetur adipisicing elit. At quasi, tempore officiis molestiae eum amet totam fugiat suscipit harum mollitia fugit labore enim quod? Excepturi est velit vel quas voluptatem?</p> */}
            </div>
        </div>
    )    
}

export default Main;