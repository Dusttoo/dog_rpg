const GET_KENNEL = 'kennel/GET_KENNEL';

const getKennel = (kennel) => ({
    type: GET_KENNEL,
    kennel
})

const initialState = {};

export const getUserKennel = (userId) => async (dispatch) => {
    const response = await fetch(`/api/kennel/${userId}`, {
        headers: {
            'Content-Type': 'application/json'
        },
    });

    if (response.ok) {
        const data = await response.json();
        if(data.errors) {
            return
        }

        dispatch(getKennel(data))
    }
}

export default function kennelReducer(state = initialState, action) {
    switch (action.type) {
        case GET_KENNEL:
            return {kennel: action.kennel}
        default: 
            return state;
    }
}