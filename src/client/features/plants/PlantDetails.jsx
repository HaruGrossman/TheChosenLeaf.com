import { useNavigate, useParams } from "react-router-dom";
import { useGetPlantQuery } from "./plantSlice";
// import css
import Reviews from "./Review";
import Switch from "../components/FavoriteSwitch";
import { useState } from 'react';
const token = useSelector(selectToken);
const navigate = useNavigate();

function NewFavoritePlant(){

    
    const [favorite, setFavorite] = useState("");
    const [createFavorite] = useCreateFavoritePlantMutation();

    const [unfavorite, setUnfavorite] = useState("");
    const [deleteFavorite] = useDeleteFavoritePlantMutation();

    const loginNavigate = () => {
        navigate("/login");
    };

    //create a new favorite
    const createFav = async (evt) => {
        evt.preventDefault();
        await createFavorite({ plantId, favorite });
    };

    //delete an existing favorite
    const deleteFav = async (evt) => {
        evt.preventDefault();
        deleteFavorite(favoritePlant.id);
    };

    if (!token) {
        return <button onClick={loginNavigate}>Login to add to favorites</button>
    };
        return (
         <div>
            <Switch onToggle={createFav} isToggled={deleteFav}>
                <button onClick={createFav}>
                    <input
                    type="checkbox"
                    value={favorite}
                    onChange={(e) => setFavorite(e.target.value)}
                    />
                </button>
            </Switch>

         </div>
        )
};



export default function Details(){

    const [isToggled, setIsToggled] = useState(false);


    const navigate = useNavigate();

    // // arrow function returnNavigate returns to search list
    const returnNavigate = () => {
        navigate("/search");
    };

    // arrow function createReview returns a popup window to create a review
    // ***Q will this need to be added to the plant API to save the review under each plant? 

    // arrow function storeNavigate takes user to maps/nearme page
    const storeNavigate = () =>{
        navigate("/maps");
    };
    // ***STRETCHGOAL will this onClick need to store params to be exported to the maps page?

    const { id } = useParams();
    const { data: plant, isLoading } = useGetPlantQuery(id);


    
    // unfavorite a favorited plant
    // const [unfavoritePlant, { isLoading: isUnfavoriting }] = useUnfavoritePlantMutation();
    // tryUnfavoritePlant = async (evt) => {
    //     evt.preventDefault();
    //     await unfavoritePlant(plant.id);
    // }

    // review a plant
    // const [reviewPlant, { isLoading: isReviewing }] = usePlantReviewMutation();
    // tryReviewPlant = async (evt) => {
    //     evt.preventDefault();
    //     await reviewPlant(plant.id);
    // }
    console.log(plant.id);


    return isLoading ? (
    <p>Loading...</p>
    ) : (
    <main className="plant-details">
        <img src={plant.image} />
        <h1>Common Name: {plant.name}</h1>
        <h2>Latin Name:{plant.latin}</h2>
        <h2>Ideal Light:{plant.ideallight}</h2>
        <h2>Tolerated Light:{plant.toleratedlight}</h2>
        <h2>Watering:{plant.watering}</h2>
        <h2>Temperature:{plant.tempmin}-{plant.tempmax}</h2>
        <h2>Category:{plant.category} </h2>
        <button className="store-near-me" onClick={storeNavigate}>Stores Near Me</button>
        <br/><br/>
        <NewFavoritePlant />
        <br/><br/>
        <Reviews />
        <button className="return-btn" onClick={returnNavigate}>Back to Search</button>
    </main>);
}