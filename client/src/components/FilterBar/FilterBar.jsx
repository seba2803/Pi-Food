import {useDispatch} from 'react-redux';
import { ordenDietas, ordenAlfa, ordenHealth } from "../Redux/Actions/actions";
import Receta from "../Receta/Receta";
import style from './filterBar.module.css';

const FilterBar = ({recetas, pag}) => {

   const dispatch = useDispatch();

   const handleDiets = (event) => {
    dispatch(ordenDietas(event.target.value));
    pag(2);
    setTimeout(() => {
        pag(1);    
    }, 10);
   };

   const handleAlfa = (event) => {
        dispatch(ordenAlfa(event.target.value));
        pag(2);
        setTimeout(() => {
            pag(1);    
        }, 10);
   };

   const handleHealth = (event) => {
    dispatch(ordenHealth(event.target.value));
    pag(2);
    setTimeout(() => {
        pag(1);    
    }, 10);
   }

    return (
        <div className={style.container}>
            <div className={style.child}>
            <select onChange={handleDiets} className={style.select}>
                <option value="todos">todos</option>
                <option value="vegan">vegan</option>
                <option value="vegetarian">vegetarian</option>
                <option value="gluten free">gluten free</option>
                <option value="dairy free">dairy free</option>
            </select>

            <select onChange={handleAlfa} className={style.select}>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
            </select>

            <select onChange={handleHealth} className={style.select}>
                <option value="+ Saludable">+ Saludable</option>
                <option value="- Saludable">- Saludable</option>
            </select>
            </div>

            <Receta currentObjects = {recetas} />

        </div>
    )
};

export default FilterBar;