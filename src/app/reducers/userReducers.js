import { UserDto, DefaultUser } from '../../data/dto/User/UserDto'

const loginReducer = (state, action) => {
    const response = action.payload
    const loggedUser = UserDto(true, response.name, response.email, response.picture.data.url)
    localStorage.setItem("fbLoginToken", JSON.stringify(response));

    state.isLogged = loggedUser.isLogged
    state.name = loggedUser.name
    state.email = loggedUser.email
    state.picture = loggedUser.picture

    console.log("loginReducer")
}

const logoutReducer = (state, action) => {
    const unLoggedUser = DefaultUser

    state.isLogged = unLoggedUser.isLogged
    state.name = unLoggedUser.name
    state.email = unLoggedUser.email
    state.picture = unLoggedUser.picture

    window.FB.getLoginStatus(response => {
        if (response.status === "connected") {
            window.FB.logout();
        }
    });

    localStorage.removeItem("fbLoginToken")
}

export { loginReducer, logoutReducer }