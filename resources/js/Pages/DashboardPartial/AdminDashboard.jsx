import { useState } from 'react';
import { Head, usePage } from '@inertiajs/react';

export default function AdminDasboard(props) {
    return<div className="p-6 text-gray-900 dark:text-gray-100">
        <div className='flex items-center justify-between'>
            <div className=''>Users</div>
        </div>
        <div className='mt-4'>
            {props.props.data.users?.map( ( user ) => {
                return(
                    <div className={`mt-4 grid lg:grid-cols-5 gap-4 p-3 border-[1px] ${user?.activated ? 'border-lime-500' : 'border-red-500'}`} key={user.id}>
                        <div className="text-gray-800 dark:text-gray-200">
                            <p>Full Name</p>
                            <p>{user?.name} {user.surname}</p>
                        </div>
                        <div className="text-gray-800 dark:text-gray-200">
                            <p>Email</p>
                            <p>{user?.email}</p>
                        </div>
                        <div className="text-gray-800 dark:text-gray-200">
                            <p>Mobile Number</p>
                            <p>{user?.userinfo?.mobile_number}</p>
                        </div>
                        <div className="text-gray-800 dark:text-gray-200">
                            <p>activated</p>
                            <p>{user?.activated ? 'yes' : 'no'}</p>
                        </div>
                        <div><a href={`/edit-user/${user.id}`}><button className="dark:bg-lime-500 bg-lime-500 dark:text-gray-800 text-gray-800 rounded-md px-4 py-2 m-2">Edit User</button></a></div>
                    </div>
                )
            } )}    
        </div> 
    </div>
}