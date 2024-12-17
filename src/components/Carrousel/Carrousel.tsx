'use client';

import { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import bolera1 from '../../../public/img/bolera/bolera1.png';
import bolera2 from '../../../public/img/bolera/bolera2.png';
import bolera3 from '../../../public/img/bolera/bolera3.png';
import bolera4 from '../../../public/img/bolera/bolera4.png';
import bolera5 from '../../../public/img/bolera/bolera5.png';
import { ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/24/solid';



function Carrousel() {
    const images: StaticImageData[] = [bolera1, bolera2, bolera3, bolera4, bolera5];
    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        // Configura el intervalo
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4500);

        return () => clearInterval(interval);
    }, []); 

    const leftChevron = () => {
        index === 0 ? setIndex(4) : setIndex(prevIndex => prevIndex -= 1);
    }

    const rightChevron = () => {
        index === 4 ? setIndex(0) : setIndex(prevIndex => prevIndex += 1);
    }   

    return (
        <div className='w-[90%] mt-2 h-[580px] relative flex justify-center'>
            <div className='w-[100%] flex justify-between'>
                <ChevronLeftIcon className='w-[10%] cursor-pointer transition-transform duration-300 ease-linear transform hover:scale-110' onClick={leftChevron}/>
                <Image 
                    src={images[index]}
                    alt={`bolera${index + 1}`}
                    
                    className='shadow-xl rounded-lg'
                />
                <ChevronRightIcon className='w-[10%] cursor-pointer transition-transform duration-300 ease-linear transform hover:scale-110' onClick={rightChevron}/>
            </div>
        </div>
    );
}

export default Carrousel;
