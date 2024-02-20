import "./Text.css";
function Text(props) {
  return (
    <div className="red-box" style={{ marginInline: props.margin }}>
      <p className="box-text">
        {props.text}
      </p>
    </div>
  );
}
export default Text;
