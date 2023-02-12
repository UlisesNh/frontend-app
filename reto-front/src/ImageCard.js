// componente para las imagenes
const ImageCard = ({ imageURL, description }) => (
    <div>
      <img src={imageURL} alt={description} />
      <p>{description}</p>
    </div>
  );

  export default ImageCard;