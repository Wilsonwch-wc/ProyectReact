import Body from '../components/Home/body.jsx';
import Logo from '../components/Home/logo.jsx';
import Footer from '../components/Home/footer.jsx';

import OpenLink from '../components/Core/OpenLink.jsx';
import viteLogo from "../assets/vite.svg";
import git from "../assets/git.svg";
import react from "../assets/react.svg";
 
const Home =()=>{
    return (
<div>  
    <Logo></Logo>
   <Body></Body>
   <Footer></Footer>

   <OpenLink
              direccionUrl="https://vite.dev"
              logoimg={viteLogo}
          />
       <OpenLink
              direccionUrl="https://github.com/Wilsonwch-wc/ProyectReact.git"
              logoimg={git}
          />

<OpenLink
              direccionUrl="https://vite.dev"
              logoimg={react}
          />





   </div>
    );
}
export default Home;