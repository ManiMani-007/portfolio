import aboutimg from '../asset/about1.webp'


export default function About()
{
    const config={
        line1:'Hi, My name is M Manikandan. I am a full stackdeveloper. I built beautiful websites with React.js and tailwind',
        line2:'I am proficient in frontend skills  like Html , css, and java Scrpit  and i am also have the knowelge server side programming like java python ' ,
         line3:'In database side I have knowlage in sql and mysql'  


}



    return <section className=' flex  flex-col md:flex-row bg-primary px-5' id='about'>
        <div className='md:w-1/2 py-5'>
            <img  src={aboutimg}/>
        </div>
        <div className=' flex md:w-1/2 justify-center px-10'>
        <div className='flex flex-col justify-center text-white'>
        <h1 className='text-4xl border-b-4 border-[#2b2d77] mb-5 font-bold w-[170px]' >About me </h1>
            <p className='pb-6'>{config.line1} </p>
            <p className='pb-6'>{config.line2}</p>
            <p> {config.line3} </p> 
        </div>
            
        </div>
    </section>
}