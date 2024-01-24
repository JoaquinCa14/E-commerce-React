import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';


function App() {
  const productos = [
    { id: 1, nombre: 'Amauta', precio: 1000 },
    { id: 2, nombre: 'Maisor', precio: 1800 },
    { id: 3, nombre: 'Forratec', precio: 2000 },
    { id: 4, nombre: 'KWS', precio: 2090 },
    { id: 5, nombre: 'Nutrea', precio: 4000 },
    { id: 6, nombre: 'Rizobacter', precio: 3550 }
  ];

  const detalles = productos.map(producto => '${producto.id} - ${producto.nombre} $${prooducto.precio}')


  return (
    <>
      <Navbar />
      <ItemListContainer productos={productos} greeting="Mensaje de bienvenida" />
    </>
  );
};

export default App