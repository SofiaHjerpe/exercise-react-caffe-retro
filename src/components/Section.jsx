import "./Section.css";
import Text from "./Text";
import List from "./List";

function Section(props) {
  if (props.section === "hot") {
    return (
      <>
        <main id="hot" className="section-container">
          <h1 class="heading">Hot</h1>
          <div className="text-container">
            <Text
              margin="0 200px"
              text="Hot freshly ground black coffee or a cup of exquisite tea?"
            />
            <Text margin="200px 0" text="We give you that perfect cup every time." />
            <List
              listItemOne="Mocha Latte"
              listItemTwo="Caffe Formaggio"
              listItemThree="Espresso"
              listItemFour="Chai Verde Latte"
              secondListItemOne="€ 7.50"
              secondListItemTwo="€ 5.00"
              secondListItemThree="€ 3.50"
              secondListItemFour="€ 5.50"
            />
          </div>
          <img className="image" src={props.image} alt={props.name} />
        </main>
      </>
    );
  }
  if (props.section === "juicy") {
    return (
      <>
        <main id="juicy" className="section-container">
          <h1 className="heading">Juicy</h1>
          <div className="text-container">
            <Text margin="0 200px" text="Ripe fruit - freshly squeezed" />
            <Text
              margin="200px 0"
              text="It's as simple as that. Chunky and smooth - it's your choice."
            />
            <List
              listItemOne="Branched Apricots"
              listItemTwo="Deep Rasberries"
              listItemThree="Smooth Oranges"
              listItemFour=""
              secondListItemOne="€ 4.20"
              secondListItemTwo="€ 3.50"
              secondListItemThree="€ 6.50"
              secondListItemFour=""
            />
          </div>
          <img className="image" src={props.image} alt={props.name} />
        </main>
      </>
    );
  }
  if (props.section === "cosy") {
    return (
      <>
        <main id="cosy" className="section-container">
          <h1 class="heading">Cosy</h1>
          <div className="text-container">
            <Text margin="0 200px" text="Hang around. Enjoy the settings." />
            <Text margin="200px 0" text="Use our fast WiFi. Borrow a newspaper or a novel." />
            <List
              listItemOne="Mon-Sun"
              listItemTwo="Caffe Retro"
              listItemThree="0123-45 67 89"
              listItemFour=""
              secondListItemOne="8am - 11pm"
              secondListItemTwo="Canto VI"
              secondListItemThree="caffe@lorem.pge"
              secondListItemFour=""
            />
          </div>
          <img className="image" src={props.image} alt={props.name} />
        </main>
      </>
    );
  }
}
export default Section;
