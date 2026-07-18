import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
const NavBarIcons = ({icons})=>{
    return (
        <div className="social-icons">
            {
                icons.map((icon)=>{
                    console.log(icon.icon)
                    return <a key={icon.key} href={icon.url}>{icon.icon}</a>
                })
            }
        </div>
    )
}
export default NavBarIcons