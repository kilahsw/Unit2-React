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
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header include the nav | 
| Footer | This will render the header include the nav | 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

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
