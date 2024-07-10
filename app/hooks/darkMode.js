"use client"

const { useState, useEffect } = require("react");

const useDarkMode =()=>{
    const [isDarkMode, setIsDarkMode] = useState(()=>{

        const savedMode = process.isClient
            ? localStorage.getItem("darkMode")
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
        if(process.isClient){
            localStorage.setItem("darkMode", isDarkMode ? "dark" : "light");
        }else{}
    },[isDarkMode])
    return {isDarkMode, toggleMode};
}

export default useDarkMode;