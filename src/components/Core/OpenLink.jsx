// eslint-disable-next-line react/prop-types
const OpenLink = ({direccionUrl,logoimg}) =>{

return (
    <div>

                <a href={direccionUrl} target="_blank">

                    <img src={logoimg} className="logo react" alt="git logo"/>

                </a>

    </div>
);

}


export default OpenLink;