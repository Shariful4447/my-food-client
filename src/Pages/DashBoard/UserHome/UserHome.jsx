import useAuth from "../../../hooks/useAuth";


const UserHome = () => {
    const {user} = useAuth();
    console.log(user);
    return (
        <div className="flex flex-1 justify-between bg-blue-400 border-2 rounded-xl p-5">
            <h2>User Home 
                {
                    user?.displayName ? user.displayName : 'Welcome'
                }
            </h2>
            <img className="border rounded-full h-12" src={user.photoURL} alt="" />
        </div>
    );
};

export default UserHome;