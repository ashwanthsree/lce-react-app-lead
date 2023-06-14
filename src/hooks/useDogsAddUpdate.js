import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { DogsContext, DogActions } from '../DogsProvider';

export const useDogsAddUpdate = () => {
  const context = React.useContext(DogsContext);

  // if (!context) {
  //   throw new Error('usedogsContext must be used inside a dogsProvider');
  // }

  const { state, dispatch } = context;
  const { dogs } = state;

  const adddog = dog => {
    dog.id = uuidv4();
    dog.favortie = false;
    dispatch({ type: DogActions.ADD_DOG, payload: dog });
  };

  const markFavoritedog = id => {
    dispatch({ type: DogActions.MARK_DOG_FAVORITE, payload: { id } });
  };

  const showFavoritedogs = () => {
    dispatch({ type: DogActions.FAVORITE_DOGS, payload: {} });
  };

  return { dogs, adddog, markFavoritedog, showFavoritedogs };
};