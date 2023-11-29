import "./Dropdown.scss";

function Dropdown(props) {
  const title = props.title;
  const description = props.description;

  return (
    <div className="dropdown">
      <p onClick={() => displayDescription(description)}>{title}</p>
    </div>
  );
}

function displayDescription(description) {
  //TODO fix this
  console.log(description);
  return (
    <div>
      <p>{description}</p>
    </div>
  );
}

export default Dropdown;
