import Link from "next/link";
import { GiPrayer } from "react-icons/gi";

export default function Home() {
  return (
    <div className="home-body">

      <section className="home-top">
        <h1>Igreja Assembleia do Araretama</h1>
        <h3>Nossa missão é compartilhar a mensagem transformadora do Evangelho com amor e humildade.</h3>
      </section>
      <section className="home-midle">
        <Link href="#" id="button-junte-se">Junte-se a nós.</Link>
      </section>
      <section className="home-botton">
        <p>Cada pessoa é valiosa aos olhos de Deus.</p>
        <p>Todos são bem-vindos, independentemente de sua história, origem ou situação.</p>
        <p>Vejam suas vidas refletirem o amor de Deus e impactar positivamente o mundo ao seu redor.</p>
        <GiPrayer id="praying"/>

      </section>

    </div>
  )
}
