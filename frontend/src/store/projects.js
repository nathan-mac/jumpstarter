


const LOAD = "projects/LOAD";
const SELECT = "projects/SELECT";

const load = projects => ({
    type: LOAD,
    payload: projects
})

const select = project => ({
    type: SELECT,
    payload: project
})

export const getAllProjects = () => async dispatch => {
    const response = await fetch(`/api/projects`);

    if (response.ok) {
        const list = await response.json();
        dispatch(load(list));
    }
}

export const getProjectDetail = (id) => async dispatch => {
    const response = await fetch(`/api/projects/${id}`);

    if (response.ok) {
        const data = await response.json();
        dispatch(select(data));
    }
}

const sortList = (list) => {
    return list.sort((projectA, projectB) => {
        return projectA.id - projectB.id;
    }).map((project) => project.id);
};

const initialState = {
    all: [],
    current: {}
}

const projectsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD: {
            const allProjects = {...state, all: [...action.payload]};
            action.payload.forEach(project => {
                allProjects[project.id] = project;
            });
            return allProjects;
        }
        case SELECT: {
            const project = {...state, current: action.payload};
            return project;
        }
        default:
            return state;
    }
}

export default projectsReducer;
