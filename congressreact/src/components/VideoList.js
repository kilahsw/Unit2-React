import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../congresslogo.png'
import './VideoList.css'

const showVideo = (video) => {

}
const VideoList = ({ videos }) => {
    console.log(videos)


    return (
        <div>
            <img className="logo" src={Logo} />
            {videos.map((ele, index) => {
                console.log(ele)
                return (

                    <a onClick={showVideo(ele)}> <img src={ele.pictures.sizes[0].link_with_play_button} /> </a>
                )
            })}


        </div>

    )
}

export default VideoList

    // < img className = "logo" src = { Logo } />
    // {
    //     videos.map((ele, index) => {
    //         console.log(ele)
    //         return (

    //             <p>{ele.name}</p>
    //         )
    //     })
    // }

/* <img className = "logo" src={Logo} />
            {videos.map((ele, index) => {
                console.log(ele.pictures.sizes[0])
                return (

                    <div></div>
                )
            })} */