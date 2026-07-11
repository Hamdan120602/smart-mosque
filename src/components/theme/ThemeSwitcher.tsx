"use client";


import {
useTheme
} from "@/context/ThemeContext";


import {
themes,
ThemeName
} from "@/themes/themes";



export default function ThemeSwitcher(){


const {
theme,
setTheme

}=useTheme();



return (

<div
className="
premium-card
p-6
space-y-5
"
>


<div>

<h2
className="
text-xl
font-bold
text-gradient
"
>

Tema Tampilan

</h2>


<p
className="
text-sm
text-slate-500
mt-1
"
>

Pilih suasana aplikasi Smart Mosque

</p>


</div>





<div
className="
grid
grid-cols-1
md:grid-cols-2
gap-4
"
>


{

Object.entries(themes)
.map(
([key,item])=>{


const active =
theme===key;



return (

<button

key={key}

onClick={()=>


setTheme(
key as ThemeName
)

}


className={`
relative
text-left
p-5
rounded-2xl
border
transition
duration-300

${

active

?

"border-emerald-500 shadow-lg scale-[1.02]"

:

"border-slate-200 hover:-translate-y-1"

}

`}


>


<div
className="
flex
items-center
gap-3
"
>


<div

className="
w-10
h-10
rounded-full
shadow
"

style={{

background:
`linear-gradient(
135deg,
${item.colors.primary},
${item.colors.accent}
)`

}}


/>



<div>


<h3
className="
font-semibold
"
>

{item.name}

</h3>


<p
className="
text-xs
text-slate-500
"
>

Tema premium

</p>


</div>


</div>


{

active &&

<span
className="
absolute
top-3
right-3
text-xs
font-bold
text-emerald-600
"
>

AKTIF

</span>

}


</button>

)


})

}


</div>


</div>

);


}
