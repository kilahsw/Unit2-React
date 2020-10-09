import React from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactHtmlParser from 'react-html-parser';
import './ShowVideo.css'


const ShowVideo = (props) => {
    let html = ''
    let description = ''
    let { id } = useParams();
    if (props.video) {
        const video = props.video
        console.log(video)
        const show = video.find(ele => ele.uri === `/videos/${id}`)
        console.log(show.embed.html)
        html = show.embed.html
        description = show.description
    }


    console.log(html)
    return (
        <div id="third" style={{ width: '100%', height: '100%' }}>
            {ReactHtmlParser(html)}
            {/* {id} */}
            <p>CON GRESS = STEP TOGETHER</p>
            <Link to="/List"><button className='button1'>Step Back</button></Link>
            <Link to="/"><button classname='button2'>Step Home</button></Link>
        </div>
    )
}

export default ShowVideo