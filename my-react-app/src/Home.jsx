import Typewriter from './Typewriter';
import './Typewriter.css';
import './Home.css';


function Home() {
  return (
    <div>
        <div className="hero-section">
          <div className="hero-text">
            <Typewriter words={['Experience immersive learning environment']} wait={6000} />
          </div>
          <div className="hero-model">
            <model-viewer
              src="/vrheadset.glb"
              alt="VR Headset Model"
              auto-rotate
              camera-controls
              disable-zoom
              style={{ width: "700px", height: "700px", background: "transparent" }}
            ></model-viewer>
          </div>
        </div>
    </div>
  );
}

export default Home;