import Image from "next/image";

import placeholder from "./assets/img/placeholder.webp"
import MainTechs from "./components/MainTechs/MainTechs";
import OtherTechs from "./components/OtherTechs/OtherTechs";


export default function Home() {
  return (
  <div className="container">
    {/* introduction */}
    <main>
      <div className="flex flex-col gap-8 lg:gap-0 justify-items-center lg:flex-row lg:justify-content-center">
        <div className="flex-1 flex flex-col gap-10 self-center px-4">
          <h1 className="text-7xl text-center text-accent-400">Hello World!</h1>
          <p className="text-2xl">My name is Anderson Caminha. I am a software developer. Insert some pretty long text here to see what happens.</p>
        </div>
        <div className="flex-1">
          <Image src={placeholder} alt={"Profile picture"} className="rounded-full size-96 mx-auto" />
        </div>
      </div>
    </main>

    {/* tech */}
    <section className="flex flex-col py-8 gap-8">
      <div>
        <MainTechs />
      </div>
      <div>
        <OtherTechs />
      </div>
    </section>

    {/* work experience */}
    <section className="flex flex-col py-8 gap-8">
      <div>
        <div className="flex justify-center">
          Work experience
        </div>
        <div>
          <li>Company 2</li>
          <li>Company 1</li>
        </div>
      </div>
    </section>

    {/* education */}
    <section className="flex flex-col">
      <div>
        <div className="flex justify-center">
          Education
        </div>
        <div>
          <li>Grad school (in progress)</li>
          <li>Bachelor</li>
        </div>
      </div>
    </section>
  </div>
  );
}
