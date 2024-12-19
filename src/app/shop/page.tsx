import bolsoLana from "../../../public/img/merchandising/bolso-lana-removebg-preview.png"
import bolsoLana2 from "../../../public/img/merchandising/bolso-lana2-removebg-preview.png"
import gorra from "../../../public/img/merchandising/gorra-removebg-preview.png";
import taza from "../../../public/img/merchandising/taza-removebg-preview.png";
import uniforme from "../../../public/img/merchandising/uniforme-removebg-preview.png";
import sudadera from "../../../public/img/merchandising/Sudadera_Merchandising-removebg-preview.png";
import botella from "../../../public/img/merchandising/botella-removebg-preview.png";
import MerchCard from "@/components/Shop/MerchCard";




const merchProducts = [
    {name: "Sudadera", price: 19.99, image: sudadera},
    {name: "Bolso ", price: 12.99, image: bolsoLana},
    {name: "Bolso", price: 11.99, image: bolsoLana2},
    {name: "Gorra", price: 8.99, image: gorra},
    {name: "Botella", price: 4.99, image: botella},
    {name: "Taza", price: 5.99, image: taza},
    {name: "Uniforme", price: 11.99, image: uniforme},
]

const hanldeBuy = () =>{

}

export default function Shop(){
    return (
        <div className="flex justify-center p-4 w-[100%]">
            <div className="w-[90%] flex flex-wrap justify-center">
                {merchProducts.map(merch => (
                    <MerchCard 
                        productImage={merch.image}
                        productName={merch.name}
                        productPrice={merch.price}
                    />
                ))}
            </div>
        </div>  
    );
}
