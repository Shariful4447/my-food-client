import useAuth from "../../../hooks/useAuth";


const UserHome = () => {
    const {user} = useAuth();
    console.log(user);
    return (
        <>
            <div className="flex flex-1 justify-between bg-blue-400 border-2 rounded-xl p-5">
                <h2>User Home 
                    {
                        user?.displayName ? user.displayName : 'Welcome'
                    }
                </h2>
                <img className="border rounded-full h-12" src={user.photoURL} alt="" />
            </div>
            <div className="mx-auto mt-5">
                <div className="stats shadow w-full">
    
                    <div className="stat place-items-center">
                        <div className="stat-title">Downloads</div>
                        <div className="stat-value">31K</div>
                        <div className="stat-desc">From January 1st to February 1st</div>
                    </div>
                    
                    <div className="stat place-items-center">
                        <div className="stat-title">Users</div>
                        <div className="stat-value text-secondary">4,200</div>
                        <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
                    </div>
                    
                    <div className="stat place-items-center">
                        <div className="stat-title">New Registers</div>
                        <div className="stat-value">1,200</div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>
                
                </div>
            </div>
            <div className="flex flex-evenly justify-center gap-5 mt-5">
                <div className="skeleton w-48 h-48">
                    <h2 className="text-center">ClassName</h2>
                </div>
                <div className="skeleton w-48 h-48 text-center">
                    <h2>Your Activities</h2>
                    <h2>Orders: 6</h2>
                    <h2>Reviews: 2</h2>
                    <h2>Bookings: 1</h2>
                    <h2>Payment:3</h2>
                </div>

            </div>
        </>
    );
};

export default UserHome;