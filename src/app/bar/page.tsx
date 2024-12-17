import Bar from "@/components/Bar/Bar";
import { SectionTitle } from "@/components/SectionTitle";

export default function BarPage(){
    return(
        <>
            <SectionTitle
                preTitle="Nuestro Bar"
                title="Descubre nuestros sabores"
            >  
            </SectionTitle>
            <div className="flex items-center">
                <Bar/>
            </div>
        </>
    );
}