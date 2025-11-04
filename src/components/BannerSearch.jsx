import { Search, Clock } from "lucide-react";

export default function BannerSearch() {
  return (
    <section className="bg-gradient-to-br from-emerald-50 via-white to-emerald-50/60">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-12 grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
            Groceries delivered in minutes
          </h1>
          <p className="mt-2 text-gray-600">
            Fresh fruits, snacks, essentials and more. Lightning-fast delivery to your doorstep.
          </p>

          <div className="mt-5 flex items-center gap-3">
            <div className="flex items-center gap-2 text-emerald-700 bg-emerald-100 px-3 py-1.5 rounded-full text-sm">
              <Clock size={16}/> Under 10 mins in your area
            </div>
          </div>

          <div className="mt-5">
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl shadow-sm px-3 py-2">
              <Search className="text-gray-500" size={18} />
              <input
                type="text"
                placeholder="Search for 'milk', 'chips', 'coke'..."
                className="w-full outline-none text-sm placeholder:text-gray-400"
              />
              <button className="text-sm bg-emerald-600 text-white px-3 py-1.5 rounded-lg">Search</button>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-tr from-emerald-600 via-emerald-500 to-lime-400 p-1">
            <div className="h-full w-full rounded-2xl bg-white/90 grid grid-cols-3 gap-2 p-3">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="rounded-lg bg-emerald-100/60 border border-emerald-200"></div>
              ))}
            </div>
          </div>
          <div className="absolute -bottom-3 -right-3 bg-white shadow-lg border border-gray-200 rounded-xl px-3 py-2 text-xs text-gray-700">
            Fresh picks just for you
          </div>
        </div>
      </div>
    </section>
  );
}
