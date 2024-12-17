import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import Carrousel from "@/components/Carrousel/Carrousel";
import Bar from "@/components/Bar/Bar";
export default function Home() {
  return (
    <Container>
      <div className="flex w-[100%] justify-center">
        <Carrousel/>
      </div>
      <Hero />
      <SectionTitle
        preTitle="Our Bar"
        title="DISCOVER OUR BAR"
      >  
      </SectionTitle>

      <div className="flex items-center">
        <Bar/>
      </div>
    </Container>
  );
}
