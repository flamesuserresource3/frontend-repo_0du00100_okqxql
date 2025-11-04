import { Apple, Sandwich, Beef, Milk, Beer, Salad } from "lucide-react";

const categories = [
  { name: "Fruits & Veggies", icon: Apple, color: "bg-rose-100 text-rose-700" },
  { name: "Bakery & Snacks", icon: Sandwich, color: "bg-amber-100 text-amber-700" },
  { name: "Meat & Fish", icon: Beef, color: "bg-red-100 text-red-700" },
  { name: "Dairy & Eggs", icon: Milk, color: "bg-sky-100 text-sky-700" },
  { name: "Beverages", icon: Beer, color: "bg-emerald-100 text-emerald-700" },
  { name: "Salads & Healthy", icon: Salad, color: "bg-lime-100 text-lime-700" },
];

export default function CategoryGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Shop by category</h2>
        <button className="text-sm text-emerald-700">See all</button>
      </div>
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {categories.map(({ name, icon: Icon, color }) => (
          <button key={name} className="group text-left">
            <div className={`h-24 rounded-xl border border-gray-200 flex items-center justify-center ${color} transition-transform group-hover:-translate-y-0.5`}>
              <Icon />
            </div>
            <div className="mt-2 text-sm font-medium text-gray-800 line-clamp-1">{name}</div>
          </button>
        ))}
      </div>
    </section>
  );
}
