import Image from "next/image";
import { Container } from "@/components/Container";
import bolera from "../../public/img/bolera.jpg";
import logoTiktok from "../../public/img/logos/logoTikTok.webp"
import logoInsta from "../../public/img/logos/logoInstagram.png";

export const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              BowlingTech new form to bowling
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Discover a new way to enjoy bowling with our advanced AI system, making every game interactive and personalized.
              Designed for everyone, Bowling AI Center is the perfect place for pros, friends, and families alike.
              Join the AI-powered bowling revolution today!
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="https://web3templates.com/templates/nextly-landing-page-template-for-startups"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md ">
                Discover
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2 rounded-lg">
          <div className="rounded-lg">
            <Image
              src={bolera}
              width="616"
              height="617"
              className={"object-cover rounded-lg"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
              
            />
          </div>
        </div>
      </Container>
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
    </>
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







