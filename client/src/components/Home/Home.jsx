import {useSelector, useDispatch} from 'react-redux';
import { allRecets } from "../Redux/Actions/actions";
import { useEffect, useState } from 'react';
import Navpagin from '../Paginado/Paginado';
import NavSearchBar from '../navSearchBar/NavSearchBar';
import FilterBar from '../FilterBar/FilterBar';
import style from './Home.module.css';

const Home = () => {

    const filterRecets = useSelector(state => state.filterRecets);

    const dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState(1);

    const numRecets = 9;

    useEffect(() => {
      if(!filterRecets?.length){
        dispatch(allRecets());
      }
    },[]);
    
    // Calcula los índices de los objetos a mostrar en la página actual
    const indexOfLastObject = currentPage * numRecets;
    
    const indexOfFirstObject = indexOfLastObject - numRecets;
 
    const currentObjects = filterRecets?.slice(indexOfFirstObject, indexOfLastObject);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return(
        <div className={style.home}>

        <NavSearchBar pag={paginate}/>

        <Navpagin
        numRecetas={numRecets}
        datosTotal={filterRecets.length}
        paginado={paginate}
        currentPage={currentPage}
      />

      <FilterBar recetas={currentObjects} pag={paginate} />
        
        </div>
    )
      
}

export default Home;