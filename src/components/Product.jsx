import ProductModel from "./ProductModel";
import ProductDetails from "./ProductDetails";

export const Product = () => {
  return (
    <div className="flex flex-col w-full h-full gap-4 md:flex-row">
      {/* Left: 3D Model Viewer */}
      <div className="relative w-full md:w-1/2">
        {/* Aspect ratio wrapper for mobile */}
        <div className="relative pt-[75%] md:pt-0 bg-product-bg md:h-full">
          <div className="absolute inset-0 ">
            <ProductModel />
            <p className="absolute z-10 text-sm transform -translate-x-1/2 text-text-main bottom-2 left-1/2">
              Click & drag to rotate • Scroll to zoom
            </p>
          </div>
        </div>
      </div>

      {/* Right: Product Info */}
      <div className="flex items-center justify-center p-8 w-ful bg-product-bg md:w-1/2 md:h-full">
        <ProductDetails />
      </div>
    </div>
  );
};

export default Product;
