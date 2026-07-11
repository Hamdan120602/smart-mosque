"use client";


export default function ThemeButton({

children,
onClick

}:{

children:React.ReactNode;
onClick?:()=>void;

}){


return (

<button

onClick={onClick}

className="
theme-button
flex
items-center
justify-center
gap-2
"

>

{children}

</button>

)

}
