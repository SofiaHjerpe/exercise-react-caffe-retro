import Navbar from "./components/Navbar";
import Section from "./components/Section";
import "./App.css";
export function App() {
  return (
    <>
      <Navbar />
      <section className="container">
        <Section section="hot" image="./src/assets/hot.jpg" name="hot" />
        <Section section="juicy" image="./src/assets/juicy.jpg" name="juicy" />
        <Section section="cosy" image="./src/assets/cosy.jpg" name="cosy" />
      </section>
    </>
  );
}
