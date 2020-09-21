export const isLoggedIn = (state) => {
    const admin = 'admin'
    const root = 'root'
    if (state.role === admin) {
        return 'admin'
    }
    if (state.role === root) {
        return 'admin'
    }
    else
        return 'user'
}

export const authStatus = (state) => {
    return state => state.status
}

export const checkNull = (state) => {
    return state.pet.petName == null ? '' : state.pet.petName
}



