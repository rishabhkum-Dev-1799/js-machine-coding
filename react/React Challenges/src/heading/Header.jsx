import React from 'react'
import {BsGithub} from 'react-icons/bs'

import styles from './Styles/Header.module.css'
import { GITHUB_URL } from '../constants/constants'

const Header = () => {
  return (
    <section className={styles.header}>
     <h1>React Machine Coding Questions</h1>
     <a href={GITHUB_URL} target='_blank'>
      <BsGithub size={30} color='white'/>
     </a>
    </section>
  )
}

export default Header