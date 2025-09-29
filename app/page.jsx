import About from "./components/About";

import Hero from "./components/Hero";
import HowToBuy from "./components/HowToBuy";
import Listed from "./components/Listed";
import LiveChart from "./components/LiveChart";
import Tokenomics from "./components/Tokenomics";

export default function Home() {
  return (
    <>
      <Hero />

      <Listed />
      <About />
      <HowToBuy />
      <Tokenomics />
      <LiveChart />
      {/* <GalleryAsterboy /> */}
    </>
  );
}
