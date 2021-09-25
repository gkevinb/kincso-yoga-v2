import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Navigation from "../components/Navigation";

const img = "/img/yoga.jpg";

const bgImage = {
  backgroundImage: `url(${img})`,
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kincso Yoga </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navigation />
        <img id="kezdolap" src={img} alt="yoga" className="object-fill" />
        <div className="flex flex-col text-xl p-16 h-4/5 justify-center content-center text-center">
            <h2 className="mb-6 text-2xl">Rólam</h2>
            <p>
              Kovács Kincső vagyok, jógaoktató. 2020-ban szereztem oklevelet,
              hatha és hatha-flow jóga oktató lettem . Tovább szeretném bővíteni
              tudásom , de addig is már elkezdtem jóga órákat adni. Élőben és
              online is találkozhatsz velem, oraimat jellemzi a színes,
              harmonikus és hatékony módszertan , melyet úgy tudok alakítani ,
              ahogy a csoportom megkívánja . Nők, lányok, férfiak egyaránt részt
              vesznek az oraimon.
            </p>
          <div className="py-6">
            A jóga számomra kikapcsolódás, lecsendesedés és egyszerre dinamikus
            mozgás. Minden élethelyzetben segítség . Sosem késő elkezdeni ,
            mindenki meg tudja talalni a számára megfelelő stílust és oktatót .
          </div>
          <div className="py-6">
            Ha szeretnéd felvenni velem a kapcsolatot, keress a megadott
            elérhetőségeken Namaste, Kincső
          </div>
          <div className="py-6 text-center">
            <h2 className="mb-6 text-2xl">Kapcsolat</h2>
            <p>Kovács Kincső Sára </p>
            <a href="tel:+36706369104">+36-70-636-9104</a>
            <br/>
            <a href="mailto:kincsokovacs96@gmail.com">kincsokovacs96@gmail.com</a>
            <br />
            <a href="https://www.instagram.com/kincs.oyoga/">Instagram: kincs.o.yoga</a>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
