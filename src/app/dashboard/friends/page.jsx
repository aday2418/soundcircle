"use client"

import PageInfo from '../PageInfo'
import AddFriendGrid from './AddFriendGrid'
import FriendGrid from './FriendGrid'
import { useState } from 'react';
import fakeUsers from './fakeUsers.json'


export default function Friends() {
    const [friends, setFriends] = useState([])
    const [search, setSearch] = useState(''); 

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    const addFriend = (newFriend) => {
        if(!friends.includes(newFriend)){
            setFriends([...friends, newFriend])
        }
    }

    return (
        <PageInfo title="Friends">
            <div className='flex flex-col text-white'>
                <h1 className='text-2xl mb-2'>My Friends</h1>
                <FriendGrid friends={friends}/>
                
                <h1 className='text-white mt-4 text-2xl mt-6 mb-6'>Add New Friends</h1>
                <div className='flex flex-col gap-2'>
                    <div className='flex flex-row gap-2 mb-6'>
                        <p>Search For Friend: </p>
                        <input className='border rounded text-black min-w-[200px]' type="text" placeholder="Enter Username" onChange={handleSearchChange} value={search}/>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <AddFriendGrid users={fakeUsers} search={search} addFriend={addFriend} friends={friends}/>
                </div>
            </div>
        </PageInfo> 
    )
}