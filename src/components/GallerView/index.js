import { Switch, useParams, Route } from "react-router-dom";
import ArtImageTile from "../ArtImageTile";
import "./GalleryView.css";


function GalleryView(props) {
    const { galleryId } = useParams();
    const { galleries } = props;
    // eslint-disable-next-line
    const gallery = galleries.find( gal => gal.id == galleryId);

    const galData = gallery.objects;
    const images = galData.map( data => { return data.images });

    return(
        <>
        <h2>{gallery.name}</h2>
        <h3>THEME: {gallery.theme}</h3>

        <Switch>
            <Route exact path="/galleries/:galleryId">
                <div className="artContainer">
                    {images.map( img => {
                    return <ArtImageTile image={img}/>
                    })}
                </div>
            </Route>
            
        </Switch>
        <p>{gallery.labeltext}</p>
        </>
    );
}

export default GalleryView;