import "./Carousel.scss";

function Carousel(props) {
  const pictures = props.pictures;
  return (
    <div className="carousel">
      <img src={pictures[0]} alt="Appartement" />
      {/* TODO 
      pictures.map((picture) => <img src={picture} alt="Appartement" /> */}
    </div>
  );
}

export default Carousel;
