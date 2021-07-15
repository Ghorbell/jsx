import './App.css';
import './style.css';
import imageInSrc from './imageInSrc.jpg';
function App() {
  return (
    <div className="App">
      <div className="Background" style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="title red">Amine Ghorbel</h1>
          <br />
         
          <img src={imageInSrc} alt='imgsrc' />
          <br />
          
          <img src="logo192.png" alt='imgpublic' />
        </div>
        <video width={320} height={240} controls>
          <source src="myVideo.mp4" type="video/mp4" />
        </video>
      </div>
    
  );
}

export default App;
