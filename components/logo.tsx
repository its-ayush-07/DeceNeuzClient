import { cn } from "@/lib/utils";
import Link from "next/link";

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <Link
      href={"/"}
      className={cn(
        "cursor-pointer font-oswald text-2xl font-semibold text-slate-900 lg:text-3xl",
        className
      )}
    >
      <span className="text-orange-500">DECE</span>
      <span>NUEZ</span>
    </Link>
  );
}
