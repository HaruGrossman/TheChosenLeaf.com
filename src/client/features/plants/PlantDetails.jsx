import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
// import { selectToken } from authslice
// useGetPlantQuery from plantSlice
// import css
import Reviews from "./Review";


export default function Details(){

// validate login
    const token = useSelector(selectToken);

    const navigate = useNavigate();

    const { id } = useParams();
    const { data: plant, isLoading } = useGetPlantQuery(id);

    const [favoritePlant, { isLoading: isFavoriting }] = useFavoritePlantMutation();
    tryFavoritePlant = async (evt) => {
        evt.preventDefault();
        await favoritePlant(plant.id);
    };

    const [unfavoritePlant, { isLoading: isUnfavoriting }] = useUnfavoritePlantMutation();
    tryUnfavoritePlant = async (evt) => {
        evt.preventDefault();
        await unfavoritePlant(plant.id);
    }

    const [reviewPlant, { isLoading: isReviewing }] = usePlantReviewMutation();
    tryReviewPlant = async (evt) => {
        evt.preventDefault();
        await reviewPlant(plant.id);
    }

    return isLoading ? (
    <p>Loading...</p>
    ) : (
    <main className="plant-details">
        <img src={plant.image} />
        <h1>Common Name:{plant.common}</h1>
        <h2>Latin Name:{plant.latin}</h2>
        <h2>Ideal Light:{plant.ideallight}</h2>
        <h2>Tolerated Light:{plant.toleratedlight}</h2>
        <h2>Watering:{plant.watering}</h2>
        <h2>Temperature:{plant.tempmin}-{plant.tempmax}</h2>
        <h2>Category:{plant.category} </h2>
        { token &&
            (book.favorite === false ? (
                <form onSubmit={tryFavoritePlant}>
                    <button>{isFavoriting ? "Hang tight..." : "❤️" }</button>
                </form>
            ) : (
                <form onSubmit={tryUnfavoritePlant}>
                    <button>{isUnfavoriting ? "Hang tight..." : "🤍" }</button>
                </form>
            ))
        };
        <Reviews />
    </main>)
}

// arrow function returnNavigate returns to search list

// arrow function storeNavigate takes user to maps/nearme page
// ***STRETCHGOAL will this onClick need to store params to be exported to the maps page?

// arrow function createReview returns a popup window to create a review
// ***Q will this need to be added to the plant API to save the review under each plant? 

// Reviews : <li> list of ReviewCard(s) (review and rating) </li>

// add to favorite button onClick = 
// store near me button onClick = storeNavigate
// return button onClick = returnNavigate
// review button onClick = createReview