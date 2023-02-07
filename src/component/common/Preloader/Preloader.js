import preloader from "../../../assets/image/preloader.svg";
import React from "react";
import Style from './Preloader.module.scss'

const Preloader = () => {
    return <div className={Style.box}>
        <img className={Style.preloader} src={preloader}/>
    </div>
}

export default Preloader
