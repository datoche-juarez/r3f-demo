import Product from "./components/Product";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-center text-sm text-white bg-blue-700 min-h-14 h-14">
        3D Product Demo
      </header>

      {/* Main Content */}
      <main className="flex-1 border-4 border-green-500 md:flex md:items-center md:justify-center">
        <div className="w-full max-w-screen-xl p-4 mx-auto border-4 border-blue-500">
          <Product />
        </div>
      </main>

      <footer className="flex items-center justify-center text-xs text-white bg-blue-700 min-h-14 h-14">
        © 2025 Demo Company. All rights reserved.
      </footer>
    </div>
  );
}
