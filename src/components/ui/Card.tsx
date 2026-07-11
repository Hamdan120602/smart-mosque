import type { ReactNode } from 'react';

interface CardProps{
children:ReactNode;
className?:string;
}

export default function Card({

children,

className=''

}:CardProps){

return(

<div
className={`
rounded-xl
border
border-slate-200
bg-white
shadow-sm
transition-all
duration-300
hover:-translate-y-0.5
hover:shadow-md
${className}
`}
>

{children}

</div>

)

}
