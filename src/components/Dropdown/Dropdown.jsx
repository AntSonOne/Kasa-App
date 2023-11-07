import "./Dropdown.scss";

function Dropdown(props) {
  const title = props.title;
  const description = props.description;

  return (
    <div>
      <h1
        onClick={function handleClick() {
          const description = document.getElementsByClassName(
            ".dropdownDescription"
          );
        }}
      >
        {title}
      </h1>
      <div className="dropdownDescription">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Dropdown;
