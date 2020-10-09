# Project Overview

## Project Links

- [Unit2-React](https://github.com/kilahsw/Unit2-React)
- [add your deployment link]()

## Project Description

'CONGRESS: Legalize Dance' Videos. I produce a live dance show called CONGRESS, and the app I create will be a resource where users can play the video compilations for each of our Volumes. The home page will have a brief decription of CONGRESS and, when the user clicks a thumbnail video, it will display the full size video that the user can play. The page will also have the video's description which is a list of choreographers, the full CONGRESS description and production credits. There will be a button the user can click to go back to the home page. 

## API

Use this section to include info about the API you have chosen and a code snippet of the data that it returns and is required for your project. 


```
{data: {} }
```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [Wireframes](https://wireframepro.mockflow.com/view/M6cc7e221ab49683ae92aa5dff3f0f2991600053971849)
- [Architecture](https://docs.google.com/drawings/d/1eHNqMIDQF2ImviZ2lnJZRHTO0t3WvnpqmLAk3oUc0Yo/edit)


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 
- Third party API
- 5 components
- 2 routes
- Flexbox or Grid
- useState
- Netlify

#### PostMVP 

- n/a

## Components

| Component | Description | 
| --- | :---: |  
| App | This will pull in Vimeo data, and set up Router and Switches| 
| Home| This will hold my background photo as well as the CONGRESS logo and statment. I don't want a Nav in this design. The logo will be clickable.   | 
| VideoList | This will render the logo (clickable) and video thumbnails | 
| ShowVideo | This will render the selected video, allow it to be played, and have navigation buttons to get back to the video list and/or Home. | 
| Footer | This will just hold my company name. It'll render when you navigate to ShowVideo.| 


## Timeframe

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Components | H | 1hr| 1hrs | 1hr |
| Working with API | H | 6hrs| 8hrs | 8hrs |
| Page Functionality | H | 3hrs| 12hrs | 12hrs |
| Styling| H | 3hrs| 12hrs | 12hrs |
| Deploying | H | 1hrs| 3hrs | 3hrs |
| Total | H | 14hrs| 36hrs | 36hrs |

## Additional Libraries
 n/a

## Code Snippet

I was pretty proud of the fact that I figured out how to drill down to the thumbnails in my api...

`{videos.map((ele, index) => {
                console.log(ele)
                return (
                    <div id="thumbs">
                        <Link to={`/Show${ele.uri}`}> <img className='nails' src={ele.pictures.sizes[0].link_with_play_button} alt="thumbnails" /></Link>
                        <p className="p3">{ele.name}</p>
                    </div>
                )
            })}`

```
