import React from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactHtmlParser from 'react-html-parser';
import './ShowVideo.css'
import Footer from './Footer'


const ShowVideo = (props) => {
    let html = ''
    let { id } = useParams();
    if (props.video) {

        const video = props.video
        const show = video.find(ele => ele.uri === `/videos/${id}`)
        html = show.embed.html
    }

    return (
        <div id="third" style={{ width: '100%', height: '100%' }}>

            {ReactHtmlParser(html)}

            <p>CON GRESS = STEP TOGETHER</p>

            <Link to="/List"><button className='button1'>Step Back</button></Link>

            <Link to="/"><button className='button2'>Step Home</button></Link>

            <Footer />
        </div>
    )
}

export default ShowVideo