import style from './paginado.module.css';

const Navpagin = ({numRecetas, datosTotal, paginado, currentPage}) => {

    const numberPage = [];

    for (let i = 1; i <= Math.ceil(datosTotal / numRecetas); i++) {
        numberPage.push(i);
      }

      console.log(currentPage, numberPage.length)

      return(
        <nav className={style.pag}>
          <button className={currentPage == 1 ? style.last : style.prev} onClick={()=> {paginado(currentPage - 1)}}>↩</button>
              {numberPage.map((number) => (
            <a
              onClick={() => paginado(number)}
              href={`#${number}`}
              value={number}
              className={currentPage == number ? style.current : style.noCurrent}
            ><span key={number} className={style.item}>{number}</span></a>
        ))}
        <button className={currentPage != numberPage.length ? style.next : style.last} onClick={() => {paginado(currentPage + 1)}}>↪</button>
      </nav>
      );
}

export default Navpagin;