import "./App.css";

import Carousel from "./components/Carousel";

const slides = [
  "https://chennai.fyi/wp-content/uploads/2023/08/jawan-1.webp",
  "https://e0.pxfuel.com/wallpapers/518/420/desktop-wallpaper-2019-movie-poster-john-wick-3-dual-wide-widescreen-16-9-widescreen-2560x1440-movie.jpg",
  "https://wallpapersmug.com/download/1600x900/e5a909/star-wars-the-last-jedi-2017-movie-poster-red.jpg",
];

function App() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <Carousel slides={slides} />
    </div>
  );
}

export default App;
