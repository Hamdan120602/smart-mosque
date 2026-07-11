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

theme: ThemeName;

setTheme:
(theme:ThemeName)=>void;

themes:
typeof themes;

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

setTheme(
saved as ThemeName
);

}


},[]);





useEffect(()=>{


const current =
themes[theme];



Object.entries(
current.colors

).forEach(
([key,value])=>{


document.documentElement.style.setProperty(

`--${key}`,

value

);


});


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


const context =
useContext(ThemeContext);



if(!context){

throw new Error(
"useTheme must be used inside ThemeProvider"
);

}


return context;


}
