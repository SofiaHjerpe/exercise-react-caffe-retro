import "./Text.css";
function Text(props) {
  return (
    <section className="red-box" style={{ marginInline: props.margin }}>
      <p className="box-text">
        {props.text}
      </p>
    </section>
  );
}
export default Text;
