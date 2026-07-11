"use client";

import {
createContext,
useContext,
useEffect,
useState
} from "react";


import {
themes,
ThemeName
} from "@/themes/themes";



type ContextType={

theme:ThemeName;

setTheme:(theme:ThemeName)=>void;

themes:typeof themes;

};



const ThemeContext=createContext<ContextType|null>(null);



export function ThemeProvider({

children

}:{

children:React.ReactNode

}){


const [theme,setTheme]=useState<ThemeName>("emerald");



useEffect(()=>{


const saved=
localStorage.getItem("theme");

if(saved && saved in themes){

setTheme(saved as ThemeName);

}


},[]);




useEffect(()=>{


const data=themes[theme];



const root=document.documentElement;



root.style.setProperty(
"--primary",
data.colors.primary
);


root.style.setProperty(
"--secondary",
data.colors.secondary
);



root.style.setProperty(
"--accent",
data.colors.accent
);



root.style.setProperty(
"--background",
data.colors.background
);



root.style.setProperty(
"--surface",
data.colors.card
);



localStorage.setItem(
"theme",
theme
);



},[theme]);



return (

<ThemeContext.Provider

value={{

theme,

setTheme,

themes

}}

>

{children}

</ThemeContext.Provider>

);


}



export function useTheme(){


const ctx=useContext(ThemeContext);


if(!ctx)

throw new Error(
"ThemeProvider missing"
);


return ctx;


}
