import { ShoppingCart, Star } from "lucide-react";

const products = [
  { id: 1, name: "Fresh Bananas", price: 49, unit: "500g", rating: 4.6, badge: "Under 10 mins", color: "from-yellow-100 to-white" },
  { id: 2, name: "Whole Wheat Bread", price: 39, unit: "400g", rating: 4.3, badge: "Bestseller", color: "from-amber-100 to-white" },
  { id: 3, name: "Toned Milk", price: 56, unit: "1L", rating: 4.4, badge: "Popular", color: "from-sky-100 to-white" },
  { id: 4, name: "Masala Chips", price: 20, unit: "52g", rating: 4.1, badge: "Deal", color: "from-rose-100 to-white" },
  { id: 5, name: "Sparkling Soda", price: 35, unit: "750ml", rating: 4.0, badge: "Chilled", color: "from-emerald-100 to-white" },
  { id: 6, name: "Farm Eggs", price: 65, unit: "6 pcs", rating: 4.5, badge: "Fresh", color: "from-lime-100 to-white" },
];

export default function ProductList({ onAdd }) {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Popular near you</h2>
        <button className="text-sm text-emerald-700">View more</button>
      </div>

      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {products.map((p) => (
          <div key={p.id} className="group rounded-xl border border-gray-200 overflow-hidden bg-white hover:shadow-md transition-shadow">
            <div className={`h-28 bg-gradient-to-br ${p.color} grid place-items-center`}></div>
            <div className="p-3">
              <div className="flex items-center gap-1 text-emerald-700 text-xs font-medium">
                <Star size={14} className="fill-emerald-600 text-emerald-600" /> {p.rating}
                <span className="ml-auto bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full">{p.badge}</span>
              </div>
              <div className="mt-1 text-sm font-medium text-gray-900 line-clamp-1">{p.name}</div>
              <div className="text-xs text-gray-500">{p.unit}</div>
              <div className="mt-2 flex items-center justify-between">
                <div className="font-semibold">₹{p.price}</div>
                <button
                  onClick={() => onAdd?.(p)}
                  className="inline-flex items-center gap-1 text-emerald-700 border border-emerald-200 px-2 py-1 rounded-lg text-xs hover:bg-emerald-50"
                >
                  <ShoppingCart size={14}/> Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
