import { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import AdminDasboard from '@/Pages/DashboardPartial/AdminDashboard';
import UserDashboard from '@/Pages/DashboardPartial/UserDashboard';
import { Head, usePage } from '@inertiajs/react';

export default function Dashboard(props) {
    const isAdmin = usePage().props.isAdmin
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-4">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        {!isAdmin && 
                            <UserDashboard props={props} />
                        }                        
                        {isAdmin && 
                            <AdminDasboard props={props} />
                        }                            
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
