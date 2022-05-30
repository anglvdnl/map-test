import L from 'leaflet'

function getIcon(icon) {
    return L.icon({
        iconUrl: require("../../static/Icons/" + icon + ".png"),
        iconSize: 40,
    })
}

function getIconClicked(iconClicked) {
    return L.icon({
        iconUrl: require("../../static/Icons/" + iconClicked + ".png"),
        iconSize: 40
    })
}

export { getIcon, getIconClicked }