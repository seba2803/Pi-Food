import { NavLink } from 'react-router-dom';
import style from './Main.module.css';

const Main = () => {
  return (
    <div className={style.main}>
      <div className={style.contain}>
        <h2 className={style.title}>BOOK OF RECIPES</h2>
        <NavLink to='/home'>
          <button className={style.boton}>HOME...</button>
        </NavLink>
      </div>

      <h3 className={style.description}>
        Este es mi Proyecto Individual de comidas en el cual pueden observar un
        total de 100 recetas de distintas procedencias, tipos y sabores, a su
        vez puedes crear tus propias recetas y agregarlas para que tambien
        formen parte del resto de recetas
      </h3>
    </div>
  );
};

export default Main;
