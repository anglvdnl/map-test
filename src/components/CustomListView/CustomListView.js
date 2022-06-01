import React, { useState } from 'react'
import Status from '../Status/Status'
import classes from './CustomListView.module.scss'
import { BsBookmark } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri'
import AdditionalInfo from './AdditionalInfo';
import { CSSTransition } from 'react-transition-group';
import '../../index.scss'
import { SwitchTransition } from 'react-transition-group';

function CustomListView(props) {
    const [dropDown, setDropDown] = useState(false)

    return (
        <>
            <div onClick={() => setDropDown(!dropDown)} className={classes.Wrapper}>
                <div className={classes.Fsec}>
                    <img className={classes.Img} src={require(`../../static/Images/${props.listItem.popupImg + '.png'}`)} alt={`${props.listItem.tags}`} />
                    <div className={classes.Info}>
                        <div className={classes.Headers}>
                            <h3>{props.listItem.title}</h3>
                            <h4>Developer: <a href={props.listItem.developerUrl}> {props.listItem.developerName}</a></h4>
                        </div>
                        <div className={classes.Loc}>
                            <div>
                                <IoLocationOutline />
                                {props.listItem.location}
                            </div>
                            <span className={classes.Tag}>{props.listItem.tags}</span>
                        </div>
                    </div>
                </div>
                <div className={classes.Ssec}>
                    <div className={classes.Status}>
                        <Status status={props.listItem.status} />
                        <BsBookmark />
                    </div>
                    <div className={classes.Dropdown}>
                        {dropDown
                            ? <RiArrowDropUpLine />
                            : <RiArrowDropDownLine />
                        }
                    </div>
                </div>
            </div>
            {dropDown
                ? <AdditionalInfo setDropDown={setDropDown} dropDown={dropDown} listItem={props.listItem} />
                : null
            }
        </>
    )
}

export default CustomListView