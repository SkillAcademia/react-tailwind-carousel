import "./App.css";

import Carousel from "./components/Carousel";

import Img1 from "./assets/img1.webp";
import Img2 from "./assets/img2.webp";
import Img3 from "./assets/img3.webp";
import Img4 from "./assets/img4.webp";

const slides = [Img1, Img2, Img3, Img4];

function App() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <Carousel slides={slides} />
    </div>
  );
}

export default App;
