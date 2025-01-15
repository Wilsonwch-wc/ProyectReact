
import Footer from '../components/Home/footer.jsx';

import OpenLink from '../components/Core/OpenLink.jsx';
import viteLogo from "../assets/vite.svg";
import git from "../assets/git.svg";
import react from "../assets/react.svg";

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Open Link</h1>
      </header>

      <main className="home-main">
        <table className="link-table">
          <tbody>
            <tr className="link-row">
              <td className="link-cell">
                <OpenLink direccionUrl="https://vite.dev" logoimg={viteLogo} />
              </td>
              <td className="link-cell">
                <OpenLink direccionUrl="https://github.com/Wilsonwch-wc/ProyectReact.git" logoimg={git} />
              </td>
              <td className="link-cell">
                <OpenLink direccionUrl="https://react.dev" logoimg={react} />
              </td>
            </tr>
          </tbody>
        </table>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
