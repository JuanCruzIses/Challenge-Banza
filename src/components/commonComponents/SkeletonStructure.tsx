import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"

const SkeletonStructure: React.FC = () => {
    return (
      <div className='grid w-[80%] m-auto md:w-[90%] md:grid-cols-3 gap-3 my-10'> 
      <div className="flex flex-col space-y-3 w-[90%] gap-1">
        <Skeleton  className="w-[90%] m-auto h-[125px] md:h-[250px] border-5 text-black text-xl font-bold border-[#5a3a1b] bg-[#f7f5f0] rounded-[20px_8px_20px_8px] " />
        <div className="space-y-2 gap-1 grid">
          <Skeleton texto="Pintando..." className="text-black font-semibold w-[90%] rounded-sm p-3 m-auto h-4 bg-[#f7f5f0] border-2 border-[#5a3a1b]" />
        </div>
      </div>
      <div className="hidden md:flex flex-col space-y-3 w-[90%] gap-1">
        <Skeleton  className="w-[90%] m-auto h-[125px] md:h-[250px] border-5 text-black text-xl font-bold border-[#5a3a1b] bg-[#f7f5f0] rounded-[20px_8px_20px_8px] " />
        <div className="space-y-2 gap-1 grid">
          <Skeleton texto="Pintando..." className="text-black font-semibold w-[90%] rounded-sm p-3 m-auto h-4 bg-[#f7f5f0] border-2 border-[#5a3a1b]" />
        </div>
      </div>
      <div className="hidden md:flex flex-col space-y-3 w-[90%] gap-1">
        <Skeleton  className="w-[90%] m-auto h-[125px] md:h-[250px] border-5 text-black text-xl font-bold border-[#5a3a1b] bg-[#f7f5f0] rounded-[20px_8px_20px_8px] " />
        <div className="space-y-2 gap-1 grid">
          <Skeleton texto="Pintando..." className="text-black font-semibold w-[90%] rounded-sm p-3 m-auto h-4 bg-[#f7f5f0] border-2 border-[#5a3a1b]" />
        </div>
      </div>
      </div>
    )
}

export default SkeletonStructure

 