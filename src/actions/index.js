import Swal from 'sweetalert2'


var d = new Date();
var waktu = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes();

export const addTask = (data) => {
    const {title, description} = data;
    let ID = 1 + Math.random()
    Swal.fire({
        title: 'Task Berhasil Ditambahkan',
        icon: 'success',
        showConfirmButton: false,
        timer: 1500
    })
    return {
        type: 'ADDTASK',
        id: ID,
        title,
        status:0,
        description,
        createdAt: waktu
    };
}

export const delTask = (id) => {
    Swal.fire({
        title: 'berhasil terhapus',
        text: "You won't be able to revert this!",
        icon: 'success',
        showConfirmButton: false,
        timer: 1500
    })
            return {
                type: "DELTASK",
                id
            };
}

export const doneTask = (data) => {
    const { id, title, status, description, createdAt } = data;
    Swal.fire({
        title: 'GOOD JOB!',
        icon: 'success',
        showConfirmButton: false,
        timer: 1500
    })
    return {
        type: "DONETASK",
        id, 
        title, 
        status, 
        description, 
        createdAt
    }
}

export const cancelTask = (data) => {
    const { id, title, status, description, createdAt } = data;
    return {
        type: "CANCELTASK",
        id, 
        title, 
        status, 
        description, 
        createdAt
    }
}

export const updateTask = (data) => {
    const { id, title, status, description, createdAt } = data;
        return {
            type: "UPDATE",
            id,
            title, 
            status, 
            description, 
            createdAt
        }
    
    
    
}