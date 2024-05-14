import React from "react";
import beach from "./beach.mp4"

export default function Confirmation() {
    return (
    <>
    <video src={beach} width="450" height="300" controls="controls" autoplay="true" />
    </>
    )
}
