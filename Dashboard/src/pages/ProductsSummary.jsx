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
        <div className="sidebar">
          <Sidebar />
        </div>
        <div class="dash-overview-container">
          <div class="box-1">
            <ProductsLast />
          </div>
          <div class="box-2">
            <div class="box-3">
              <ProductsTotal />
              <ProductsCategory />
            </div>
            <ProductsList />
          </div>
        </div>
      </div>
    </>
  );
}
