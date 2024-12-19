import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface MerchCardProps {
    productName: string;
    productPrice: number;
    productImage: string | StaticImageData;
}

const MerchCard: React.FC<MerchCardProps> = ({ productName, productPrice, productImage}) => {
    return (                      
        <div className="rounded-lg overflow-hidden shadow-lg bg-white w-[35%] mt-10 ml-2 mr-2">
            <Image src={productImage} alt={productName} className="w-full h-56 object-cover" />
            <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{productName}</h3>
                <p className="text-lg font-medium text-pink-600 mt-2">{productPrice}</p>
                <button
                    className="w-full mt-4 py-2 px-4 bg-cyan-200 text-white text-lg font-semibold rounded-md hover:bg-cyan-900 transition"
                >
                    Comprar
                </button>
            </div>
        </div>
    );
};

export default MerchCard;
