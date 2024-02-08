import React from 'react'
import styled from 'styled-components'

// images 
import profileImg from '../../assets/images/Ellipse 4.png'
import replayProfileImg from '../../assets/images/Ellipse 6.png'

function CommentsSection(data) {

    const commentData = data.data
    const replays = commentData.replays

    console.log(commentData);

    

  return (
    <Card>
        <CommentContainer>
            <Comment>
                <TopContainer>
                    <ProfileContainer>
                        <ProfileImageContainer>
                            <ProfileImage src={commentData.commented_profile_picture}/>
                        </ProfileImageContainer>
                        <ProfileName>{commentData.comment_profile_name}</ProfileName>
                        <CommentedDate>{commentData.date}</CommentedDate>
                    </ProfileContainer>
                    <Options>
                        <span></span>
                        <span></span>
                        <span></span>
                    </Options>
                </TopContainer>
                <CommentText><span>{commentData.comment}</span><a className='replay-text'>Replay</a></CommentText>
            </Comment>
            {replays?
                replays.map((item)=>(
                    <CommentReplay>
                        <Comment>
                            <TopContainer>
                                <div className="lines"></div>
                                <ProfileContainer>
                                    <ProfileImageContainer>
                                        <ProfileImage src={item.replay_profile_picture}/>
                                    </ProfileImageContainer>
                                    <ProfileName>{item.replay_profile_name}</ProfileName>
                                    <CommentedDate>{item.date}</CommentedDate>
                                </ProfileContainer>
                                <Options>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </Options>
                            </TopContainer>
                            <CommentText>{item.replay}</CommentText>
                        </Comment>
                    </CommentReplay>
                ))
                :
                <div></div>
            }
        </CommentContainer>
    </Card>
  )
}

export default CommentsSection

const Card = styled.div`
    
`

const CommentContainer = styled.div``

const Comment = styled.div``

const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    div.lines{
        border-bottom: 2px;
        border-left: 2px;
        border-right: 0px;
        border-top: 0px;
        border-style: solid;
        border-color: #959595;
        position: absolute;
        width: 51px;
        height: 122px;
        left: -52px;
        top: -87px;
        border-radius: 0 0 0 20px;
    }
`

const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

const ProfileImageContainer = styled.div``

const ProfileImage = styled.img``

const ProfileName = styled.span`
    font-size: 22px;
    font-weight: 500;

`

const CommentedDate = styled.span`
    font-size: 14px;
    font-weight: 400;
    color: #666;
`

const Options = styled.div`
    span{
        display: block;
        background: #666;
        width: 4px;
        height: 4px;
        margin-bottom: 3px;
        border-radius: 50%;
    }
`

const CommentText = styled.p`
    background: #ECC8AE4D;
    padding: 30px 30px;
    margin-left: 80px;
    border-radius: 0 30px 30px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a{
        font-size: 14px;
        font-weight: 400;
        color: #CF796C;
    }

`

const CommentReplay = styled.div`
    margin-left: 80px;
    margin-top: 5px;
`


