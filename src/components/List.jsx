import "./List.css";

function List(props) {
  return (
    <div className="thirdbox">
      <ul className="list">
        <li>{props.listItemOne}</li>
        <li>{props.listItemTwo}</li>
        <li>{props.listItemThree}</li>
        <li>{props.listItemFour}</li>
      </ul>
      <ul className="list">
        <li>{props.secondListItemOne}</li>
        <li>{props.secondListItemTwo}</li>
        <li>{props.secondListItemThree}</li>
        <li>{props.secondListItemFour}</li>
      </ul>
    </div>
  );
}
export default List;
