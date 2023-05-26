import logo from './logo.svg';
import './App.css';
import ImageBox from './components/ImageBox';
import ImageBoxes from './components/ImageBoxes';
import LikeArea from './components/LikeArea';

function App() {
  return (
    <div className="App">
      <h1 style={{'color':'white'}}>NASA PHOTO GALLERY</h1>
      <LikeArea/>
      <ImageBoxes/>
    </div>
  );
}

export default App;
