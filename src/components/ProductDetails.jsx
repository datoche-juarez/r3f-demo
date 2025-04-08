export default function ProductDetails() {
  return (
    <div className="max-w-md">
      <h1 className="mb-4 text-3xl font-bold">High Precision Servo Motor</h1>
      <p className="mb-6 text-gray-700">
        This servo motor is designed for industrial automation systems requiring
        high torque, accuracy, and reliability. Perfect for robotics, CNC
        machines, and more.
      </p>
      <p className="mb-4 text-xl font-semibold text-black-600">$229.99</p>
      <button className="px-6 py-2 text-black transition bg-yellow-400 rounded hover:bg-yellow-500">
        Add to Quote
      </button>
    </div>
  );
}
