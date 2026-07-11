"use client";

import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{

  variant?:
    |"primary"
    |"secondary"
    |"danger"
    |"ghost";

  size?:
    |"sm"
    |"md"
    |"lg";

}

export default function Button({

children,

variant="primary",

size="md",

className="",

...props

}:Props){

const variants={

primary:
`
text-white
shadow-lg
hover:scale-[1.02]
`,
secondary:
`
bg-slate-100
text-slate-700
hover:bg-slate-200
`,
danger:
`
bg-red-600
text-white
hover:bg-red-700
`,
ghost:
`
bg-transparent
hover:bg-slate-100
`

};

const sizes={

sm:"h-10 px-4 text-sm",

md:"h-12 px-6 text-base",

lg:"h-14 px-8 text-lg"

};

return(

<button

{...props}

style={
variant==="primary"
?
{
background:
"linear-gradient(135deg,var(--primary),var(--secondary))"
}
:
undefined
}

className={`
inline-flex
items-center
justify-center
gap-2
rounded-2xl
font-semibold
transition-all
duration-300
disabled:opacity-50
disabled:pointer-events-none
${variants[variant]}
${sizes[size]}
${className}
`}

>

{children}

</button>

);

}
