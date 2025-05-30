import { cn } from "@/lib/utils"

interface SkeletonProps extends React.ComponentProps<"div"> {
  texto?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ className, texto, children, ...props }) => (
  <div
    data-slot="skeleton"
    className={cn(
      "bg-accent animate-pulse rounded-md flex justify-center items-center text-white",
      className
    )}
    aria-busy="true"
    role="status"
    {...props}
  >
    {texto && <span className="animate-pulse rounded-md">{texto}</span>}
    {children}
  </div>
);

export { Skeleton }
