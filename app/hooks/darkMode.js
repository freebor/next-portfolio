"use client"

const { useState, useEffect } = require("react");

const useDarkMode =()=>{
    const [isDarkMode, setIsDarkMode] = useState(()=>{

        const savedMode = (typeof window !== "undefined") 
            ? window.localStorage.getItem("darkMode")
            : "dark";

        const prefersDarkMode = savedMode === "dark"
        if(savedMode){
            return prefersDarkMode;
        }else{
            const prefersColorScheme = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ;
            return prefersColorScheme;
        }
    });

    const toggleMode = ()=>{
        setIsDarkMode((prev)=> !prev);
        console.log("entered");
    }
    useEffect(()=>{
        const bodyClass = document.body.classList
        bodyClass.toggle("dark", isDarkMode);
        if(typeof window !== "undefined"){
            window.localStorage.setItem("darkMode", isDarkMode ? "dark" : "light");
        }
    },[isDarkMode])
    return {isDarkMode, toggleMode};
}

export default useDarkMode;