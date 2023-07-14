//importaciones de hooks
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
//importaciones de herramientas
import {Routes, Route} from 'react-router-dom';
import { getDiets } from './components/Redux/Actions/actions';
//importaciones de componentes
// import './App.css';
import Main from './components/MainPage/Main';
import Home from './components/Home/Home';
import Detail from './components/views/Detail';
import Form from './components/Form/Form';
import MiReceta from './components/miReceta/MiReceta';

function App() {

  const dispatch = useDispatch();

  const diets = useSelector(state => state.diets);

  useEffect(() => {
    if(!diets.length){
      dispatch(getDiets());
    }
  }, []);

  return (
    <div>
      <Routes>
          <Route path='/' element={<Main />} />

          <Route path='/home' element={<Home />} />

          <Route path='/detail/:id' element={<Detail />} />

          <Route path='/form' element={<Form />} />

          <Route path='/misRecetas' element={<MiReceta />} />
      </Routes>
    </div>
  )
}

export default App
