import "../../public/ProductsSummary.css";
import { ProductsCategory } from "./ProductsCategory";
import { ProductsLast } from "./ProductsLast";
import { ProductsList } from "./ProductsList";
import { ProductsTotal } from "./ProductsTotal";
import { Sidebar } from "./Sidebar";

export function ProductsSummary() {
  return (
    <>
      <div className="prd-dash-overview">
        <Sidebar />
        <div class="box-1">
          <ProductsLast />
          <ProductsList />
          <div class="box-2">
            <ProductsTotal />
            <ProductsCategory />
          </div>
        </div>
      </div>
    </>
  );
}
