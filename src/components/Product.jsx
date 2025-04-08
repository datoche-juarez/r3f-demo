import ProductModel from "./ProductModel";
import ProductDetails from "./ProductDetails";

export const Product = () => {
  return (
    <div className="flex flex-col w-full gap-4 md:flex-row">
      {/* Left: 3D Model Viewer */}
      <div className="relative w-full bg-product-bg aspect-[5/3]  md:w-1/2 md:h-auto flex items-center justify-center">
        <ProductModel />
        <p className="absolute z-10 flex justify-center w-full px-2 text-sm transform -translate-x-1/2 bottom-2 left-1/2 text-text-main">
          Click & drag to rotate • Scroll to zoom
        </p>
      </div>

      {/* Right: Product Info */}
      <div className="flex items-center justify-center w-full p-8 bg-product-bg md:w-1/2">
        <ProductDetails />
      </div>
    </div>
  );
};

export default Product;
