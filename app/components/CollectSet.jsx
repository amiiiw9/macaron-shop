import Image from "next/image";
import macarons6 from "@/app/assets/images/macarons6.png";
import macarons12 from "@/app/assets/images/macarons12.png";
import macarons24 from "@/app/assets/images/macarons24.png";
import macarons48 from "@/app/assets/images/macarons48.png";
import macarons40 from "@/app/assets/images/macarons40.png";
import macarons70 from "@/app/assets/images/macarons70.png";

const products = [
  { id: 1, name: "Набор из 6 макарон", price: "45 сомони", image: macarons6 },
  { id: 2, name: "Набор из 12 макарон", price: "90 сомони", image: macarons12 },
  {
    id: 3,
    name: "Набор из 24 макарон",
    price: "180 сомони",
    image: macarons24,
  },
  {
    id: 4,
    name: "Набор из 48 макарон",
    price: "360 сомони",
    image: macarons48,
  },
  {
    id: 5,
    name: "Набор из 40 макарон в круглой коробке",
    price: "384 сомони",
    image: macarons40,
  },
  {
    id: 6,
    name: "Набор из 70 макарон в круглой коробке",
    price: "640 сомони",
    image: macarons70,
  },
];

export default function CollectSet() {
  return (
    <div className="container mx-auto p-4 ">
      <nav className="text-sm text-gray-500 mb-4 text-center">
        Главная &gt; Собрать набор &gt;{" "}
        <span className="text-blue-500 ">Выбрать количество</span>
      </nav>
      <h1 className="text-2xl font-bold mb-6 text-center">
        Выберите количество
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border-gray-100 rounded-lg shadow-md p-4 text-center transform transition duration-300 hover:scale-105"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={200}
              className="mx-auto mb-4"
            />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-pink-600 text-xl mt-2">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
