import useAuth from "../../../hooks/useAuth";


const AdminHome = () => {
    const {user} = useAuth();
    return (
        <div>
            <h2>Admin Home : {
            user?.displayName ? user.displayName :'Welcome Back'
        }</h2>
        </div>
    );
};

export default AdminHome;