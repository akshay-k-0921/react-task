import React from 'react'
import styled from 'styled-components'

// images 
import mainImage from '../../assets/images/add_post.png'
import lines from '../../assets/images/Group 11.png'

function UploadImage() {
  return (
    <Container>
        <WrapperContainer className='wrapper'>
            <Card>
                <Button>Upload Images</Button>
                <LineImages>
                    <LineImage src={lines}/>
                </LineImages>
                <MainImageContainer>
                    <MainImage src={mainImage}/>
                </MainImageContainer>
                <SmallImageGroup>
                    <PinkDiv className='small-pink'></PinkDiv>
                    <WhiteSquare className='small'></WhiteSquare>
                </SmallImageGroup>
                <ImageGroup>
                    <PinkDiv className='big-pink'></PinkDiv>
                    <WhiteSquare className='big'></WhiteSquare>
                </ImageGroup>
            </Card>
        </WrapperContainer>
    </Container>
  )
}

export default UploadImage

const Container = styled.div``

const WrapperContainer = styled.div``

const Card = styled.div`
    box-shadow: 0px 0px 16px 0px #0000001A;
    border-radius: 20px;
    position: relative;
    height: 337px;
`

const Button = styled.a`
    background: #c08c5d;
    padding: 1% 15%;
    position: absolute;
    top: 45%;
    left: 28%;
    border-radius: 45px;
    font-size: 26px;
    font-weight: 600;
    color: #fff;
`

const LineImages = styled.div``

const LineImage = styled.img`
    position: absolute;
    width: 41px;
    height: 39px;
    top: 40%;
    right: 27%;
    border: 4px;
`

const MainImageContainer = styled.div`
    position: absolute;
    bottom: -10px;
    right: 3%;
    z-index: 1;
`

const MainImage = styled.img`
    width: 100%;
    display: block;
`

const SmallImageGroup = styled.div`
    position: absolute;
    bottom: 25px;
    left: 25px;
`

const ImageGroup = styled.div``

const PinkDiv = styled.div`
    /* position: absolute;
    width: 137px;
    height: 137px;
    top: 0px;
    right: 0px;
    border-radius: 30px; */
    &.big-pink{
        background: #C08C5D1A;
        position: absolute;
        width: 137px;
        height: 137px;
        top: 52px;
        right: 20px;
        border-radius: 30px;

    }
    &.small-pink{
        width: 103px;
        height: 103px;
        border-radius: 30px;
        background: #C08C5D1A;
    }
`

const WhiteSquare = styled.div`
    /* position: absolute; */
    width: 83px;
    height: 83px;
    /* top: 346px;
    left: 126px; */
    border-radius: 30px;
    border: 11px;
    &.small{
        position: absolute;
        width: 83px;
        height: 83px;
        bottom: 10px;
        left: 10px;
        border-radius: 30px;
        border: 11px solid #fff;
    }
    &.big{
        position: absolute;
        width: 111px;
        height: 111px;
        top: 64px;
        right: 31px;
        border-radius: 30px;
        border: 11px solid #fff;

    }
`
