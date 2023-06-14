import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const initialDogs = [
  {
    id: uuidv4(),
    title: 'Black Labrador',
    year: 2015,
    favorite: false,
  },
  {
    id: uuidv4(),
    title: 'Doberman',
    year: 2015,
    favorite: false,
  },
]

export const DogActions = {
  ADD_DOG: 'ADD_DOG',
  MARK_DOG_FAVORITE : 'MARK_DOG_FAVORITE',
  FAVORITE_DOGS : 'FAVORITE_DOGS',
}

const dogsReducer = (state, action) => {
  switch (action.type) {
    case DogActions.ADD_DOG: {
      const dogs = [action.payload, ...state.dogs];
      return {
        ...state,
        dogs,
      };
    }
    case DogActions.MARK_DOG_FAVORITE: {
      const dogs = state.dogs.map(dog => {
        if (dog.id === action.payload.id) {
          return { ...dog, favorite: !dog.favorite };
        }

        return dog;
      });

      return {
        ...state,
        dogs,
      };
    }
    case DogActions.FAVORITE_DOGS: {
      const dogs = state.dogs.map(dog => {
        if (dog.favorite) {return dog} ;
        return dog;
      });

      return {
        ...state,
        dogs,
      };
    }

    default:
      throw new Error(`Action is not supported: ${action.type}`);
  }
};

const initialState = {
  dogs: initialDogs,
};

export const DogsContext = React.createContext();

export const DogsProvider = props => {
  const [state, dispatch] = React.useReducer(dogsReducer, initialState);

  const value = React.useMemo(() => ({ state, dispatch }), [state]);

  return <DogsContext.Provider value={value} {...props} />;
};