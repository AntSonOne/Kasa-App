import "./Tag.scss";

function Tag(props) {
  const tags = props.tags;
  return (
    <div className="tagsList">
      {tags.map((tag) => (
        <p className="tag">{tag}</p>
      ))}
    </div>
  );
}

export default Tag;
