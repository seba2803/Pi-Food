import style from '../components/carga.module.css';

const Carga = () => {
  return (
    <div className={style.spinnerContainer}>
      <div className={style.spinner}></div>
    </div>
  );
};

export default Carga;
