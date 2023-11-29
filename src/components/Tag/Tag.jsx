import "./Tag.scss";

function Tag(props) {
  const tag = props.tag;

  return (
    <div className="tagsList">
      <p className="tag">{tag}</p>
    </div>
  );
}

export default Tag;
