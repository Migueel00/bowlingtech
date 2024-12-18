import Bar from "@/components/Bar/Bar";
import { SectionTitle } from "@/components/SectionTitle";
import Menu from "@/components/Bar/Menu";

export default function BarPage(){
    return(
        <div className="w-[100%] h-full">
            <SectionTitle
                preTitle="Nuestro Bar"
                title="Descubre nuestros sabores"
            >  
            </SectionTitle>
            <div className="flex items-center">
                <Bar/>
            </div>
            <SectionTitle
                preTitle="Nuestra Carta"
                title="Descrubre nuestros combos"
            >                
            </SectionTitle>
            <div className="flex justify-center">
                <Menu/>
            </div>
        </div>
    );
}