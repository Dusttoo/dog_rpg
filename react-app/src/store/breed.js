const GET_BREEDS = "breeds/GET_BREEDS";

const getBreed = (breed) => ({
  type: GET_BREEDS,
  breed,
});

const initialState = {};

export const getBreeds = () => async (dispatch) => {
  const response = await fetch("/api/breeds/", {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return;
    }
    dispatch(getBreed(data));
  }
};

export default function breedReducer(state = initialState, action) {
  switch (action.type) {
    case GET_BREEDS:
      const breeds = { ...state };
      action.breed.breeds.forEach((breed) => {
        breeds[breed.id] = breed;
      });
      return breeds;
    default:
      return state;
  }
}
