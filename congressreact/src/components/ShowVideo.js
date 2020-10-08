import React from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactHtmlParser from 'react-html-parser';
import '../App.css'


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
        <div>
            {/* <iframe src="https://player.vimeo.com/video/304488848?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=190737" width="1920" height="1080" frameborder="0" allow="autoplay; fullscreen" allowfullscreen title="CONGRESS VOLUME I"></iframe> */}
            {ReactHtmlParser(html)}
            {/* {id} */}
            {description}
            <Link to="/List"><button>Back</button></Link>
        </div>
    )
}

export default ShowVideo