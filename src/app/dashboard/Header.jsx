"use client"
import { DarkModeContext } from "./DarkModeProvider"
import { useContext } from "react"

export default function Header(){
    const { darkMode } = useContext(DarkModeContext)
    return(
        <nav className={`relative w-full header header-height border-b ${darkMode? "bg-inherit" : "bg-green-200"} flex justify-between items-center border-gray-400 px-[40px]`}>
            <div className='flex flex-row gap-4'>
                <h1 className=" font-semibold tracking-wider text-2xl">SoundCircle</h1>
                <div className='flex flex-row gap-3 items-center'>
                    <a href="/">Home</a>
                    <a href="/dashboard">Dashboard</a>
                    <a href="/dashboard/friends">Friends</a>
                    <a href="/dashboard/settings">Settings</a>
                </div>
            </div>
            <div>
                <a href="/">
                    <button type="submit" className="border-2 border-red-400 rounded-lg text-red-400 text-sm font-bold tracking-wider px-[10px] py-[3px] hover:bg-red-950">Logout</button>
                </a>   
            </div>
        </nav> 
    )
}