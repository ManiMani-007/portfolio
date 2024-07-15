


export default function Contact()
{
   
    const config={

        email:' mani222mcm@gmail.com',
        phone:'7299674976'


    }



    return <section className=' flex  flex-col  bg-secondary px-5 py-32 text-white'id="contact">
        <div className='flex  flex-col items-center'>
        <h1 className='text-4xl border-b-4 border-[#2b2d77] mb-5 font-bold w-[135px]' >Contact </h1>
            <p className='pb-6'>If you  want  to discuss more in detail, please contact me</p>
            <p className='py-2'><span className='font-bold'>EMAIL:</span>{config.email}</p>
            <p className='py-2'><span className='font-bold'>PHONE:</span>{config.phone} </p>

        </div>
            

    </section>
}