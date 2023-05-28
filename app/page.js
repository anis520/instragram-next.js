 import styles from './page.module.css'
 import Image from 'next/image'
 import { AiFillFacebook } from "react-icons/ai";
 import   img1 from '../public/download (27).png'
 import   img2 from '../public/download.png'
import Link from 'next/link';
export default function Home() {
  return (
    <>
    
    
      <div  className={styles.main}>
      <div  className={styles.body}>
                
                <h2>Instragram</h2>
                 <h4>Sign up to see photos and videos <br/> from your friends.</h4>
                 <div className={styles.fb}><AiFillFacebook/><p>Log in with Facebook</p></div>
                 <div className={styles.or}><hr/><p>OR</p><hr/></div>
                 <div className={styles.input}>


                     <input type='text' placeholder='Mobile Number or Email'/>
                     <input type='text' placeholder='Full Name'/>
                     <input type='text' placeholder='Username'/>
                     <input type='password' placeholder='Password'/>

                 </div>
                 <div className={styles.text}>
                  <p>People who use our service may have uploaded your contact information to Instagram. <span>Learn More</span></p>
                  <p>By signing up, you agree to our Terms , Privacy Policy and <span>Cookies Policy</span></p>
                 </div>
                 <div className={styles.button}>
                       <button>Sing up</button>
                 </div>

                 


      </div>

      <div className={styles.login}>
           <p>Have an account?<span> <Link href={'/login'}>Log in</Link></span></p>
      </div>


      <div className={styles.app}>
            <p>Get the app.</p>
            <div>
              <Image src={img1}/>
              <Image src={img2}/>
 
            </div>

      </div>


      </div>

    
    
    
    </>
  )
}
