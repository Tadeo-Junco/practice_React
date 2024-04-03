import "./BookItem.css";
import { Card } from "react-bootstrap";
import PropTypes from 'prop-types';//Importo el modulo, que ya esta instalado

const BookItem = ({ title, author, rating, pageCount, imageUrl }) => {
  return (
    <Card style={{ width: "22rem", marginTop: 23}} className="mx-3">

      <Card.Img
        height={400}
        variant="top"
        src={imageUrl !== "" ? imageUrl : "https://bit.ly/47NylZk"}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>{author}</Card.Subtitle>
        <div>{rating?.length} estrellas</div>
        <p>{pageCount} páginas</p>
      </Card.Body>
    </Card>
  );
};


BookItem.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  rating: PropTypes.array,
  pageCount: PropTypes.number,
  imageUrl: PropTypes.string
}; 

export default BookItem;
