import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../congresslogo.png'
import './VideoList.css'
import ShowVideo from './ShowVideo'




const VideoList = ({ videos }) => {
    console.log(videos)


    return (
        <div id="second">

            <div className="logo">
                <Link to="/">
                    <img src={Logo} alt='logo' style={{ width: '250px', height: '250px' }} /></Link>
            </div>
            <p className='p4'>Welcome to CONGRESS <br />We serve as a platform for dance artists of all genres to share their work in an intimate environment. <br />In each Volume we pose a question to our Artists which they explore and interpret through dance. <br /> How does it all come together? <br /> Click any thumbnail for the experience.</p>

            {videos.map((ele, index) => {
                console.log(ele)
                return (
                    <div id="thumbs">
                        <Link to={`/Show${ele.uri}`}> <img className='nails' src={ele.pictures.sizes[0].link_with_play_button} alt="thumbnails" /></Link>
                        <p className="p3">{ele.name}</p>
                    </div>
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



{/* <Link to='/Show/:id' component={ShowVideo} id={ele.uri} video={ele}> */ }
