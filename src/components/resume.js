import resumeimg from '../asset/resume.png'


export default function Resume()
{
      const res ={
        link:'https://pdfobject.com/pdf/sample.pdf'
      }



    return <section className=' flex  flex-col md:flex-row bg-primary px-5' id='resume'>
        <div className='md:w-1/2 py-5 flex justify-center md:justify-end'>
            <img  src={resumeimg}/>
        </div>
        <div className=' flex md:w-1/2 justify-center px-10'>
        <div className='flex flex-col justify-center text-white'>
        <h1 className='text-4xl border-b-4 border-[#2b2d77] mb-5 font-bold w-[135px]' >Resume </h1>
            <p className='pb-6'> you can view my resume<a className='button 'href={res.link}>DOWNLOAD</a></p>
        </div>
            
        </div>
    </section>
}