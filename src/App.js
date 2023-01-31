
import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';

const socialLinks = [
  {
    linkSite:"https://www.linkedin.com/in/diogo-rennam/",
    nomeRede:"Linkedin"
   
  },
  {
    linkSite:"https://discord.com/channels/@me",
    nomeRede:"Discord"
   
  },
  {
    linkSite: "https://www.instagram.com/diogorennam",
    nomeRede: "instagram"
  },
  {
    linkSite:"https://github.com/diogorenam",
    nomeRede:"Github"
  },
 
  {
    linkSite:"https://open.spotify.com/playlist/55xFymrPRaOkoBs09QjWIe?si=43fd9caee8eb4007",
    nomeRede:"Spotify"
  },
  {
    linkSite:"https://drive.google.com/drive/folders/1O6ZJwTNldkbu8Ps0I36MXzB6dlLYgQ2m?usp=sharing",
    nomeRede:"Livros"
  }
]
function App() {
  return (
    <div className="container">
    <Header 
    className="avatar"
    url="https://github.com/diogorenam.png"
    alt="Imagem de Diogo rennam"
    nome="Diogo Rennam"/>
    
    {
      socialLinks.map(function(item){
        return <Card
        linkSite={item.linkSite}
        nomeRede={item.nomeRede}
        />
      })
    }
    <Footer/>
    </div>
  );
}

export default App;
