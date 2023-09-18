import React, { useEffect, useState } from 'react';
import styles from './Styles/InfiniteScroll.module.css'

// Simple infinite scroll
const InfiniteScroll = () => {
 const [count, setCount] = useState(50);

 useEffect(() => {
  const Scroll=()=>{
   if(window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-30){
    setCount(prevValue=>prevValue+50);
   }
  }
  window.addEventListener('scroll', Scroll)
 }, [count])
 const elements = [];
 for (let i = 0; i < count; i++) {
  elements.push(<div key={i}>{i + 1}) Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores hic error quod quo.</div>)
 }
 return (
  <>
   <section className={styles.wrapper}>
    <div className={styles.heading}>
    <h1>Infinite Scroll</h1>
    </div>
    {elements}
   </section>
  </>
 )
}

export default InfiniteScroll