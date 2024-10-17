import React, { useState } from "react";
import NavBar from "./Components/NavBar/NavBar";
import './App.css';
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import { action, comedy, documentaries, horror, originals, romance, trending } from './urls';

function App() {
  // State to track the currently playing video ID and active row
  const [urlId, setUrlId] = useState('');
  const [activeRow, setActiveRow] = useState(null); // Tracks which row is active

  // Function to handle playing video for the specific row
  const handleActiveRow = (rowId, videoId) => {
    setActiveRow(rowId);  // Sets the active row
    setUrlId(videoId);    // Sets the video ID for that row
  }

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={trending} title='Trending' isSmall={false} activeRow={activeRow} handleActiveRow={handleActiveRow} rowId="trending" urlId={urlId} />
      <RowPost url={action} title='Action' isSmall activeRow={activeRow} handleActiveRow={handleActiveRow} rowId="action" urlId={urlId} />
      <RowPost url={documentaries} title='Netflix Documentaries' isSmall activeRow={activeRow} handleActiveRow={handleActiveRow} rowId="documentaries" urlId={urlId} />
      <RowPost url={comedy} title='Comedy Movies' isSmall activeRow={activeRow} handleActiveRow={handleActiveRow} rowId="comedy" urlId={urlId} />
      <RowPost url={romance} title='Romantic Movies' isSmall activeRow={activeRow} handleActiveRow={handleActiveRow} rowId="romance" urlId={urlId} />
      <RowPost url={horror} title='Horror Movies' isSmall activeRow={activeRow} handleActiveRow={handleActiveRow} rowId="horror" urlId={urlId} />
      <RowPost url={originals} title='Netflix Originals' isSmall activeRow={activeRow} handleActiveRow={handleActiveRow} rowId="originals" urlId={urlId} />
    </div>
  );
}

export default App;
