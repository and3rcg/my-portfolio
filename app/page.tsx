import Image from "next/image";

import placeholder from "./assets/img/placeholder.webp"

export default function Home() {
  return (
  <div className="container">
    {/* introduction */}
    <main>
      <div className="flex justify-around py-8">
        <div>
          <h1>Hello World!</h1>
          <p>My name is Anderson Caminha. I am a software developer. Insert some pretty long text here to see what happens.</p>
        </div>
        <div>
          <Image src={placeholder} alt={"Profile picture"} width={360} height={360} className="rounded-full" />
        </div>
      </div>
    </main>

    {/* tech */}
    <section className="py-8">
      <div>
        <div className="flex justify-center">
          Main techs
        </div>
        <div className="flex gap-4 justify-around items-center">
          <li>Python</li>
          <li>Node</li>
          <li>Next.js</li>
          <li>Typescript</li>
          <li>Docker</li>
          <li>Redis</li>
          <li>PostgreSQL</li>
        </div>
      </div>
      <div>
        <div className="flex justify-center">
          Other techs
        </div>
        <div className="flex gap-4 justify-around items-center">
          <li>Go</li>
          <li>Svelte</li>
          <li>Kubernetes</li>
          <li>Google Cloud</li>
          <li>Grafana</li>
          <li>Prometheus</li>
        </div>
      </div>
    </section>

    {/* work experience */}
    <section className="py-8">
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
    <section className="py-8">
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
