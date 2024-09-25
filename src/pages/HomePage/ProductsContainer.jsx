import { catalog } from "../../utils/catalog";
import Product from "./Product";

const ProductsContainer = ({ femaleProducts }) => {
  return (
    <section className="flex flex-wrap mx-auto p-10 justify-center gap-10">
      {(femaleProducts !== null
        ? catalog.filter((p) =>
            p.feminine === femaleProducts
          )
        : catalog
      ).map((product) => (
        <Product {...product} key={`product_${product.id}`} />
      ))}
    </section>
  );
};

export default ProductsContainer;
