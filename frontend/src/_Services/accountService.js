


let saveToken = (token) => {
    localStorage.setItem('token', token)
}


let logout = () => {
    localStorage.removeItem('token')
}


let islogged = () => {
    let token = localStorage.getItem('token')
    console.log(token)
    return !!token
}

export const accountService = {
    saveToken, logout, islogged
}