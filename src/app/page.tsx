import { ProductDetails } from "@/components/product-details";
import { getProductData } from "@/services/products";
import {Toaster} from "@/components/ui/toaster";
export default function Page() {
  const product = getProductData();

  return (
    <main className="max-w-screen-xl mx-auto px-4 py-12">
      <ProductDetails product={product} />
        <Toaster />
    </main>
  );
}
