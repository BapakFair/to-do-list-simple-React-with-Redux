export const addTask = (data) => {
    return {
        type: 'ADDTASK',
        payload: data
    }
}