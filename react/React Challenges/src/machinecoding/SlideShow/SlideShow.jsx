import React, { useState } from 'react';

import styles from './Styles/SlideShow.module.css'
import { imageData } from './image-data/Data';

const SlideShow = () => {
 const [activeSlide,setActiveSlide]=useState(0);

 // function handlers
 const previousHandler=()=>{
  if(activeSlide>0){
   setActiveSlide((prevValue)=>prevValue-1);
  }
  else{
   setActiveSlide(imageData.length-1)
  }
 }
 const nextHandler=()=>{
  if(activeSlide<imageData.length-1){
   setActiveSlide((prevValue)=>prevValue+1);
  }
  else{
   setActiveSlide(0)
  }
 }
 return (
  <section className={styles.container}>
   <h1 className={styles.heading}>Banner Carousel</h1>
   {
    imageData && imageData.map((image, index) => (
     <section key={index} className={`${styles['img-wrapper']} ${activeSlide===index ? styles['visible']:''}`}>
      <img src={image.imageUrl} alt='slide_images' key={image.id} />
     </section>
    ))
   }
   <div className={styles['navigation-dots-cont']}>
    {imageData && imageData.map((data,index)=>(
     <div className={`${styles['navigation-dots']} ${activeSlide===index ? styles['navigation-dot-active']:''}`} onClick={()=>setActiveSlide(index)}>
     </div>
    ))}
   </div>
   <div className={styles['next-prev-navigation']}>
    <div className={`${styles['nav-icons']} ${styles['left']}`} onClick={previousHandler}>{`<`}</div>
    <div className={`${styles['nav-icons']} ${styles['right']}`} onClick={nextHandler}>{`>`}</div>
   </div>
  </section>
 )
}

export default SlideShow