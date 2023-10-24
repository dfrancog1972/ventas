import { useProdContext } from '@/hooks/useProdContext'
import './productos.css'

const ProdList = () => {
  const { list, loading, setSelectedProd, search } = useProdContext()

  // Lista de canciones filtradas por la palabra buscada
  const filteredProdList = list.filter((Prod) => {
    return Prod.product_name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <section className='row-container'>
      {loading
        ? <h1>Cargando...</h1>
        : filteredProdList.map((Prod) => (
          <div
            className='row-Prod'
            key={Prod.id}
            onClick={() => setSelectedProd(Prod)}
          >
            <img src={Prod.image} alt={Prod.product_name} />
            <h3>{Prod.product_name}</h3>
            <h4>{Prod.brand}</h4>
            <h4>{Prod.price}</h4>
          </div>
        ))}
    </section>
  )
}
export default ProdList