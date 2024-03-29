"use client";

import { useTheme } from "next-themes";
import { SunIcon } from '@heroicons/react/24/outline';
import { MoonIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from "react";


export const ThemeToggle = () => {
    const [mounted, setMounted] = useState(false);
    const {systemTheme, theme, setTheme } = useTheme();

    // useEffect on client side 
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const renderThemeChanger= () => {
        if (!mounted) return null;
        
        const currentTheme = theme === "system" ? systemTheme : theme ;

        if(currentTheme ==="dark"){
        return (
            <SunIcon 
            className="w-6 h-6 text-yellow-500 " 
            role="button" 
            onClick={() => 
            setTheme('light')} 
            />
        )
        } else {
            return (
              <MoonIcon 
                className="w-6 h-6 text-gray-900 " 
                role="button" 
                onClick={() => setTheme('dark')} 
               />
            )
        }
    };

    return (
        <>
         {renderThemeChanger()}
        </>
    );
}