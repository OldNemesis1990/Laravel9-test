

export default function UserDashboard(props) {
    const showUsers = props.props.data.users.length > 0 ? true : false;
    return (
        <div className="p-6 text-gray-900 dark:text-gray-100">
            <div className='flex items-center justify-between'>
                <div className=''>Interests</div>
                <div><a href={route('view.user', props.props.auth.user.id)}><button className='bg-lime-500 text-gray-800 py-1 px-4'>Add Interest</button></a></div>
            </div>
            <div>
                {showUsers && props.props.data.users.map( (user) => {
                    let interestCount = user.interest_count
                    let color = "border-gray-700"
                    if(user.interest_count >= 1 && user.interest_count <= 3) {
                        color = "border-rose-500"
                    } else if(user.interest_count >= 4 && user.interest_count <= 6) {
                        color = "border-amber-300"
                    } else if(user.interest_count >= 7) {
                        color = "border-lime-500"
                    }
                    return(
                    <div key={user.id} className={`grid lg:grid-cols-3 gap-4 mt-4 p-3 border-2 ${color}`}>
                        <div className=''>
                            <p>Name</p>
                            <p>{user.name} {user.surname}</p>
                        </div>
                        <div className=''>
                            <p>Shares {user.interest_count} interests</p>
                        </div>
                        <div>
                            <p>Contact information</p>
                            <p>{user.email}</p>
                            <p>{user.userinfo.mobile_number}</p>
                        </div>
                    </div>)
                })}
                {!showUsers && <div className='text-center mt-4'>No users with sharing interests found. Please select more interest and we might be able to match you.</div>}
            </div>                            
        </div>
    )
}