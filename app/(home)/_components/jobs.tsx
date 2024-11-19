import prisma from '@/lib/db'
import React from 'react'

export async function Jobs(){
  const jobs = await prisma.jobPosts.findMany({
    take: 10,
    include: {
      noticePeriods: true,
      skills: true
    }
  })

  if(!jobs){
    throw new Error("Jobs Not Found!")
  }

  return (
    <section className='bg-black w-screen text-white p-8'>
        <span className='font-bold'>Hire</span>

        {jobs.map(jobPost => {
          return(
            <>
              <div className='border-spacing-2 rounded-sm mt-2 w-[70%] p-4 border-2 '>
                <div>Experience: {jobPost.experienceYear} year</div>
                <div>
                  Notice Periods: 
                  {jobPost.noticePeriods.map(np => <span key={np.id}>{np.title}</span>) || 0}
                </div>
                <div>Current CTC: {jobPost.CurrentCTC}</div>
                <div className='w-full h-[2px] bg-white my-2'></div>
                <div>Worked at: {jobPost.workedAt}</div> 
                <div>
                  <span>
                    {jobPost.description}
                  </span>
                </div>

                <div className='mt-4'>
                  {jobPost.skills.map(skill => <span className='font-semibold rounded-md bg-white text-black p-2' key={skill.id}>{skill.title}</span>)}
                </div>
              </div>
            </>
          )
        })}
    </section>
  )
}

export default Jobs