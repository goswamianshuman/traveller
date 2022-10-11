import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import { benefitOne } from "../components/data";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import ImageGrid from "../components/ImageGrid";
import Trip from "../components/Trip";
import Ride from "../components/Ride";
import Company from "../components/Company";

export default function Home() {
  return (
    <div>
      <Head>
        <title>heyllo.world</title>
        <meta name="description" content="Travel around the world" />
        <link rel="icon" href="/fav.svg" />
      </Head>

      <Navbar />
      <Hero />
      <section className="max-w-7xl mx-auto">
        <SectionTitle
          title=" Travel - Stress Free!"
          pretitle="Visiting a new place is fun, but sometimes can also be stressful - especially when
          you don’t know anyone local or don’t speak the language"
        >
          Heyllo helps you find a local host who can speak your language and
          help you with services you want
        </SectionTitle>
        <Benefits data={benefitOne} />
        <ImageGrid />
        <Trip />
        <Ride />
        <SectionTitle
          pretitle="Someone to Call"
          title="Don’t know anyone in a new city? No stress.."
        >
          Book a local who is available to call anytime you get stuck, or just
          need some advice
        </SectionTitle>

        <Company />
        <Cta />
        <Footer />
        <PopupWidget />
      </section>
    </div>
  );
}
