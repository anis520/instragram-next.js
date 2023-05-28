import React from 'react'
import styles from './page.module.css'
import { MdDoNotStep, MdHome, MdMessage, MdMore, MdOutlineAddBox, MdOutlineExplore , MdOutlineMoreHoriz, MdPerson, MdSearch, MdVideoFile, MdViewHeadline } from "react-icons/md";
import { AiOutlineHeart } from 'react-icons/ai';
import { FiMessageCircle } from 'react-icons/fi';
import { BsBookmark, BsSend } from 'react-icons/bs';
import   img2 from '../../public/download.png'
import   img3 from '../../public/profile.jpg'
import   post2 from '../../public/post2.jpg'
import Image from'next/image'



const page = () => {
  return (
    <>
         
         <div className={styles.main}>
                  

          {/* left side  start*/}

             <div className={styles.leftside}>
                   
                 <p className={styles.logo}>
                      Instragram     
                       
                 </p>
                 <p><MdHome/> Home</p>
                 <p><MdSearch/> Search</p>
                 <p><MdOutlineExplore/> Explore</p>
                 <p><MdMessage/> Message</p>
                 <p><AiOutlineHeart/> Notification</p>
                 <p><MdOutlineAddBox/> Create</p>
                 <p><MdPerson/> Profile</p>
                 <p className={styles.more}><MdViewHeadline/> More</p>

 
             </div>
    


          {/* left side  end*/}


          {/* middle side  start*/}
       

             <div className={styles.middle}>

                       <div className={styles.story}>
                                  <div className={styles.story1}>
                                         <Image src={img2} />
                                         <p>Aoasd54</p>
                                  </div>
                                  <div className={styles.story1}>
                                         <Image src={img2} />
                                         <p>Aoasd54</p>
                                  </div>
                                  <div className={styles.story1}>
                                         <Image src={img2} />
                                         <p>Aoasd54</p>
                                  </div>
                                  <div className={styles.story1}>
                                         <Image src={img2} />
                                         <p>Aoasd54</p>
                                  </div>
                                  <div className={styles.story1}>
                                         <Image src={img2} />
                                         <p>Aoasd54</p>
                                  </div>
                                  <div className={styles.story1}>
                                         <Image src={img2} />
                                         <p>Aoasd54</p>
                                  </div>
                                  <div className={styles.story1}>
                                         <Image src={img2} />
                                         <p>Aoasd54</p>
                                  </div>
                                  <div className={styles.story1}>
                                         <Image src={img2} />
                                         <p>Aoasd54</p>
                                  </div>
                
                       </div>



                       {/* post start */}


                       <div className={styles.post}>

                                      <div>
                                            
                                               <div className={styles.header}>
                                                   <Image  src={img2}  />
                                                   <p>AnisAhad <span>. 2d</span></p>
                                                    <h6><MdOutlineMoreHoriz/></h6>
                                               </div>
                                               <div className={styles.body}>
                                                    <Image src={post2}  />
                                               </div>
                                               <div className={styles.footer}>
                                                   <div className={styles.icon}>

                                                      <AiOutlineHeart/>
                                                      <FiMessageCircle/>
                                                      <BsSend/>
                                                      <BsBookmark/>

                                                   </div>
                                                   <div className={styles.like}>
                                                     <p>45 likes</p>
                                                     <p>Good morning everyone</p>
                                                   </div>
                                                    <input type="text" placeholder='Add a comment...' name="" id="" />

                                               </div>

                                           <hr />
                                      </div>
                                      <div>
                                            
                                               <div className={styles.header}>
                                                   <Image  src={img2}  />
                                                   <p>AnisAhad <span>. 2d</span></p>
                                                    <h6><MdOutlineMoreHoriz/></h6>
                                               </div>
                                               <div className={styles.body}>
                                                    <Image src={post2}  />
                                               </div>
                                               <div className={styles.footer}>
                                                   <div className={styles.icon}>

                                                      <AiOutlineHeart/>
                                                      <FiMessageCircle/>
                                                      <BsSend/>
                                                      <BsBookmark/>

                                                   </div>
                                                   <div className={styles.like}>
                                                     <p>45 likes</p>
                                                     <p>Good morning everyone</p>
                                                   </div>
                                                    <input type="text" placeholder='Add a comment...' name="" id="" />

                                               </div>

                                           <hr />
                                      </div>
                                      <div>
                                            
                                               <div className={styles.header}>
                                                   <Image  src={img2}  />
                                                   <p>AnisAhad <span>. 2d</span></p>
                                                    <h6><MdOutlineMoreHoriz/></h6>
                                               </div>
                                               <div className={styles.body}>
                                                    <Image src={post2}  />
                                               </div>
                                               <div className={styles.footer}>
                                                   <div className={styles.icon}>

                                                      <AiOutlineHeart/>
                                                      <FiMessageCircle/>
                                                      <BsSend/>
                                                      <BsBookmark/>

                                                   </div>
                                                   <div className={styles.like}>
                                                     <p>45 likes</p>
                                                     <p>Good morning everyone</p>
                                                   </div>
                                                    <input type="text" placeholder='Add a comment...' name="" id="" />

                                               </div>

                                           <hr />
                                      </div>

                               
                         
                       </div>


                       {/* post end */}


                </div>

             
          {/* middle side  end*/}
         
         
          {/* right side  start*/}
 

                      <div className={styles.right}>

                             <div className={styles.profile}>

                                  <Image src={img3}  />
                                  <div>
                                    <p>anisahad2</p>
                                    <p>Anisul hoque</p>
                                  </div>
                                  <p>Switch</p>

                             </div>
                             <div className={styles.follow}>
                                 <p>Seggested for you <span>See All</span></p>
                                 <div className={styles.su}>
                                     <Image  src={img2} />
                                     <div>
                                      <p>md Fahim</p>
                                       <p>Suggest for you</p>
                                     </div>
                                     <p>
                                      Follow
                                     </p>
                                 </div>
                                 <div className={styles.su}>
                                     <Image  src={img2} />
                                     <div>
                                      <p>md Fahim</p>
                                       <p>Suggest for you</p>
                                     </div>
                                     <p>
                                      Follow
                                     </p>
                                 </div>
                                 <div className={styles.su}>
                                     <Image  src={img2} />
                                     <div>
                                      <p>md Fahim</p>
                                       <p>Suggest for you</p>
                                     </div>
                                     <p>
                                      Follow
                                     </p>
                                 </div>
                                 <div className={styles.su}>
                                     <Image  src={img2} />
                                     <div>
                                      <p>md Fahim</p>
                                       <p>Suggest for you</p>
                                     </div>
                                     <p>
                                      Follow
                                     </p>
                                 </div>

                             </div>


                      </div>


          {/* middle side  end*/}

        



         </div>
    
    
    </>
  )
}

export default page