import { Button } from '@/components/ui/button'
import { Star } from 'lucide-react'
import React from 'react'

const Banner = () => {
  return (
    <header className='grid place-items-center items-center gap-4 min-h-[450px] w-screen'>
        <div className='max-w-[70%] text-center grid place-items-center gap-4'>
            <h1 className="text-5xl text-center">Hire .NET Developers: Affordable, Dedicated .NET Experts in 72 hours</h1>

            <h2 className='text-center'>Hire .NET developers to enhance your projects efficiency and productivity. Build dynamic web applications using ASP.NET, C#, Entity Framework, and MVC.</h2>
            <h4 className='text-center'>ccess 100+ expert NET developers, engineers and architects from Flexiple, handpicked through a 5-hour evaluation process.</h4>
            <Button variant={"secondary"} className='max-w-max'>
            Hire Dream Developers
            </Button>
            
            <div className='mt-4 flex items-center gap-4'><Star /><Star /><Star /><Star /><Star /></div>
            <h4>Clients rate Flexiple .NET developers 4.8 / 5 on average based on 10,482 reviews.</h4>
        </div>
    </header>
  )
}

export default Banner