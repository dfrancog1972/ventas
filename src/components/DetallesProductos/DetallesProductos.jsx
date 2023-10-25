import { useProdContext } from '@/hooks/useProdContext'
import '@/components/DetallesProductos/detallesproductos.css'



const ProdDetails = () => {
const { selectedProd } = useProdContext()

//se utiliza una imagen generica para evitar errores de imagenes corruptas o enlaces rotos
const placeholderImage = 
'https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVjaXBlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
const handleImageError = (e) => {
    e.target.src = placeholderImage
}

return (
    <>
    {
        selectedProd.product_name
        ? (
            <div className='contenedor'>
            {/* usando el operador logico or cargamos la imagen original o la imagen de remplazo */}
            <img className='img1' src={selectedProd.image || placeholderImage} alt={selectedProd.product_name} />
            <h2>{selectedProd.product_name}</h2>
            <h3>{selectedProd.description}</h3>
            <h3>{selectedProd.category}</h3>
            <h3>{selectedProd.brand}</h3>
            <h3>{selectedProd.price}</h3>
            <h3>{selectedProd.createdAt}</h3>
            <h3>{selectedProd.updatedAt}</h3>
            
            </div>
            )
        : <h1>Selecciona un producto</h1>
        }
    </>
  )
}
export default ProdDetails