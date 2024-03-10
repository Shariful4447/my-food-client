import useAuth from "../../../hooks/useAuth";


const UserHome = () => {
    const {user} = useAuth();
    return (
        <div>
            <h2>User Home 
                {
                    user?.displayName ? user.displayName : 'Welcome'
                }
            </h2>
        </div>
    );
};

export default UserHome;