import { useProdContext } from '@/hooks/useProdContext'
import DetallesProductos from '@/components/DetallesProductos/DetallesProductos.jsx'
import './productos.css'

const ProdList = () => {
  const { list, loading, setSelectedProd, selectedProd, search } = useProdContext()

  // Lista de canciones filtradas por la palabra buscada
  const filteredProdList = list.filter((Prod) => {
    return Prod.product_name.toLowerCase().includes(search.toLowerCase())
  })
  //se utiliza una imagen generica para evitar errores de imagenes corruptas o enlaces rotos
  const placeholderImage = 
  'https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVjaXBlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
  const handleImageError = (e) => {
    e.target.src = placeholderImage
  }
  return (
  
    <section className='row-container'>
      {loading
        ? <h1>Cargando...</h1>
        // para seleccionar un producto utilice este ternario anidado, primero compare que mi seleccion no este vacia, para invocar a Detalles productos
        // si esta vacia espero que se introduzca un dato en el buscador
        : Object.entries(selectedProd).length !== 0 ? <DetallesProductos/> : filteredProdList.map((Prod) => (  
          <div
            className='row-Prod'
            key={Prod.id}
            onClick={() => setSelectedProd(Prod)}
          >
            {/* usando el operador logico or cargamos la imagen original o la imagen de remplazo */}
            <img className='img' src={Prod.image || placeholderImage} alt={Prod.product_name} />
            <h3>{Prod.product_name}</h3>
            <h4>{Prod.brand}</h4>
            <h4>{Prod.price}</h4>
          </div>
        ))}
    </section>
  )
}
export default ProdList