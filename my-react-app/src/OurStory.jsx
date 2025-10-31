import './OurStory.css';
import SinceCounter from './SinceCounter';

export default function OurStory() {
  return (
    <div className="our-story">
      <div className="since-card">
        <h1 className="since-heading">Our company has been founded since:</h1>
        <SinceCounter start="2025-07-25T00:00:00" />
      </div>
    </div>
  );
}