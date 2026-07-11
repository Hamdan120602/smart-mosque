"use client";

import { themes, ThemeName } from "@/themes/themes";
import { useTheme } from "@/context/ThemeContext";
import { Check } from "lucide-react";


interface Props {
  value:string;
  onChange:(value:string)=>void;
}


export default function ThemeSelector({
  value,
  onChange
}:Props){


const {
  setTheme
}=useTheme();



function changeTheme(key:ThemeName){

  setTheme(key);

  onChange(key);

}



return (

<div className="
grid
grid-cols-2
md:grid-cols-5
gap-4
">


{
Object.entries(themes).map(([key,item])=>{


const active=value===key;


return (

<button

key={key}

type="button"

onClick={()=>changeTheme(key as ThemeName)}

className={`
relative
group
rounded-2xl
border
p-3
transition-all
duration-300
text-left

${active
?
"ring-2 ring-offset-2 ring-emerald-500 shadow-lg"
:
"hover:-translate-y-1 hover:shadow-md"
}

`}

>


<div

className="
h-14
rounded-xl
mb-3
flex
items-center
justify-center
"

style={{

background:
`linear-gradient(135deg,
${item.colors.primary},
${item.colors.accent})`

}}

>


{
active &&

<div className="
bg-white
rounded-full
p-1
shadow
">

<Check
size={16}
className="text-emerald-600"
/>

</div>

}


</div>



<p className="
text-xs
font-bold
truncate
">

{item.name}

</p>


<div className="
flex
gap-1
mt-2
">

<span

className="
w-3
h-3
rounded-full
"

style={{
background:item.colors.primary
}}

/>


<span

className="
w-3
h-3
rounded-full
"

style={{
background:item.colors.secondary
}}

/>


<span

className="
w-3
h-3
rounded-full
"

style={{
background:item.colors.accent
}}

/>


</div>



</button>


)

})

}


</div>


)

}
