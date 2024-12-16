import DrinkCard from "./DrinkCard";
import { coktails } from "./Drinks";

const Bar = () => {
    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coktails.map(coktail => (
                <DrinkCard 
                    key={coktail.name}
                    name={coktail.name}
                    description={coktail.description}
                    image={coktail.image} // Aquí puedes pasar las imágenes si las tienes
                    price={coktail.price}
                />
            ))}
        </div>
    );
    
}

export default Bar;