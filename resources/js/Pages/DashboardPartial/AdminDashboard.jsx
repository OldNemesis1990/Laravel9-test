import { useState } from 'react';
import { Head, usePage, useForm } from '@inertiajs/react';

export default function AdminDasboard(props) {
    const form = useForm()
    const deleteUser = async (e, id) => {
        e.preventDefault();
        if (confirm('Are you sure you want to delete this user?')) {
            // Send the delete request
            form.delete(route('delete.users', { user_id: id }))
                .on('success', (response) => {
                    console.log(response)
                    props.props.data = response.data.data
                    // Redirect or perform any necessary actions after successful deletion
                })
                .catch(error => {
                    console.error('Error deleting user:', error);
                });
        }
    }

    return<div className="p-6 text-gray-900 dark:text-gray-100">
        <div className='flex items-center justify-between'>
            <div className=''>Users</div>
        </div>
        <div className='mt-4'>
            {props.props.data.users?.map( ( user ) => {
                return(
                    <div className={`mt-4 grid lg:grid-cols-6 gap-4 p-3 border-[1px] ${user?.activated ? 'border-lime-500' : 'border-red-500'}`} key={user.id}>
                        <div className="text-gray-800 dark:text-gray-200">
                            <p>Full Name</p>
                            <p>{user?.name} {user.surname}</p>
                        </div>
                        <div className="text-gray-800 dark:text-gray-200 break-normal break-words">
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
                        <div><a onClick={(e) => {deleteUser(e, user.id)}}><button className="dark:bg-rose-500 bg-rose-500 dark:text-gray-800 text-gray-800 rounded-md px-4 py-2 m-2">Delete User</button></a></div>
                    </div>
                )
            } )}    
        </div> 
    </div>
}