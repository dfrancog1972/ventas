import { useProdContext } from '@/hooks/useProdContext'
import './header.css'

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
    <div className='header__container'>
        {
        list.length > 0
        ? (
            <>
            <input
                className='header__input-search'
                type='search'
                placeholder='Search a Prod...'
                onChange={handleSearch}
            />

            <div className='header__now-playing-container'>
                <span className='header__now-playing'>
                Now playing:
                </span>
                <span className='header__Prod-detail'>
                {selectedProd.product_name} - {selectedProd.brand}
                </span>
            </div>

            <div>
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
            </div>
            </>
            )
        : <h2>Cargando...</h2>
        }
    </div>
    </>
)
}
export default Header