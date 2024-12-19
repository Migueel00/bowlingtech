import Image from "next/image";
import { Container } from "@/components/Container";
import bolera from "../../public/img/bolera.jpg";


export const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-blue-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-blue-800">
              BowlingTech
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300 text-justify">
              En nuestra bolera, nos comprometemos a ofrecer un espacio accesible y divertido para todos.
              Usamos tecnologia avanzada para adaptar el juego a las necesidades de cada usuario, asegurando que tanto personas con discapacidad como cualquier
              jugador puedan disfrutar de una experiencia personalizada.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="https://web3templates.com/templates/nextly-landing-page-template-for-startups"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-cyan-600 rounded-md ">
                Descubre
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
    
    </>
  );
}







