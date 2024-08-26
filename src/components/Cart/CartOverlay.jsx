import { useState } from "react";

const CartOverlay = () => {
    const [isCartOpen, setIsCartOpen] = useState(true);
    return <div className={`h-screen w-screen fixed top-0 left-0 flex z-50 ease-in-out durantion-200 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <section onClick={() => { setIsCartOpen(false) }} id="outside-of-cart" className="w-3/4 bg-slate-950 opacity-50"></section>
        <section id="cart" className="w-1/4 bg-slate-950 min-w-96 border-slate-400 p-5 flex flex-col justify-between text-write"></section>
    </div>
}

export default CartOverlay;