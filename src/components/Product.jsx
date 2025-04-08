import ProductModel from "./ProductModel";
import ProductDetails from "./ProductDetails";

export const Product = () => {
  return (
    <div className="flex flex-col w-full h-full gap-4 border-4 border-red-500 md:flex-row">
      {/* Left: 3D Model Viewer */}
      <div className="relative w-full border-4 border-purple-500 lg:w-1/2">
        {/* Aspect ratio wrapper for mobile */}
        <div className="relative pt-[75%] lg:pt-0 lg:h-full">
          <div className="absolute inset-0">
            <ProductModel />
            <p className="absolute z-10 text-sm text-gray-500 transform -translate-x-1/2 border border-green-500 bottom-2 left-1/2">
              Click & drag to rotate
            </p>
          </div>
        </div>
      </div>

      {/* Right: Product Info */}
      <div className="flex items-center justify-center w-full p-8 border-4 border-green-600 lg:w-1/2 lg:h-full bg-gray-50">
        <ProductDetails />
      </div>
    </div>
  );
};

export default Product;
