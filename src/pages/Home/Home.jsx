import Header from '@/components/Header/Header.jsx'
import Productos from '@/components/Productos/Productos.jsx'
import DetallesProductos from '@/components/DetallesProductos/DetallesProductos.jsx'
import { ProdProvider } from '@/context/ProdContext.jsx'
import './home.css'

const Home = () => {
    return (
        <ProdProvider>
            <Header />
            <div className='home-container'>
                <div className='izquierdo'>
                    <Productos />
                </div>
                <div className='derecho'>
                    <DetallesProductos />
                </div>
        </div>
    </ProdProvider>
)
}
export default Home