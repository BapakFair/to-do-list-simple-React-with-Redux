import { combineReducers } from "redux"

let globalState = [{
    "id": 1,
    "title": "Make a meal",
    "description": "lorem ipsum",
    "status": 0,
    "createdAt": "2019-11-15 18:00"
}, {
    "id": 2,
    "title": "Dinner with family",
    "description": "lorem ipsum",
    "status": 0,
    "createdAt": "2019-11-16 18:00"
}, {
    "id": 3,
    "title": "Watch scary movie",
    "description": "lorem ipsum",
    "status": 0,
    "createdAt": "2019-11-15 13:00"
}, {
    "id": 4,
    "title": "Learn something new",
    "description": "lorem ipsum",
    "status": 1,
    "createdAt": "2019-11-15 08:00"
}, {
    "id": 5,
    "title": "Make a phone call to mom",
    "description": "lorem ipsum",
    "status": 1,
    "createdAt": "2019-11-15 04:00"
}]

const rootReducer = (state = globalState, action) => {
    switch (action.type) {
        case "ADDTASK":
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title,
                    status: action.status,
                    description: action.description,
                    createdAt: action.createdAt
                }
            ];
        case "DELTASK":
            return state.filter(task => task.id != action.id);
        case "DONETASK":
            return state = state.filter(task => task.id != action.id),
            [
                ...state,
                {
                    id: action.id,
                    title: action.title,
                    status: 1,
                    description: action.description,
                    createdAt: action.createdAt
                }
            ]
        case "CANCELTASK":
            return state = state.filter(task => task.id != action.id),
            [
                ...state,
                {
                    id: action.id,
                    title: action.title,
                    status: 0,
                    description: action.description,
                    createdAt: action.createdAt
                }
            ]
        case "UPDATE":
            return state = state.filter(task => task.id != action.id),
            [
                    ...state,
                    {
                        id: action.id,
                        title: action.title,
                        status: action.status,
                        description: action.description,
                        createdAt: action.createdAt
                    }
                ]
        default:
            return state;
    }
}

const Reducers = combineReducers({
    tasks : rootReducer
})

export default Reducers;