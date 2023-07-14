import style from './paginado.module.css';

const Navpagin = ({numRecetas, datosTotal, paginado, currentPage}) => {

    const numberPage = [];

    for (let i = 1; i <= Math.ceil(datosTotal / numRecetas); i++) {
        numberPage.push(i);
      }

      return(
        <nav className={style.pag}>
              {numberPage.map((number) => (
            <a
              onClick={() => paginado(number)}
              href={`#${number}`}
              value={number}
              className={currentPage == number ? style.current : style.noCurrent}
            ><span key={number} className={style.item}>{number}</span></a>
        ))}
      </nav>
      );
}

export default Navpagin;