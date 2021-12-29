import React from 'react';
import Form from '../components/Formulario'
import List from '../components/Lista'
import Chrono from '../components/Cronometro'
import style from './App.module.scss';



function App() {
  return (
    <div className={style.AppStyle}>
      <Form/>
      <List/>
      <Chrono/>
    </div>
  );
}

export default App;
