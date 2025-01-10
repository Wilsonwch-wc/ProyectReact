import Body from '../components/Home/body.jsx';
import Logo from '../components/Home/logo.jsx';
import Footer from '../components/Home/footer.jsx';

import OpenLink from '../components/Core/OpenLink.jsx';
import viteLogo from "../assets/vite.svg";
import git from "../assets/git.svg";
import react from "../assets/react.svg";
import Counter from '../components/Counter/counterValue.jsx';
const Home = () => {
    return (
        <div>  
            <Logo></Logo>
            <Body></Body>
            <Counter></Counter>
<div><h1>Open Link</h1></div>
            <div>
                <table>
                    <tr>
                        <td>
                            <OpenLink direccionUrl="https://vite.dev" logoimg={viteLogo} />
                        </td>
                        <td>
                            <OpenLink direccionUrl="https://github.com/Wilsonwch-wc/ProyectReact.git" logoimg={git} />
                        </td>
                        <td>
                            <OpenLink direccionUrl="https://react.dev" logoimg={react} />
                        </td>
                    </tr>
                </table>
            </div>

            <Footer></Footer>
        </div>
    );
}

export default Home;


