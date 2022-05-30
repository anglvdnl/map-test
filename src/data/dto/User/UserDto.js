const UserDto = (isLogged, name, email, picture) => {
    return {
        isLogged: isLogged,
        name: name,
        email: email,
        picture: picture
    }
}

const DefaultUser = UserDto(false, '', '', '')

export { UserDto, DefaultUser }