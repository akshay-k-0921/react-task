import React, { useState } from 'react'
import styled from 'styled-components'

// components 
import CommentSectionTwo from './CommentSectionTwo'

// images 
import profileImg from '../../assets/images/Ellipse 30.png'
import recentOne from '../../assets/images/recent1.jpg'
import recentTwo from '../../assets/images/recent2.jpg'
import recentThree from '../../assets/images/recent3.jpg'
import paperFlight from '../../assets/images/paper_flight.png'
import closeIcon from '../../assets/images/close.png'


function PostModal({show,setShow,data,commentData,setCommentData}) {

    const numberOfComments = commentData.length
    const postData = data;
    const [tempComment, setTempComment] = useState("")
    const [error, setError] = useState("")
    const [recentImages, SetRecentImages] = useState([
        {
            'id':1,
            'image':recentOne,
        },
        {
            'id':2,
            'image':recentTwo,
        },
        {
            'id':3,
            'image':recentThree,
        },
    ])
    const [profile,setProfile] = useState({
        name: 'Asha Sunny',
        image: profileImg,
    })

    const handleSubmit = (e) =>{
        setError('')
        e.preventDefault();
        console.log(e.target.value);
        if (tempComment) {
            setCommentData([...commentData,{
                'comment_id':numberOfComments+1,
                'commented_profile_picture' : profile.image,
                'comment_profile_name' : profile.name,
                'date' : '1 Week ago',
                'comment': tempComment,
            }])
            setTempComment("")
        }
        else{
            setError("Please enter the comment first")
        }
        
    }

  return (
    <Card>
        {show ? (
                <Overlay style={{ display: show ? "block" : "none" }}></Overlay>
            ) : (
                ""
            )}
        <Container style={{ transform: show && "scale(1,1)" }}>
            <Modal>
                <TopContainer>
                    <ImageContainer>
                        <PostImage src={postData.image}/>
                    </ImageContainer>

                    <RightContainer>
                        <ProfileContainer>
                            <Profile>
                                <div className="circle"></div>
                                <ProfileImage src={postData.account_details.profile_image}/>
                                <ProfileTextSpan>
                                    <ProfileName>{postData.account_details.name}</ProfileName>
                                    <PostedDate>2 Days ago</PostedDate>
                                </ProfileTextSpan>
                            </Profile>
                            <ReportContainer>
                                <ReportButton>Report</ReportButton>
                            </ReportContainer>
                            <div className="close" onClick={() => setShow((prev) => !prev)}>
                                <img src={closeIcon} alt="Close" className="close-image" />
                            </div>
                        </ProfileContainer>

                        <Buttons>
                            <LikeButton>Like</LikeButton>
                            <CommentButton>Comment</CommentButton>
                        </Buttons>
                        
                        <CommentsContainer>
                            <div className="comments">
                            {
                                commentData.map((item)=>(
                                    <CommentSectionTwo data={item}/>
                                ))
                            }
                            </div>
                            <InputContainer>
                                    <ProfileImage className='input-image' src={postData.account_details.profile_image}/>
                                <CommentInput type='text' placeholder='Write a comment...' value={tempComment} onChange={(e)=> setTempComment(e.target.value)}/>
                                <button className="flight" onClick={(e)=>handleSubmit(e)}>
                                    <img src={paperFlight} alt="" className="paper-flight" />
                                </button>
                            </InputContainer>
                            <p className='error'>{error}</p>
                        </CommentsContainer>
                    </RightContainer>
                </TopContainer>
                <BottomContainer>
                    <Title>Latest Images</Title>
                    <RecentContainer>
                        {
                            recentImages.map((item) => (
                                <RecentImageContainer key={item.id}>
                                    <RecentImage src={item.image}/>
                                </RecentImageContainer>
                            ))
                        }
                        
                    </RecentContainer>
                </BottomContainer>
            </Modal>
        </Container>
    </Card>
  )
}

export default PostModal

const Card = styled.div`
    overflow-y: scroll;
`

const Overlay = styled.div`
    background: rgba(0, 0, 0, 0.2);
    /* backdrop-filter: blur(2px); */
    position: fixed;
    z-index: 10;
    left: 0;
    top: 0px;
    width: 100%;
    z-index: 1000;
    min-height: 100vh;
    max-height: 100vh;
    /* filter: blur(1px); */
`

const Container = styled.div`
    position: fixed;
    transition: 0.3s;
    transform: scale(0, 0);
    width: 100%;
    height: 100vh;
    z-index: 1000;
    left: 0;
    top: 0px;
`

const Modal = styled.div`
    width: 85%;
    max-height: 95vh;
    padding: 20px 70px 20px 20px;
    margin: 0 auto;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    transition: 0.5s;
    z-index: 101;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0px 3px 56px #00000048;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        display: none;
    }
    `

const TopContainer = styled.div`
    display: flex;
    gap: 20px;
`

const ImageContainer = styled.div`
    width: 49%;
    overflow: hidden;
    position: relative;
`

const PostImage = styled.img`
    position: absolute;
    top: 0;
    border-radius: 10px 0 0 10px;
    left: -52%;
`

const RightContainer = styled.div`
    width: 49%;
`

const ProfileContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #cfcfcf;
    margin-bottom: 15px;
    position: relative;
    div.close{
        background: #b4b4b4;
        position: absolute;
        right: -73px;
        top: -20px;
        border-radius: 0px 0px 0px 25px;
    }
`

const Profile = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`

const ProfileImage = styled.img`
    &.input-image{
        width: 50px;
        height: 50px;
    }
`

const ProfileTextSpan = styled.span``

const ProfileName = styled.span`
    display: block;
    font-size: 20px;
    font-weight: 500;
`

const PostedDate = styled.span`
    display: block;
    font-size: 14px;
    font-weight: 400;
    color: #b3b3b3;
`

const ReportContainer = styled.div``

const ReportButton = styled.a`
    font-size: 14px;
    font-weight: 400;
    border: 1px solid #CF796C;
    color: #CF796C;
    padding: 8px 15px;
    border-radius: 5px;
`

const Buttons = styled.div`
    display: flex;
    align-items: center;
`

const LikeButton = styled.a`
    border: 1px solid #CF796C;
    color: #CF796C;
    font-size: 25px;
    font-weight: 500;
    padding: 10px 50px;
    width: 49%;
    display: inline-block;
    margin-right: 20px;
    border-radius: 40px;
    text-align: center;
`

const CommentButton = styled.a`
    font-size: 25px;
    font-weight: 500;
    padding: 10px 50px;
    width: 49%;
    display: inline-block;
    background: #CF796C;
    border-radius: 40px;
    text-align: center;
    color: #fff;
`

const CommentsContainer = styled.div`
    padding: 30px 100px 30px 30px;
    margin-top: 30px;
    background: #f9f9f9;
    border-radius: 40px;
    /* width: 510px; */
    div.comments{
        max-height: 300px;
        overflow-y: scroll;
        &::-webkit-scrollbar{
            display: none;
        }
    }
    p.error{
        color: red;
        font-size: 14px;
    }
`

const InputContainer = styled.form`
    width: 463px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    background: #ECC8AE4D;
    margin-top: 5%;
    button.flight{
        border: none;
        background: transparent;
    }
`
const CommentInput = styled.input`
    width: 80%;
    height: 50px;
    background: transparent;
    border: none;
    &::placeholder{
        font-size: 14px;
        font-weight: 400;

    }
    &:focus{
        border: none;
        outline: none;
    }
`

const BottomContainer = styled.div`
    margin-top: 50px;
`

const Title = styled.h3`
    margin-bottom: 5px;
    font-size: 20px;
    font-weight: 500;

`

const RecentContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const RecentImageContainer = styled.div`
    width: 32%;
`

const RecentImage = styled.img`
    width: 100%;
    display: block;
`

