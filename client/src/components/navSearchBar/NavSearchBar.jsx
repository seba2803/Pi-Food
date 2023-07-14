import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import style from './nav.module.css';

const NavSearchBar = ({pag}) => {


    return(
        <div className={style.Nav}>
            <Link to='/' >
                <button className={style.boton}>Volver</button>
            </Link>

            <Link to='/form' >
                <button className={style.boton}>Crear Receta</button>
            </Link>

            <Link to='/misRecetas'>
                <button className={style.boton}>Mis Recetas</button>
            </Link>

            <SearchBar pag={pag} />
        </div>
    )
}

export default NavSearchBar;