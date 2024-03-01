import { Helmet} from "react-helmet-async";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import useAuth from "../../hooks/useAuth";


const SocialLogin = () => {
    const {googleSignIn} = useAuth();
    const handleLoginWithSocial = () =>{
        googleSignIn().then(result=>{
            console.log(result.user);
        })
    }
    return (
        <>
        <Helmet>
            Food Boss || Social Login
        </Helmet>
        <div className='flex gap-5 mx-auto'>
            <button className="btn btn-circle btn-outline "> <FacebookRoundedIcon/></button>
            <button className="btn btn-circle btn-outline "> <InstagramIcon/></button>
            <button className="btn btn-circle btn-outline "> <TwitterIcon/></button>
            <button onClick={handleLoginWithSocial} className="btn btn-circle btn-outline "> <GoogleIcon /></button>
        </div>
            
        </>
    );
};

export default SocialLogin;