import Image, { StaticImageData } from "next/image";

interface MenuCard {
    image: StaticImageData | string;
    price: number;
    description: string;
    name: string;
}

const MenuCard = ({image, price, description, name} : MenuCard) => { 
    
    return (
        <div className="w-[50%] mt-5 h-[180px] flex flex-row rounded-lg shadow-lg">

            <div className="relative w-[35%]">
                <Image 
                    src={image}
                    alt="foto hamburguesa"
                    fill
                    sizes="120"
                />
            </div>
            <div className="ml-2 w-[55%]">
                <p className="mt-2 font-bold text-lg">{name}</p>
                <p className="mt-4">{description}
                    <span className="text-orange-700"> Patatas + Bebida incluidas.</span>
                </p>    
                <p className="mt-2 text-right">Precio: {price}€</p>
            </div>
    </div>
    )
}

export default MenuCard;