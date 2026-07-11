"use client";

import { ReactNode } from "react";

interface CardProps{
  children:ReactNode;
  className?:string;
}

export default function Card({
  children,
  className=""
}:CardProps){

  return(

    <div
      className={`
      relative
      overflow-hidden
      rounded-[28px]
      border
      border-white/10
      bg-[var(--card)]
      shadow-[0_15px_60px_rgba(0,0,0,.08)]
      backdrop-blur-xl
      transition-all
      duration-300
      hover:-translate-y-1
      hover:shadow-[0_25px_70px_rgba(0,0,0,.12)]
      ${className}
      `}
    >

      <div
        className="
        absolute
        inset-x-0
        top-0
        h-px
        bg-gradient-to-r
        from-transparent
        via-white/60
        to-transparent
        "
      />

      {children}

    </div>

  );

}
