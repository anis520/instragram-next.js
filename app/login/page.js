 import styles from './page.module.css'
 import Image from 'next/image'
 import { AiFillFacebook } from "react-icons/ai";
 import   img1 from '../../public/download (27).png'
 import   img2 from '../../public/download.png'
import Link from 'next/link';
export default function Home() {
  return (
    <>
    
    
      <div  className={styles.main}>
      <div  className={styles.body}>
                
                <h2>Instragram</h2>
                  <div className={styles.fb}><AiFillFacebook/><p>Log in with Facebook</p></div>
                 <div className={styles.or}><hr/><p>OR</p><hr/></div>
                 <div className={styles.input}>


                     <input type='text' placeholder='Phone Number , username or email'/>
                     <input type='password' placeholder='Password'/>
                     
                 </div>
                 
                 <div className={styles.button}>
                       <Link href={'home'}> <button>Login</button></Link>
                 </div>

                 


      </div>

      <div className={styles.login}>
           <p>I dont have account?<span> <Link href='/'>Sing up</Link></span></p>
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
