import Image from "next/image";
import hamburguer1 from "../../../public/img/menus/hamburguesa1.png"
import pizzaQueso from "../../../public/img/menus/pizza-queso.jpg";
import pizzaMargarita from "../../../public/img/menus/pizza-margarita.jpg";
import pizzaPeperoni from "../../../public/img/menus/pizza-de-peperoni.webp";
import hamburguesaBaconQueso from "../../../public/img/menus/hamburguesa-bacon-queso.webp";
import hamburguesaVegetariana from "../../../public/img/menus/hamburguesa-vegetariana.jpg";
import perritoPicante from "../../../public/img/menus/perrito-picante.jpg";
import perritoDeluxe from "../../../public/img/menus/perrito-deluxe.jpg";
import perritoChilli from "../../../public/img/menus/perrito-chilli-queso.webp";

import MenuCard from "./MenuCard";

const menuData = [
    {
        name: "Hamburguesa Clásica",
        description: "Jugosa carne de res con lechuga, tomate, pepinillos y salsa especial.",
        price: 10.99,
        image: hamburguer1
    },
    {
        name: "Pizza de Queso",
        description: "Pizza clásica de queso con mozzarella y salsa de tomate.",
        price: 12.49,
        image: pizzaQueso
    },
    {
        name: "Perrito Caliente Deluxe",
        description: "Perrito caliente a la parrilla con cebolla, relish y mostaza.",
        price: 6.99,
        image: perritoDeluxe
    },
    {
        name: "Hamburguesa con Tocino y Queso",
        description: "Carne de res con tocino crujiente, queso cheddar y salsa BBQ.",
        price: 13.69,
        image: hamburguesaBaconQueso
    },
    {
        name: "Pizza de Pepperoni",
        description: "Pizza cubierta con rodajas de pepperoni y mozzarella derretida.",
        price: 10.99,
        image: pizzaPeperoni
    },
    {
        name: "Perrito con Chili y Queso",
        description: "Perrito caliente cubierto con chili, queso derretido y cebolla.",
        price: 6.99,
        image: perritoChilli
    },
    {
        name: "Hamburguesa Vegetariana",
        description: "Hamburguesa a base de plantas con aguacate, lechuga y tomate.",
        price: 9.99,
        image: hamburguesaVegetariana
    },
    {
        name: "Pizza Margarita",
        description: "Tomates frescos, albahaca y mozzarella sobre una masa delgada.",
        price: 9.99,
        image: pizzaMargarita
    },
    {
        name: "Perrito Picante",
        description: "Perrito caliente con jalapeños picantes, mayonesa de sriracha y queso.",
        price: 6.49,
        image: perritoPicante
    },
];


export default function Menu() {

    return (
        <div className="w-[80%]  py-2 px-2 flex flex-wrap">
            {menuData.map((menu, index) => (
                <MenuCard key={index} image={menu.image} price={menu.price} description={menu.description} name={menu.name}/>
            ))}
        </div>
    );
}