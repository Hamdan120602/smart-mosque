"use client";

import { useTheme } from "@/context/ThemeContext";
import { themes, ThemeName } from "@/themes/themes";


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



return (

<div className="
grid
md:grid-cols-2
xl:grid-cols-3
gap-6
">


{
Object.entries(themes).map(([key,item])=>{


const active=value===key;



return (

<button

key={key}

type="button"

onClick={()=>{

setTheme(key as ThemeName);

onChange(key);

}}


className={`
relative
overflow-hidden
rounded-3xl
p-5
text-left
border
transition-all
duration-300
shadow-lg

${

active

?

"ring-4 ring-emerald-400 scale-[1.03]"

:

"hover:-translate-y-2"

}

`}


style={{

background:item.colors.card,

borderColor:item.colors.accent

}}


>


<div

className="
h-28
rounded-2xl
flex
items-center
justify-center
mb-5
"

style={{

background:

`linear-gradient(
135deg,
${item.colors.primary},
${item.colors.secondary}
)`

}}

>


<div className="
text-5xl
">

🕌

</div>


</div>



<h3

className="
text-xl
font-bold
"

style={{

color:item.colors.primary

}}

>

{item.name}

</h3>



<div className="
flex
gap-3
mt-4
">


<div

className="
w-8
h-8
rounded-full
"

style={{

background:item.colors.primary

}}

/>


<div

className="
w-8
h-8
rounded-full
"

style={{

background:item.colors.secondary

}}

/>


<div

className="
w-8
h-8
rounded-full
"

style={{

background:item.colors.accent

}}

/>


</div>



{

active &&

(

<div

className="
absolute
top-4
right-4
px-3
py-1
rounded-full
text-xs
font-bold
bg-emerald-600
text-white
"

>

AKTIF

</div>

)

}



</button>


)

})

}


</div>


);

}
