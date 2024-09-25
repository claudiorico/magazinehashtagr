import ProductsContainer from "./ProductsContainer";
import ProductFilters from "./ProductFilters";
import { useState } from "react";

const MainSection = () => {
    const [femaleProducts, setFemaleProducts] = useState(null);
    return <>
        <ProductFilters setFemaleProducts={ setFemaleProducts } />
        <ProductsContainer femaleProducts={ femaleProducts } />
    </>
}

export default MainSection;