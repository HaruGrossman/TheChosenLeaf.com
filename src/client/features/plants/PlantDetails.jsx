import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
// import { selectToken } from authslice
// useGetPlantQuery from plantSlice
// import css
import Reviews from "./Review";


export default function Details(){

    const token = useSelector(selectToken);
    const navigate = useNavigate();

    const { id } = useParams();
    const { data: plant, isLoading } = useGetPlantQuery(id);

    const [favoritePlant, { isLoading: isFavoriting }] = useFavoritePlantMutation();
    tryFavoritePlant = async (evt) => {
        evt.preventDefault();
        await favoritePlant(plant.id);
    };

    const [reviewPlant, { isLoading: isReviewing }] = usePlantReviewMutation();
    tryReviewPlant = async (evt) => {
        evt.preventDefault();
        await reviewPlant(plant.id);
    }

    return isLoading ? (
    <p>Loading...</p>
    ) : (
    <main className="plant-details">
        <h1>{plant.common}</h1>
        
        <Reviews />
    </div>)
}


// set navigate as useNavigate
// set id as useParams
// set data, isLoading, isError as useGetPlantQuery(id)

// set isLoading to return
// set undefined data to navigate home

// validate login

// arrow function returnNavigate returns to search list

// arrow function storeNavigate takes user to maps/nearme page
// ***STRETCHGOAL will this onClick need to store params to be exported to the maps page?

// arrow function createReview returns a popup window to create a review
// ***Q will this need to be added to the plant API to save the review under each plant? 

// return
// div
// if there is data display:
// image
// Common Name : common name
// Latin Name : latin
// Ideal Light : ideallight
// Tolerated Light : toleratedlight
// Watering : watering
// Temperature : tempmin - tempmax
// Category : category
// Reviews : <li> list of ReviewCard(s) (review and rating) </li>

// add to favorite button onClick = 
// store near me button onClick = storeNavigate
// return button onClick = returnNavigate
// review button onClick = createReview