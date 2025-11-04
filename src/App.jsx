import { useMemo, useState } from "react";
import TopBar from "./components/TopBar";
import BannerSearch from "./components/BannerSearch";
import CategoryGrid from "./components/CategoryGrid";
import ProductList from "./components/ProductList";
import { ShoppingBag } from "lucide-react";

export default function App() {
  const [cart, setCart] = useState({});

  const cartCount = useMemo(() =>
    Object.values(cart).reduce((sum, item) => sum + item.qty, 0),
  [cart]);

  const cartTotal = useMemo(() =>
    Object.values(cart).reduce((sum, item) => sum + item.qty * item.price, 0),
  [cart]);

  const handleAdd = (product) => {
    setCart((prev) => {
      const existing = prev[product.id];
      const nextQty = existing ? existing.qty + 1 : 1;
      return {
        ...prev,
        [product.id]: { ...product, qty: nextQty },
      };
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <TopBar cartCount={cartCount} />
      <main>
        <BannerSearch />
        <CategoryGrid />
        <ProductList onAdd={handleAdd} />
      </main>

      {cartCount > 0 && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[92%] md:w-auto">
          <div className="mx-auto max-w-6xl">
            <div className="flex items-center justify-between gap-4 bg-emerald-600 text-white px-4 py-3 rounded-xl shadow-lg">
              <div className="flex items-center gap-2">
                <ShoppingBag size={20} />
                <div className="text-sm font-medium">{cartCount} items</div>
              </div>
              <div className="text-sm font-semibold">₹{cartTotal}</div>
              <button className="bg-white text-emerald-700 font-semibold text-sm px-3 py-1.5 rounded-lg">Checkout</button>
            </div>
          </div>
        </div>
      )}

      <footer className="mt-16 border-t border-gray-100 py-8">
        <div className="mx-auto max-w-6xl px-4 text-sm text-gray-600">
          © {new Date().getFullYear()} Zipcart • Built for speed and freshness
        </div>
      </footer>
    </div>
  );
}
