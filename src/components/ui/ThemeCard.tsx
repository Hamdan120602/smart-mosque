"use client";


export default function ThemeCard({

children,
className=""

}:{

children:React.ReactNode;
className?:string;

}){


return (

<div

className={`
theme-card
p-6
${className}
`}

>

{children}

</div>

)

}
