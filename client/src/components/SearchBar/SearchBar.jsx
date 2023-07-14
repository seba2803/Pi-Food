import { useState } from "react";
import {useDispatch} from 'react-redux';
import {recetName, allRecets} from '../Redux/Actions/actions';
import style from './SearchBar.module.css';

const SearchBar = ({pag}) => {
    
    const [name, setName] = useState('');

    const dispatch = useDispatch();

    const handleChange = (event) => {
        setName(event.target.value);
        if(event.target.value === '') dispatch(allRecets());
    }

    const handleClick = () => {
        if(name){
            pag(1);
            dispatch(recetName(name));
        }
    }

    return(
        <div className={style.SearchBar}>
            <input type="search" placeholder="nombre de receta..." onChange={handleChange} value={name} className={style.input}/>
            <button type="button" onClick={handleClick} className={style.boton}>Buscar</button>
        </div>
    )
}

export default SearchBar;