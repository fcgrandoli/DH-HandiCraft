import { ProductsCategory } from "./ProductsCategory";
import { ProductsLast } from "./ProductsLast";
import { ProductsList } from "./ProductsList";
import { ProductsTotal } from "./ProductsTotal";

export function ProductsSummary() {
  return (
    <div>
      <ProductsCategory />
      <ProductsLast />
      <ProductsList />
      <ProductsTotal />
    </div>
  );
}
