


const LOAD = "users/LOAD"
const SELECT = "users/SELECT"

const load = users => ({
    type: LOAD,
    payload: users
})

const select = user => ({
    type: SELECT,
    payload: user
})

export const getAllUsers = () => async dispatch => {
    const response = await fetch(`/api/users`);

    if (response.ok) {
        const list = await response.json();
        dispatch(load(list));
    }
}

export const getOneUser = (id) => async dispatch => {
    const response = await fetch(`/api/users/${id}`);

    if (response.ok) {
        const user = await response.json();
        dispatch(select(user));
    }
}

const initialState = {
    all: [],
    current: {}
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD: {
            const allUsers = {...state, all: [...action.payload]};
            action.payload.forEach(user => {
                allUsers[user.id] = user;
            });
            return allUsers;
        }
        case SELECT: {
            const user = { ...state, current: action.payload }
            return user
        }
        default:
            return state;
    }
}

export default usersReducer;
