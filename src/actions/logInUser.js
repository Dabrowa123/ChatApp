export const logInUser = (id) => {
    return { 
            type: "LOG_IN_USER",
            payload: id
        }
}