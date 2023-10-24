import { useProdContext } from '@/hooks/useProdContext'
import '@/components/DetallesProductos/detallesproductos.css'



const ProdDetails = () => {
const { selectedProd } = useProdContext()

return (
    <>
    {
        selectedProd.product_name
        ? (
            <div className='contenedor'>
            <img className='img1' src={selectedProd.image} alt={selectedProd.product_name} />
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