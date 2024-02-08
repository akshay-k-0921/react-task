import React, { useState } from 'react'
import styled from 'styled-components'

// images 
import logo from '../../assets/images/logo.png'
import profileImg from '../../assets/images/Ellipse 30.png'
import search from '../../assets/images/search.png'

function Header() {

    const [profile,setProfile] = useState({
        name: 'Asha Sunny',
        image: profileImg,
    })

  return (
    <Container>
        <WrapperContainer className="wrapper">
            <Head>
                <LogoContainer>
                    <LogoLink href='#'>
                        <Logo src={logo}/>
                    </LogoLink>
                </LogoContainer>
                <RightContainer>
                    <NavList>
                        <NavItems>
                            <SearchInput type='text' placeholder='Search...'/>
                        </NavItems>
                        <NavItems>
                            <NavLink className='profile-container'>
                                <ImageSpan>
                                    <ProfileImg src={profile.image}/>
                                </ImageSpan>
                                <TextSpan>{profile.name}</TextSpan>
                            </NavLink>
                        </NavItems>
                        <NavItems>
                            <NavLink>Logout</NavLink>
                        </NavItems>
                    </NavList>
                </RightContainer>
            </Head>
        </WrapperContainer>
    </Container>
  )
}

export default Header

const Container = styled.div`
    padding: 30px 0 10px;
`

const WrapperContainer = styled.div``

const Head = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const LogoContainer = styled.h1``

const LogoLink = styled.a``

const Logo = styled.img``

const RightContainer = styled.nav``

const NavList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
`

const NavItems = styled.li``

const SearchInput = styled.input`
    border: none;
    background: #f3f3f3;
    padding: 20px 25px;
    border-radius: 45px;
    &::placeholder{
        font-size: 18px;
        font-weight: 500;
        color: #DDDDDD;
    }
    /* &::after{
        content: ""; 
        display: block;
        width: 100px;
        height: 100px;
        background-image: url(${logo});
        background-size: cover;
    } */
`

const NavLink = styled.a`
    font-size: 20px;
    font-weight: 500;
    background: #e7ad99;
    padding: 15px 50px;
    border-radius: 48px;
    color: #FFF;
    &.profile-container{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 15px;
        background: #e7ad99;
        padding: 1px 25px 1px 1px;
        border-radius: 45px;
    }
`

const ImageSpan = styled.span`
    /* width: 20px; */
    display: inline-block;
`

const ProfileImg = styled.img`
    display: block;
    width: 100%;
`

const TextSpan = styled.span`
    /* color: #fff;
    font-size: 20px;
    font-weight: 500; */
`


