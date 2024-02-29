import { useContext } from "react"
import SongRow from "./SongRow"
import topSongs from "./topSongs.json"
import Image from 'next/image'
import { DarkModeContext } from "./DarkModeProvider"

export default function Songs({}){
    const {darkMode} = useContext(DarkModeContext)
    return(
        <div className="flex flex-col">
            <SongRow number="" song="Song" artist="Artist" album="Album" picture="Album Cover" firstRow={true}/>
            <div className={`flex w-full mb-3 border-t ${darkMode ? "border-white": "border-gray-900"}  `}></div>
            {topSongs.map((song, index) => <SongRow firstRow={false} number={index+1} song={song.song} artist={song.artist} album={song.album}picture={<Image width={80} height={80} src="/images/somethingInTheOrange.jpeg"/>}/>)}
            
        </div>
        
        
    )
    
}

/*<div className="flex flex-row h-[100px] bg-blue-500 justify-center gap-20">
          <div className='flex'>
            <div className='flex flex-col'>
              <h1>Top Songs</h1>
              <div>
                <p>1. Song 1</p>
                <p>2. Song 2</p>
                <p>3. Song 3</p>
                <p>4. Song 4</p>
                <p>5. Song 5</p>
              </div>
            </div>
            <Image className='object-contain' src="/images/phoebeBridgers.jpeg" width={100} height={100}/>
          </div>*/