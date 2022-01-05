const GET_GROUP = 'groups/GET_GROUP';

const getGroup = (group) => ({
    type: GET_GROUP,
    group
})

const initialState = {}

export const getBreedGroups = () => async (dispatch) => {
    const response = await fetch('/api/groups/', {
        headers: {
            'Content-Type': 'application/json'
        },
    });

    if (response.ok) {
        const data = await response.json();
        if(data.errors) {
            return
        }
        dispatch(getGroup(data))

    }
    
}

export default function groupReducer(state = initialState, action) {
    switch (action.type) {
        case GET_GROUP:
            const groups = { ...state };
            action.group.groups.forEach((group) => {
                groups[group.id] = group
            })
            return groups
        default:
            return state
    }
}