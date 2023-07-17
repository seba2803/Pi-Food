import { useState } from "react";
import validation from "./validation";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {addRecipe , allRecets} from '../Redux/Actions/actions';
import style from './form.module.css';

const Form = () => {

    const diets = useSelector(state => state.diets);
    
    const [form, setForm] = useState({
        nombre: '',
        resumen: '',
        health: 0,
        pasos: '',
        imagen: 'https://thumbs.dreamstime.com/b/icone-perfette-del-pixel-degli-alimenti-rapida-preparazione-118046078.jpg',
        dietas: [],
    });

    const [error, setError] = useState({});

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1);
    };

    const handleChange = (event) => {
       const property = event.target.name;

       const value = event.target.value;

       setForm({...form, [property]: value});

       setError(validation({...form, [property]: value}));
    };

    const handleDiets = (event) => {
        if(form.dietas.includes(event.target.value)){
            const filter = form.dietas.filter(diet => diet !== event.target.value);
            setForm({...form, dietas: filter});
            setError(validation({...form, dietas: filter}));
        }else{
            setForm({...form, dietas: [...form.dietas, event.target.value]});
            setError(validation({...form, dietas: [...form.dietas, event.target.value]}));
        }
    };

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        if(!error.nombre && !error.resumen && !error.health && !error.pasos && !error.imagen && !error.dietas){
            dispatch(addRecipe({nombre: form.nombre, imagen: form.imagen, resumenPlato: form.resumen, healthScore: form.health, pasoAPaso: form.pasos, diets: form.dietas}));

            event.preventDefault();

            dispatch(allRecets());
            navigate(-1);
        }
    };

    return (
        <div className={style.container}>

            <div className={style.btn}>
            <button onClick={handleClick} className={style.boton}>⇦</button>
            </div>

        <div className={style.contain}>
            <div className={style.containForm}>
            <form className={style.form}>

                <label htmlFor="nombre" className={style.label}>Nombre: </label>
                <input type="text" name="nombre" onChange={handleChange} value={form.nombre} className={style.label} />
                {error.nombre && <p className={style.error}>{error.nombre}</p>}


                <label htmlFor="resumen" className={style.label}>Resumen del plato: </label>
                <textarea name="resumen" onChange={handleChange} value={form.resumen}  cols="30" rows="8" className={style.label} ></textarea>
                {error.resumen && <p className={style.error}>{error.resumen}</p>}

                <label htmlFor="health" className={style.label}>Health Score: </label>
                <input type="number" name="health" onChange={handleChange} value={form.health} className={style.label} />
                {error.health && <p className={style.error}>{error.health}</p>}

                <label htmlFor="pasos" className={style.label}>Paso a Paso: </label>
                <textarea name="pasos" onChange={handleChange} value={form.pasos} cols="30" rows="8" className={style.label}></textarea>
                {error.pasos && <p className={style.error}>{error.pasos}</p>}

                <label htmlFor="imagen" className={style.label}>Imagen: </label>
                <input type="text" name="imagen" onChange={handleChange} value={form.imagen} className={style.label} />
                {error.imagen && <p className={style.error}>{error.imagen}</p>}

            <div className={style.check}>
                {diets.length && diets.map(diet => {
                    return (
                        <label htmlFor="diet" ><input key={diet.id} type="checkbox" value={diet.id} onClick={handleDiets} />{diet.nombre}</label>
                    )
                })}
            </div>
                {error.dietas && <p className={style.error}>{error.dietas}</p>}
                
                { form.nombre == '' || form.resumen == '' || form.pasos == '' || Object.keys(error).length ? <span className={style.sub}>ENVIAR</span> : <button type="submit" onClick={handleSubmit} className={style.submit}>ENVIAR</button>}


            </form>

            </div>
            </div>
        </div>
    )

};

export default Form;