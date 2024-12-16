
import Image from "next/image";

interface DrinkCardProps {
    image: string;
    name: string;
    description: string;
    price: number;
}
const DrinkCard = ({ image, name, description, price }: DrinkCardProps) => {
    return (
        <div className="w-full max-w-sm p-4 border rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
            <div className="relative w-full h-48 rounded-lg overflow-hidden border border-gray-300">
                <Image 
                    src={`/img/${image}`}
                    alt={`${name} image`}
                    layout="fill"
                    objectFit="cover"
                    
                />
            </div>
            <div className="mt-4 text-center">
                <h2 className="text-lg font-bold text-gray-800">{name}</h2>
                <p className="mt-2 text-sm text-gray-600">{description}</p>
                <p className="mt-2 text-sm text-gray-400 font-bold">Price: {price} €</p>
            </div>
        </div>
    );
};

export default DrinkCard;
