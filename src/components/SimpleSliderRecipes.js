import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

function SimpleSliderRecipes({ recommendedCards }) {
  const history = useHistory();

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  const handleClick = (id) => {
    history.push(`/foods/${id}`);
  };

  return (
    <div className="margin-carousel p-1">
      <Slider { ...settings }>
        {
          recommendedCards && recommendedCards.map((card, index) => (
            <div key={ card.idMeal }>
              <Card
                key={ card.idMeal }
                data-testid={ `${index}-recomendation-card` }
                style={ { width: '8.5rem' } }
                className="card-title card-carousel"
                role="button"
                onClick={ () => handleClick(card.idMeal) }
              >
                <Card.Img
                  src={ card.strMealThumb }
                  alt={ `${card.strMeal} thumbnail` }
                  variant="top"
                  className="card-carousel-img"
                />
                <Card.Text
                  className="title title-align container-page"
                >
                  {card.strCategory}

                </Card.Text>
                <Card.Title
                  data-testid={ `${index}-recomendation-title` }
                  className="px-1 title-align"
                >
                  {card.strMeal}

                </Card.Title
                >
              </Card>
            </div>
          ))
        }
      </Slider>
    </div>
  );
}

SimpleSliderRecipes.propTypes = {
  recommendedCards: PropTypes.instanceOf(Array),
}.isRequired;

export default SimpleSliderRecipes;
