import React, { useState } from 'react'

// components 
import Header from './includes/Header'
import UploadImage from './includes/UploadImage'
import Posts from './includes/Posts'

// images 
import profilePicture from '../assets/images/Ellipse 6.png'
import profilePictureTwo from '../assets/images/Ellipse 2.png'
import postImg from '../assets/images/post1.jpg'
import postImgTwo from '../assets/images/post2.jpg'
import commentProfileImg from '../assets/images/Ellipse 4.png'
import commentProfileImgTwo from '../assets/images/Ellipse 12.png'
import replayProfileImg from '../assets/images/Ellipse 6.png'

function MainContainer() {

    const [postDetails, setPostDetails] = useState([
        {
            'id' : 1,
            'image' : postImg,
            'description' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            'account_details' : {
                'name' : 'Anitta K C',
                'profile_image': profilePicture,
            },
            'likes' : 3,
            'comments' :[
                {
                    'comment_id':1,
                    'commented_profile_picture' : commentProfileImg,
                    'comment_profile_name' : 'Srutheesh',
                    'date' : '1 Week ago',
                    'comment': 'Nice Images....Good Work',
                    'replays' : [
                        {
                            'replay_id' : 1,
                            'replay_profile_name' : 'Anitta K C',
                            'replay_profile_picture' : replayProfileImg,
                            'date' : '1 Week ago',
                            'replay': 'Thankuu....',
                        }
                    ]
                },
                {
                    'comment_id':2,
                    'commented_profile_picture' : commentProfileImgTwo,
                    'comment_profile_name' : 'Simi K Sunny',
                    'comment': 'Nice Work....',
                    'date' : '1 Week ago',
                    'replays' : [
                        
                    ] 
                }
            ]
            
        },
        {
            'id' : 2,
            'image' : postImgTwo,
            'description' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            'account_details' : {
                'name' : 'Paul K P',
                'profile_image': profilePictureTwo,
            },
            'likes' : 3,
            'comments' :[
                {
                    'comment_id':1,
                    'commented_profile_picture' : commentProfileImg,
                    'comment_profile_name' : 'Srutheesh',
                    'date' : '1 Week ago',
                    'comment': 'Nice Images....Good Work',
                    'replays' : [
                        {
                            'replay_id' : 1,
                            'replay_profile_name' : 'Anitta K C',
                            'replay_profile_picture' : replayProfileImg,
                            'date' : '1 Week ago',
                            'replay': 'Thankuu....',
                        }
                    ]
                },
                {
                    'comment_id':2,
                    'commented_profile_picture' : commentProfileImgTwo,
                    'comment_profile_name' : 'Simi K Sunny',
                    'comment': 'Nice Work....',
                    'date' : '1 Week ago',
                    'replays' : [
                        
                    ] 
                }
            ]
            
        },
    ])

  return (
    <>
        <Header />
        <UploadImage />
        {
            postDetails.map((data) => (
                <Posts data={data} />
            ))
        }
        
    </>
  )
}

export default MainContainer