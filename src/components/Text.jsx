import "./Text.css";
function Text(props) {
  return (
    <div className="red-box">
      <p className="box-text">{props.text}</p>
    </div>
  );
}
export default Text;
