import "./Section.css";
import Text from "./Text";

function Section(props) {
  if (props.section === "hot") {
    return (
      <>
        <main className="section-container">
          <h1 class="heading">Hot</h1>
          <div className="text-container">
            <Text text="Hot freshly ground black coffee or a cup of exquisite tea?" />
            <Text text="We give you that perfect cup every time." />
          </div>
          <img className="image" src={props.image} alt={props.name} />
        </main>
      </>
    );
  }
  if (props.section === "juicy") {
    return (
      <>
        <main className="section-container">
          <h1 className="heading">Juicy</h1>
          <div className="text-container">
            <Text text="Ripe fruit - freshly squeezed" />
            <Text text="It's as simple as that. Chunky and smooth - it's your choice." />
          </div>
          <img className="image" src={props.image} alt={props.name} />
        </main>
      </>
    );
  }
  if (props.section === "cosy") {
    return (
      <>
        <main className="section-container">
          <h1 class="heading">Cosy</h1>
          <div className="text-container">
            <Text text="Hang around. Enjoy the settings." />
            <Text text="Use our fast WiFi. Borrow a newspaper or a novel." />
          </div>
          <img className="image" src={props.image} alt={props.name} />
        </main>
      </>
    );
  }
}
export default Section;
