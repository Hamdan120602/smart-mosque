interface Props{

name:string;

}

export default function Avatar({

name

}:Props){

const initials=name
.split(' ')
.map(v=>v[0])
.join('')
.substring(0,2)
.toUpperCase();

return(

<div
className="
flex
h-11
w-11
items-center
justify-center
rounded-full
bg-emerald-600
font-semibold
text-white
"
>

{initials}

</div>

)

}
