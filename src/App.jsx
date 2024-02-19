import Navbar from "./components/Navbar";
import Section from "./components/Section";
export function App() {
  return (
    <>
        <Navbar />
        <Section section="hot" image="./src/assets/hot.jpg" name="hot" />
        <Section section="juicy" image="./src/assets/juicy.jpg" name="juicy" />
        <Section section="cosy" image="./src/assets/cosy.jpg" name="cosy" />
    </>
  );
}
