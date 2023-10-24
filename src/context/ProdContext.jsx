import { createContext, useState, useEffect } from 'react'
import productos from '@/assets/db.json'
const ProdContext = createContext()

function ProdProvider ({ children }) {
  const [list, setList] = useState([]) 
  const [loading, setLoading] = useState(true)
  const [selectedProd, setSelectedProd] = useState({}) 
  const [search, setSearch] = useState('') 


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


export {
ProdProvider,
ProdContext
}