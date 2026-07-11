import { ReactNode } from 'react';

interface BadgeProps{
    children:ReactNode;
    color?:'green'|'red'|'blue'|'yellow';
}

export default function Badge({
children,
color='green'
}:BadgeProps){

const colors={
green:'bg-emerald-100 text-emerald-700',
red:'bg-red-100 text-red-700',
blue:'bg-blue-100 text-blue-700',
yellow:'bg-yellow-100 text-yellow-700'
}

return(

<span
className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${colors[color]}`}
>

{children}

</span>

)

}
