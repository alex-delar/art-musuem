import harvardArt from './data/harvardArt';
import GalleryNavigation from './components/GalleryNavigation';
import GalleryView from './components/GallerView';
import { Route, Switch } from "react-router-dom"

function App() {
  return (
    <div className="page-wrapper">
      <h1>Harvard Art Museum</h1>
    <GalleryNavigation galleries={harvardArt.records}/>
    
    <Switch>
      <Route exact path="/">
        <p>The Harvard Art Museums is a comprehensive art museum located in Cambridge, Massachusetts, on the campus of Harvard University. The museum is comprised of three interconnected buildings that together house more than 250,000 works of art from around the world, ranging from ancient to contemporary art.</p>
        <p>Look, but Don't Touch. Please select a Gallery.</p>
      </Route>
      <Route path="/galleries/:galleryId">
      <GalleryView galleries={harvardArt.records}/>
    </Route>
      <Route path="*">404</Route>
      </Switch>
    
    
    
    </div>
  );
}

export default App;
