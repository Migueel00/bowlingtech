import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import Carrousel from "@/components/Carrousel/Carrousel";
import Image from "next/image";
import logoTiktok from "../../public/img/logos/logoTikTok.webp"
import logoInsta from "../../public/img/logos/logoInstagram.png";


export default function Home() {
  return (
    <Container>
      <Hero />
      <div className="flex w-[100%] justify-center">
        <Carrousel/>
      </div>
      <Container>
        <div className="mt-10">
          <div className="flex justify-center">
            <div className="pt-2 text-gray-400 dark:text-gray-400 w-1/4 flex justify-center">
              <TiktokLogo />
            </div>
            <div className="text-gray-400 dark:text-gray-400 w-1/4 flex justify-center">
              <InstagramLogo/>
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
}



function TiktokLogo() {
  return (
  <div className="flex items-center justify-center lg:w-1/4 rounded-lg w-full">
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
  <div className="flex items-center justify-center lg:w-1/4 rounded-lg w-full">
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
