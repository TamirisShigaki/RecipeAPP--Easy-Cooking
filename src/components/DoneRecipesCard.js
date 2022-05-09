import PropTypes from 'prop-types';
import React from 'react';
import { toast } from 'react-toastify';
import { Link, useHistory } from 'react-router-dom';
import FavoriteBtnHorizontal from './FavoriteBtnHorizontal';
import shareBtnLogo from '../images/shareIcon.svg';

function DoneRecipesCard({ id, index, name, img, type, category,
  nationality, alcoholic, doneDate, tags }) {
  const history = useHistory();
  // const favoriteLocalStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));

  const handleShare = () => {
    toast.success('Link copied!');
    let textToCopy = window.location.href.replace('/done-recipes', '');
    if (type === 'food') {
      textToCopy += `/foods/${id}`;
    } else if (type === 'drink') {
      textToCopy += `/drinks/${id}`;
    }

    navigator.clipboard.writeText(textToCopy);
  };

  const handleClick = () => {
    if (type === 'food') {
      history.push(`/foods/${id}`);
    } else if (type === 'drink') {
      history.push(`/drinks/${id}`);
    }
  };

  return (
    <div>
      <input
        type="image"
        data-testid={ `${index}-horizontal-image` }
        alt={ name }
        src={ img }
        width="50%"
        onClick={ handleClick }
      />
      <Link
        to={ `/${type}s/${id}` }
        data-testid={ `${index}-horizontal-name` }
      >
        <p>{name}</p>
      </Link>

      <p data-testid={ `${index}-horizontal-top-text` }>
        {`${nationality} - ${category}`}
      </p>
      <p data-testid={ `${index}-horizontal-done-date` }>{doneDate}</p>
      <p data-testid={ `${index}-horizontal-top-text` }>{alcoholic}</p>
      {
        tags && tags.map((tag) => (
          <p key={ tag } data-testid={ `${index}-${tag}-horizontal-tag` }>
            {tag}
          </p>
        ))
      }
      <input
        type="image"
        data-testid={ `${index}-horizontal-share-btn` }
        onClick={ handleShare }
        src={ shareBtnLogo }
        alt="Share button"
      />
      <FavoriteBtnHorizontal
        index={ index }
        id={ id }
        type={ type }
        nationality={ nationality }
        category={ category }
        name={ name }
        image={ img }
        alcoholicOrNot={ alcoholic }
      />
    </div>
  );
}

DoneRecipesCard.propTypes = {
  index: PropTypes.number,
  img: PropTypes.string,
  title: PropTypes.string,
}.isRequired;

export default DoneRecipesCard;
