import { StatusType } from './statusType.tsx'
import inDevImg from '../../static/Images/indev.png'
import opImg from '../../static/Images/op.png'
import closedImg from '../../static/Images/closed.png'

export function getImgByStatus(status) {
    function buildTagByStatus(status) {
        return status === StatusType.InDevelopment
            ? getDevelopmentTag()
            : status === StatusType.Operational
                ? getOperatingTag()
                : status === StatusType.Closed
                    ? getClosedTag()
                    : getEmptyTag()
    }

    const getDevelopmentTag = () => inDevImg;
    const getOperatingTag = () => opImg;
    const getClosedTag = () => closedImg;
    const getEmptyTag = () => null;

    return buildTagByStatus(status)
}

export function getTextByStatus(status) {
    function buildTagByStatus(status) {
        return status === StatusType.InDevelopment
            ? getDevelopmentTag()
            : status === StatusType.Operational
                ? getOperatingTag()
                : status === StatusType.Closed
                    ? getClosedTag()
                    : getEmptyTag()
    }

    const getDevelopmentTag = () => "In Development";
    const getOperatingTag = () => "Operation";
    const getClosedTag = () => "Closed";
    const getEmptyTag = () => "";

    return buildTagByStatus(status)
}