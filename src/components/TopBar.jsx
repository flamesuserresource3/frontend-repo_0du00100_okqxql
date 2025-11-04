import { MapPin, Percent, User, ShoppingCart } from "lucide-react";

export default function TopBar({ cartCount = 0 }) {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold">Z</div>
          <div>
            <div className="text-sm text-gray-500">Deliver to</div>
            <button className="flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-emerald-600">
              <MapPin size={16} />
              Home, 15th Ave
            </button>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4 text-sm">
          <span className="flex items-center gap-1 text-gray-600"><Percent size={16}/> Offers</span>
          <span className="flex items-center gap-1 text-gray-600"><User size={16}/> Account</span>
          <span className="relative flex items-center gap-2 bg-emerald-600 text-white px-3 py-1.5 rounded-md">
            <ShoppingCart size={18}/>
            <span className="text-sm">Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 text-xs bg-white text-emerald-700 rounded-full h-5 w-5 grid place-items-center font-semibold">
                {cartCount}
              </span>
            )}
          </span>
        </div>
      </div>
    </header>
  );
}
