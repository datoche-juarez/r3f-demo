import Product from "./components/Product";

export default function App() {
  return (
    <div className="flex flex-col h-screen min-h-screen">
      <header className="flex items-center justify-center text-sm text-white bg-blue-700 h-14">
        Demo Nav Bar
      </header>

      <main className="flex flex-1 h-full border-4 border-green-500">
        <div className="flex items-center justify-center w-full h-full p-4 border-4 border-blue-500">
          <Product />
        </div>
      </main>

      <footer className="flex items-center justify-center text-xs text-white bg-blue-700 h-14">
        © 2025 Demo Company. All rights reserved.
      </footer>
    </div>
  );
}