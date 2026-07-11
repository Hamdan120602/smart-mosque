'use client';

import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function Button({
  children,
  className='',
  ...props
}:ButtonProps){

return(

<button
{...props}
className={`
inline-flex
items-center
justify-center
rounded-lg
bg-emerald-600
px-4
py-2.5
text-sm
font-semibold
text-white
transition-all
duration-200
hover:bg-emerald-700
active:scale-[0.98]
disabled:opacity-50
${className}
`}
>

{children}

</button>

)

}
