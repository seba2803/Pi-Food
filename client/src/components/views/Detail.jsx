import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  oneRecet,
  cleanRecet,
  deleteRecets,
  allRecets,
} from '../Redux/Actions/actions';
import Receta from '../Receta/Receta';
import Carga from '../Carga';
import style from './Detail.module.css';
import filtrarTexto from './filtrarTexto';

const Detail = () => {
  const { id } = useParams();

  const Recet = useSelector((state) => state.oneRecet);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(oneRecet(id));
    return () => {
      dispatch(cleanRecet());
    };
  }, []);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  const handleDelete = () => {
    alert('Receta Borrada');
    dispatch(deleteRecets(id));
    dispatch(allRecets());
    navigate('/home');
  };

  const resumen = filtrarTexto(Recet[0]?.summary);

  if (!Recet?.length) {
    return (
      <div className={style.container}>
        <Carga />
      </div>
    );
  }

  return (
    <div className={style.container}>
      <div className={style.btn}>
        <button onClick={handleClick} className={style.boton}>
          ⇦
        </button>
        {isNaN(id) && (
          <button onClick={handleDelete} className={style.eliminar}>
            ELIMINAR
          </button>
        )}
      </div>

      <div className={style.contain}>
        <div>
          <Receta currentObjects={Recet} />
        </div>

        <div className={style.box}>
          <h3 className={style.items}>ID: {Recet[0]?.id}</h3>

          <h4 className={style.items}>Resumen: {resumen}</h4>

          <h3 className={style.items}>Healt Score: {Recet[0]?.healthScore}</h3>

          {Array.isArray(Recet[0]?.stepByStep) ? (
            Recet[0]?.stepByStep.map((obj) => {
              return (
                <div>
                  <h3>Paso: {obj?.number}</h3>

                  <h4>{obj?.step}</h4>
                </div>
              );
            })
          ) : (
            <h3 className={style.items}>Pasos: {Recet[0]?.stepByStep}</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default Detail;
