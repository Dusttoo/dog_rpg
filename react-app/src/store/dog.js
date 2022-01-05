const GET_DOGS = "dogs/GET_DOGS";

const getdog = (dog) => ({
  type: GET_DOGS,
  dog,
});

const initialState = {};

export const getdogs = (owner_id) => async (dispatch) => {
  const response = await fetch(`/api/dogs/${owner_id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return;
    }
    dispatch(getdog(data));
  }
};

export default function dogReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DOGS:
      const dogs = { ...state };
      action.dog.dogs.forEach((dog) => {
        dogs[dog.id] = dog;
      });
      return dogs;
    default:
      return state;
  }
}
