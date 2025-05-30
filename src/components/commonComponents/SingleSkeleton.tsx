import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"

const SingleSkeleton: React.FC = () => (
  <div className="flex flex-col space-y-3 w-[65%] h-[70%]">
    <Skeleton  className="w-[90%] m-auto h-[125px] md:h-[250px] border-5 text-black text-xl font-bold border-[#5a3a1b] bg-[#f7f5f0] rounded-[20px_8px_20px_8px] " />
  </div>
)


export default SingleSkeleton