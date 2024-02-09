import React, { useEffect, useState } from 'react'

// components 
import CommentsSection from './CommentsSection'

// images 
import postImg from '../../assets/images/post1.jpg'
import likedProfiles from '../../assets/images/Group 4.png'
import plus from '../../assets/images/plus.png'
import styled from 'styled-components'
import PostModal from './PostModal'

function Posts(data) {

    const postData = data.data;
    const [isLiked, setLiked] = useState(postData.is_liked)
    // const isLiked = postData.is_liked
    const [commentData, setCommentData] = useState(postData.comments)
    const [isActive,setActive] = useState(false)
    const numberOfComments = commentData.length
    const [show, setShow] = useState(false);


    const handleModal = () => {
        setShow(!show);
    };

    const dropDown = () => {
        setActive(!isActive)
    }

    const handleLike = () => {
        setLiked(!isLiked)
    }    

    // useEffect(()=>{
    // },[postData.comments])

  return (
    <Container>
        <WrapperContainer className='wrapper'>
            <Card>
                <FirstContainer>
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
                </FirstContainer>
                <SecondContainer>
                    <Description>
                    {postData.description}
                    </Description>
                    <PlusContiner>
                        <PlusImage src={plus} />
                    </PlusContiner>
                </SecondContainer>
                <PostImageContainer onClick={handleModal}>
                    <PostImage src={postData.image}/>
                </PostImageContainer>
                <LikeAndComments>
                    <LikesContainer>
                        <LikesProfiles src={likedProfiles}/>
                        <LikesText>Liked by You and Srutheesh</LikesText>
                    </LikesContainer>
                    <CommentsContainer>
                        <CommentsText onClick={dropDown}>{numberOfComments} Comments</CommentsText>
                    </CommentsContainer>
                </LikeAndComments>
                <Buttons>
                    {
                        isLiked?
                        <LikeButton onClick={handleLike} className={isLiked?"liked":""}>Unlike</LikeButton>
                        :
                        <LikeButton onClick={handleLike} className={isLiked?"liked":""}>Like</LikeButton>
                    }
                    <CommentButton onClick={dropDown}>Comment</CommentButton>
                </Buttons>
                <div className={isActive?'active commetns':'commetns'}>
                    {
                        commentData&&isActive?
                        commentData.map((item)=>(
                            <CommentsSection data={item} isActive={isActive}/>
                        ))
                        :
                        <div></div>
                    }
                </div>
                
            </Card>
            {
                show?
                <PostModal
                    show={show}
                    setShow={setShow}
                    data={postData}
                    // setPostDetails={setPostDetails}
                    commentData={commentData}
                    setCommentData={setCommentData}
                    numberOfComments={numberOfComments}
                />
                :
                <div></div>
            }
        </WrapperContainer>
    </Container>
  )
}

export default Posts

const Container = styled.div`
    margin-top: 15px;
`

const WrapperContainer = styled.div``

const Card = styled.div`
    box-shadow: 0px 0px 16px 0px #0000001A;
    padding: 15px 15px;
    border-radius: 20px;
    div.commetns{
        height: 0;
    }
    div.active{
        height:auto;
        padding: 30px 100px 30px 30px;
        margin-top: 30px;
        background: #f9f9f9;
        border-radius: 40px;
    }
`

const FirstContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Profile = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    div.circle{
        /* padding: 1px; */
        border: 4px solid #C08C5D;
        border-radius: 50%;
        position: absolute;
        top: 1px;
        left: 1px;
        width: 85px;
        height: 85px;
    }
`

const ProfileImage = styled.img`
    display: block;
    width: 90px;
    /* margin: 0 auto;
        border-radius: 50%;
    border: 3px solid #C08C5D; */
`

const ProfileTextSpan = styled.span`
    display: inline-block;
`

const ProfileName = styled.span`
    display: block;
    font-size: 24px;
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
    font-size: 18px;
    font-weight: 400;
    border: 1px solid #CF796C;
    color: #CF796C;
    padding: 10px 15px;
    border-radius: 5px;
;

`

const SecondContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`

const Description = styled.p`
    font-size: 24px;
    font-weight: 400;
    color: #666;
`

const PlusContiner = styled.a`
    background: #485867;
    width: 50px;
    height: 50px;
    border-radius: 40px;
    display: flex;
    align-items: center;
`

const PlusImage = styled.img`
    display: block;
    margin: 0 auto;
`

const PostImageContainer = styled.div`
    width: 100%;
    margin-bottom: 5px;
`

const PostImage = styled.img`
    width: 100%;
    display: block;
`

const LikeAndComments = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
`

const LikesContainer = styled.div`
    display: flex;
    align-items: center;
`

const LikesProfiles = styled.img``

const LikesText = styled.span`
    color: #555;
    font-size: 18px;
    font-weight: 400;

`

const CommentsContainer = styled.div``

const CommentsText = styled.span`
    display: inline-block;
    color: #555;
    font-size: 18px;
    font-weight: 400;
    cursor: pointer;
`

const Buttons = styled.div``

const LikeButton = styled.a`
    border: 1px solid #CF796C;
    color: #CF796C;
    font-size: 25px;
    font-weight: 500;
    padding: 15px 50px;
    width: 49%;
    display: inline-block;
    margin-right: 20px;
    border-radius: 40px;
    text-align: center;
    &.liked{
        background: #CF796C;
        color: #fff;
    }
`

const CommentButton = styled.a`
    font-size: 25px;
    font-weight: 500;
    padding: 15px 50px;
    width: 49%;
    display: inline-block;
    background: #CF796C;
    border-radius: 40px;
    text-align: center;
    color: #fff;
`

