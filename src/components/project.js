import websiteimg1 from '../asset/project1.png'
import websiteimg2 from '../asset/project2.jpg'
export default function Project()
{
  const my={
    Pro :[
        {
        Image :websiteimg1 ,
        description:'this is my first project by using  spring boot and mysql',
        link:' https://github.com/ManiMani-007/portfolio'
        },
       {
        Image :websiteimg2 ,
        description:'this is my second program which is on the process soon i would ready to  on porcessingthis is my second program which is on the process soon i would ready to  on porcessing',
        link:'https://github.com/jvlcode/food'
        }
]
}
      return <section className="flex flex-col px-5 py-20 justify-center bg-secondary" id='project'>
        <div className="w-full text-white">
             <div className="flex  flex-col px-10 py-5">
                    <h1 className='text-4xl border-b-4 border-[#2b2d77] mb-5 font-bold w-[170px]' >PROJECTS </h1>
                  <p>these are some of my best projects  i have built these with react  js and tilewind css check them out</p>
            </div>
      </div>
 
        <div className="w-full">
            <div className='flex  flex-col md:flex-row px-10 gap-5'> 

               { my.Pro.map((proj)=>(
                <a href={proj.link}>
                 <div className='relative'>
                    <img className=' h-[400px] w-[600px]' src={proj.Image}/>
                    <div className='project-desc'>
                        <p className='text-center py-5'>{proj.description}</p>
                        <div className='flex justify-center'>
                          <a  className='button' target='_blank'href={proj.link}>VIEW PROJECT</a>
                     </div>
                  </div>
                     
            </div>
            </a>
    ))}
              
           </div>
        </div>
    </section>
}