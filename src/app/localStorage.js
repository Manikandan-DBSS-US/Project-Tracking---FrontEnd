export const addUserToLocalStorage = user => {
    localStorage.setItem('user',JSON.stringify(user))
}

const getUserFromLocalStorage = () => {
    const result = localStorage.getItem('user');
    const user = result ? JSON.parse(result) : [];
    return user;
};


export {
    getUserFromLocalStorage
}