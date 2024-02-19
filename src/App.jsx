import Navbar from "./components/Navbar";
import Section from "./components/Section";
export function App() {
  return (
    <>
      <Navbar />
      <Section section="hot" width={1480} image="./src/assets/hot.jpg" name="hot" />
      <Section section="juicy" width={1480} image="./src/assets/juicy.jpg" name="juicy" />
      <Section section="cosy" width={1480} image="./src/assets/cosy.jpg" name="cosy" />
    </>
  );
}
