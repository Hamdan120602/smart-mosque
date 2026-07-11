'use client';

import {
  CheckCircle,
  XCircle,
  Info
} from 'lucide-react';


interface ToastProps{

type:'success'|'error'|'info';

message:string;

}



export default function Toast({
type,
message
}:ToastProps){


const icons={

success:
<CheckCircle size={20}/>,

error:
<XCircle size={20}/>,

info:
<Info size={20}/>

};



return (

<div

className="
fixed
right-6
top-6
z-[100]
flex
items-center
gap-3
rounded-2xl
border
bg-white
px-5
py-4
shadow-xl
"

>

{icons[type]}


<p
className="
text-sm
font-medium
text-slate-700
"
>
{message}
</p>


</div>

)

}
