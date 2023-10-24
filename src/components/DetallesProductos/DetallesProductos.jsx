import { useProdContext } from '@/hooks/useProdContext'

const ProdDetails = () => {
const { selectedProd } = useProdContext()

return (
    <>
    {
        selectedProd.product_name
        ? (
            <div>
            <img src={selectedProd.image} alt={selectedProd.product_name} />
            <h2>{selectedProd.product_name}</h2>
            <h3>{selectedProd.brand}</h3>
            <h6>{selectedProd.price}</h6>
            </div>
            )
        : <h1>Selecciona un producto</h1>
        }
    </>
  )
}
export default ProdDetails