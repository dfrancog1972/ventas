import { createContext, useState, useEffect } from 'react'
// Usamos @ (alias) para no tener que poner ../../
// import canciones from '../../assets/listaCanciones.json'
import productos from '@/assets/db.json'
// CONTEXT tiene que ver con el manejo de estados globales en React.
// Es decir, poder compartir LA MISMA información entre diferentes NIVELES de componentes.

// Para usar CONTEXT necesitamos seguir una serie de pasos:

// 1. Crear el contexto
const ProdContext = createContext()

// 2. Crear el proveedor del contexto
// Es decir, maneja de donde se obtiene la información y como se comparte.
// El proveedor es un componente de React que envuelve a los componentes que van a usar el contexto.

function ProdProvider ({ children }) {
  const [list, setList] = useState([]) // lista de canciones
  const [loading, setLoading] = useState(true) // ¿esta cargando la lista?
  const [selectedProd, setSelectedProd] = useState({}) // canción seleccionada
  const [search, setSearch] = useState('') // Identifica la palabra que pongo en el buscador

  // Simulo mi llamada a la API
useEffect(() => {
    setTimeout(() => {
    setList(productos)
    setLoading(false)
    }, 2000)
}, [])

const data = {
    list,
    loading,
    selectedProd,
    setSelectedProd,
    search,
    setSearch
}

return (
    <ProdContext.Provider value={data}>
    {children}
    </ProdContext.Provider>
)
}

// Exportar las funciones del Provider y el Contexto para hacerlos accesibles.
export {
ProdProvider,
ProdContext
}