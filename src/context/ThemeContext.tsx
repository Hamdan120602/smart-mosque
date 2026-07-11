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


type ThemeContextType = {

theme:ThemeName;

setTheme:(theme:ThemeName)=>void;

themes:typeof themes;

};



const ThemeContext =
createContext<ThemeContextType | null>(null);



export function ThemeProvider({

children

}:{

children:React.ReactNode;

}){


const [theme,setTheme] =
useState<ThemeName>("emerald");



useEffect(()=>{


const saved =
localStorage.getItem("theme");


if(saved && saved in themes){

setTheme(saved as ThemeName);

}


},[]);





useEffect(()=>{


const current =
themes[theme];


const root =
document.documentElement;



root.style.setProperty(
"--primary",
current.colors.primary
);


root.style.setProperty(
"--secondary",
current.colors.secondary
);


root.style.setProperty(
"--accent",
current.colors.accent
);


root.style.setProperty(
"--background",
current.colors.background
);


root.style.setProperty(
"--card",
current.colors.card
);


root.style.setProperty(
"--foreground",
theme==="royal" || theme==="gold"
?
"#f8fafc"
:
"#0f172a"
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

)

}




export function useTheme(){


const context =
useContext(ThemeContext);



if(!context){

throw new Error(
"useTheme must be inside ThemeProvider"
);

}


return context;


}
