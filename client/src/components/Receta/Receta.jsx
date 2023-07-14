import style from './Recetas.module.css';
import { NavLink } from 'react-router-dom';

const Receta = ({currentObjects}) => {

    return(
        <div className={style.recetas}>
        {currentObjects.map(({id,title,imagen,diets}) => {
            return <div key={id} className={style.recet}>
                <NavLink to={`/detail/${id}`} className={style.name} ><h3>titulo: {title}</h3></NavLink>
                <img src={imagen} alt={title} className={style.img} />
                <h3 className={style.diets}>dietas: {diets}</h3>
            </div>
        })}
        </div>
    )
}

export default Receta;