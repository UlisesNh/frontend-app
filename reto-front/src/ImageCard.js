// componente para las imagenes
import './ImageCard.css';

const ImageCard = ({ imageURL, description }) => (
    <div className="image-div">
      <img src={imageURL} alt={description} />
      <p>{description}</p>
    </div>
  );

  export default ImageCard;