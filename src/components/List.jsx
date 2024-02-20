import "./List.css";

function List(props) {
  return (
    <div className="thirdbox">
      <div className="list">
        <p>{props.listItemOne}</p>
        <p>{props.listItemTwo}</p>
        <p>{props.listItemThree}</p>
        <p>{props.listItemFour}</p>
      </div>
      <div className="list">
        <p>{props.secondListItemOne}</p>
        <p>{props.secondListItemTwo}</p>
        <p>{props.secondListItemThree}</p>
        <p>{props.secondListItemFour}</p>
      </div>
    </div>
  );
}
export default List;
