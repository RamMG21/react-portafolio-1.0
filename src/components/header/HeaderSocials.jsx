import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaDev} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/feed/"><BsLinkedin /></a>
        <a href="https://www.linkedin.com/feed/"><BsGithub /></a>
        <a href="https://www.linkedin.com/feed/"><FaDev /></a>
    </div>
  )
}

export default HeaderSocials