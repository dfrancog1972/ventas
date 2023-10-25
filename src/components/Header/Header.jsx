import { useProdContext } from '@/hooks/useProdContext'
import './header.scss'

const Header = () => {
const { list, selectedProd, setSelectedProd, setSearch } = useProdContext()

const handleSearch = (e) => {
    setSearch(e.target.value)
}

const nextProd = () => {
    const ProdIndex = list.findIndex(s => s.id === selectedProd.id)
    list.length > ProdIndex + 1
    ? setSelectedProd(list[ProdIndex + 1])
    : setSelectedProd(list[0])
}

const prevProd = () => {
    const ProdIndex = list.findIndex(s => s.id === selectedProd.id)
    ProdIndex > 0
    ? setSelectedProd(list[ProdIndex - 1])
    : setSelectedProd(list[list.length - 1])
}

const shuffle = () => {
    const randomIndex = Math.floor(Math.random() * list.length)
    setSelectedProd(list[randomIndex])
}

return (
    <>
    <nav className='header'>
        <a className='header__logo' href='/'>LOGO</a>
        <ul className='header__nav-list'>
            <li className='header__list-item'>
                <a href="/home" className='header__item-link header__item-link--is--active'>Home</a>
            </li><li className='header__list-item'>
                <a href="/dashboard" className='header__item-link'>Dashboard</a>
            </li>
            <li className='header__list-item'>
                <a href="/secret" className='header__item-link'>Secret</a>
            </li>
            <li className='header__list-item'>
                <a href="/login" className='header__item-link'>Login</a>
            </li>
            <li className='header__list-item '>
                <a href="/signup" className='header__item-link'>Signup</a>
            </li>
        </ul>
        {
        list.length > 0
        ? (
            <>
            <input
                className='header__input-search'
                type='search'
                placeholder='Buscar Producto...'
                onChange={handleSearch}
            />

            <div className='header__now-playing-container'>
                <span className='header__now-playing'>
                Producto Seleccionado:
                </span>
                <span className='header__Prod-detail'>
                {selectedProd.product_name} - {selectedProd.brand}
                </span>
            </div>

            {/* <div>
                <button
                className='header__button'
                onClick={shuffle}
                > 🔀 Shuffle
                </button>

                <button
                className='header__button'
                onClick={prevProd}
                > ◀️ Prev
                </button>

                <button
                className='header__button'
                onClick={nextProd}
                > Next ▶️
                </button>
            </div> */}
            </>
            )
        : <h2>Cargando...</h2>
        }
    </nav>
    </>
)
}
export default Header