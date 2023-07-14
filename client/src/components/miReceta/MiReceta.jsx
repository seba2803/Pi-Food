import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { myRecets, cleanRecet } from "../Redux/Actions/actions";
import Receta from "../Receta/Receta";
import style from './miReceta.module.css';

const MiReceta = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const misRecetas = useSelector(state => state.miReceta);

    useEffect(() => {
        dispatch(myRecets());
        return (() => {
            dispatch(cleanRecet);
        });
    }, []);

    const handleClick = () => {
        navigate(-1);
    };

    return (
        <div className={style.container}>
            <div className={style.btn}>
            <button onClick={handleClick} className={style.boton}>⇦</button>
           </div>

           <div className={style.contain}>
            <Receta currentObjects={misRecetas} />
           </div>
        </div>
    )
};

export default MiReceta;