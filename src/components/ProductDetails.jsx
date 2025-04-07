export default function ProductDetails() {
  return (
    <div className="max-w-md">
      <h1 className="text-3xl font-bold mb-4">High Precision Servo Motor</h1>
      <p className="text-gray-700 mb-6">
        This servo motor is designed for industrial automation systems requiring
        high torque, accuracy, and reliability. Perfect for robotics, CNC
        machines, and more.
      </p>
      <p className="text-xl font-semibold text-green-600 mb-4">$229.99</p>
      <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
        Add to Quote
      </button>
    </div>
  );
}
