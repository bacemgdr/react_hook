import React from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Rating from '@mui/material/Rating';
import Badge from 'react-bootstrap/Badge';


function MovieCardView(props) {
  const movie = props.movie
  return (
    /* Movie Card */
    <Card bg="dark" className="movie-card">
      <img  className="card-img-top" src={movie.posterURL} alt="" />
      <Card.Body>
        <Card.Title className="text-success" >{movie.title}</Card.Title>
        <Card.Text className="description-color" >
      
              {movie.description}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
      <Stack direction="horizontal" gap={3}>
        
          <div className="p-2 ms-auto">
          <h6 >Rating</h6>
            <Badge bg="secondary">
              <Rating name="half-rating-read"  value= {movie.rating} precision={0.5} readOnly  />
            </Badge>
          </div>
        </Stack>
      </Card.Footer>
    </Card>
  );
}

export default MovieCardView;