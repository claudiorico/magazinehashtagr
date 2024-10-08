import { useCartContext } from "../../contexts/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const Product = ({ id, brand, name, price, image, feminine }) => {
    const { addToCart } = useCartContext();

    return <article className="flex flex-col group w-48 bg-stone-100 shadow-xl shadow-slate-200 justify-around border-2 border-gray-200 rounded-lg">
        <img src={image} alt={`Imagem do Produto ${name}`} className="group-hover:scale-110 rounded-lg mx-4 my-3 transition duration-300 " />
        <p className="mx-4 text-sm text-slate-400">{brand}</p>
        <p className="mx-4 text-sm">{name}</p>
        <p className="mx-4 text-sm text-green-700">{price}</p>
        <p className="mx-4 text-sm">{feminine ? 'F' : 'M'}</p>

        <button onClick={() => addToCart(id)} className="bg-slate-950 rounded-md mx-4 my-1 text-slate-100 hover:bg-slate-800"><FontAwesomeIcon icon={faCartPlus}/></button>
    </article>
}

export default Product;