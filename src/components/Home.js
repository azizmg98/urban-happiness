import AlbumsList from "../AlbumsList";
import AlbumView from "./AlbumView"

function Home() {
    return (
        <div className='App'>
          <h1>Urban happiness</h1>
          <p>the music fanatics happy place</p>
          <img
            className="bkg-image"
            alt="musician busking on the street"
            src="https://i.ytimg.com/vi/PLmxlfG2L2o/maxresdefault.jpg"
          />
          <AlbumView />
        </div>
      );
}

export default Home;