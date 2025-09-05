import { useEffect, useState } from "react";
import { Heart, ShoppingCart, Shuffle } from "lucide-react";
import '../App.css'

const ProductCard = ({ product }) => {
  return (
    <div className="group bg-white rounded-md overflow-hidden">
      {/* Product Image */}
      <div className="relative aspect-square w-full bg-gray-100 flex items-center justify-center overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain p-4"
        />

        {/* Hover Strip from Bottom */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white shadow-md">
          <div className="flex flex-col items-start gap-2 p-4 text-sm">
            <button className="flex items-center gap-2 text-gray-700 hover:text-black">
              <Heart size={16} /> Add to Wish List
            </button>
            <button className="flex items-center gap-2 text-gray-700 hover:text-black">
              <Shuffle size={16} /> Compare
            </button>
            <button className="flex items-center gap-2 text-gray-900 font-semibold hover:text-black">
              <ShoppingCart size={16} /> Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 text-left">
        <h3 className="text-sm font-medium">{product.title}</h3>
        <p className="text-gray-500 text-xs">{product.brand || "No brand"}</p>
        <p className="text-gray-900 font-semibold">${product.price}</p>
      </div>
    </div>
  );
};

export default function NewArrivals() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=8")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <section className="container mx-auto px-6 py-12">
      <h2 className="text-2xl font-semibold mb-8">New Arrivals</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
