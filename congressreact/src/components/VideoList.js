import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../congresslogo.png'
import ShowVideo from './ShowVideo'
import './VideoList.css'


const VideoList = ({ videos }) => {
    console.log(videos)


    return (
        <div>
            <img className="logo" src={Logo} />
            {videos.map((ele, index) => {
                console.log(ele)
                return (
                    <>
                    <Link to={`/Show${ele.uri}`}> <img src={ele.pictures.sizes[0].link_with_play_button}/></Link>

                    {/* <Link to='/Show/:id' component={ShowVideo} id={ele.uri} video={ele}> */}

                    {/* </Link> */}
                    </>
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

    // < Link to = {`'/Show'${ele.uri}`} video = { ele } >
    //     <img src={ele.pictures.sizes[0].link_with_play_button}
    //     />
    //                 </Link >