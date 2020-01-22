const globalState = [{
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
        case 'ADDTASK':
            return action.payload;
        default:
            return state;
    }
}

export default rootReducer;