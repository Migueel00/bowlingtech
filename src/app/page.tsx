import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import Carrousel from "@/components/Carrousel/Carrousel";
import Image from "next/image";
import logoTiktok from "../../public/img/logos/logoTikTok.webp"
import logoInsta from "../../public/img/logos/logoInstagram.png";


export default function Home() {
  return (
    <Container>
      <div className="flex w-[100%] justify-center">
        <Carrousel/>
      </div>
      <Hero />
      <Container>
        <div className="flex flex-row items-center">
          <div className="w-[60%]">
            <h2 className="text-2xl">
              Ven a vernos C/Portuetxe 88, 20018, San Sebastian
            </h2>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.609412389046!2d-2.0229302234356297!3d43.30150067510615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd51b064da0df555%3A0xb1aa6421bdaa58e1!2sC.%20Portuetxe%2C%2088%2C%2020018%20San%20Sebasti%C3%A1n%2C%20Guip%C3%BAzcoa!5e0!3m2!1ses!2ses!4v1734598481862!5m2!1ses!2ses" 
              className="w-[100%] h-[450px] mt-10"
              />
          </div>
            <div className="flex flex-col ml-5 w-[30%]">
              <h2>Descubrenos: </h2>
              <TiktokLogo />
              <InstagramLogo/>
          </div>
        </div>
    
        
      </Container>
      
    </Container>
  );
}



function TiktokLogo() {
  return (
  <div className="flex items-center justify-center lg:w-1/4 rounded-lg w-full mt-5">
    <div className="rounded-lg">
      <Image
        src={logoTiktok}
        width="720"
        height="720"
        className={"object-cover rounded-lg"}
        alt="Hero Illustration"
        loading="eager"
        placeholder="blur"
        
      />
    </div>
  </div>
  );
}

function InstagramLogo() {
  return (
  <div className="flex items-center justify-center lg:w-1/4 rounded-lg w-full mt-5">
    <div className="rounded-lg">
      <Image
        src={logoInsta}
        width="720"
        height="720"
        className={"object-cover rounded-lg"}
        alt="Hero Illustration"
        loading="eager"
        placeholder="blur"
        
      />
    </div>
  </div>
  );
}
