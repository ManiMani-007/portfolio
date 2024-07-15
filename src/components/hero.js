import Heroimg from '../asset/hero.jpg';
import { AiOutlineTwitter,AiOutlineFacebook,AiOutlineLinkedin } from "react-icons/ai";



export default function Hero()
{
    const config={
        subtitle:'Im a full-stack developer and designer',
        social:{
            twitter:'http://twitter.com',
            fackbook:'http://facebook.com',
            linkedin:'http://linkedin.com'
        }
    }



    return<section className='flex flex-col md:flex-row px-5 py-32 bg-secondary justify-center' id='hero'>
        <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-white text-6xl font-hero-font'> HI, <br/> IAM <span className='text-black'>M</span>  MANIKANDAN
                    <p className='text-2xl'>{config.subtitle}</p>
             </h1>
                <div className='flex py-10'>
                      <a href={config.social.twitter} className='pr-5 hover:text-white'><AiOutlineTwitter size={40}/></a>
                         <a href={config.social.fackbook} className='pr-5  hover:text-white'><AiOutlineFacebook size={40} /></a>
                          <a href={config.social.linkedin} className='pr-5  hover:text-white'><AiOutlineLinkedin size={40}/></a>

                  </div>
        </div>
        <img  className='md:w-1/3'src={Heroimg} />
    </section>
}