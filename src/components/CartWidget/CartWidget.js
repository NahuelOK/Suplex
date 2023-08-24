import cart from './assets/cart2.svg'

const CartWidget = () =>{
    return(
        <button type="button" class="btn position-relative">
           <img src={cart} className='ajust-carro'/>
        <span class="position-absolute top-0 start-98 translate-middle badge rounded-pill bg-danger">
            +10
        </span>
    </button>
    )
}
export default CartWidget;