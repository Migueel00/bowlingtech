import DrinkCard from "./DrinkCard";
import { coktails } from "./Drinks";

const Bar = () => {
    return (
        <div className="w-full min-h-screen grid place-items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {coktails.map(coktail => (
                    <DrinkCard 
                        key={coktail.name}
                        name={coktail.name}
                        description={coktail.description}
                        image={coktail.image}
                        price={coktail.price}
                    />
                ))}
            </div>
        </div>
    );
}

export default Bar;
