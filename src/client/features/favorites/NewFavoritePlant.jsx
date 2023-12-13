import { useCreateFavoritePlantMutation } from "../../store/FavoriteSlice";
import { useGetPlantQuery } from "../plants/plantSlice";
import { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../auth/authSlice";

export default function NewFavoritePlant( ){
    const token = useSelector(selectToken);
    const navigate = useNavigate();
    const { id } = useParams();
    const { data } = useGetPlantQuery(id);
    const plantId = data.id;
    console.log(data);

    const [favorite, setFavorite] = useState("");
    const [createFavorite] = useCreateFavoritePlantMutation();

    const loginNavigate = () => {
        const location = useLocation();
        console.log(location);
        navigate("/login");
    };
    console.log(location);


    //create a new favorite
    const createFav = async (evt) => {
        evt.preventDefault();
        await createFavorite({ id: plantId });
    };

    if (!token) {
        return <button onClick={loginNavigate}>Login to add to favorites</button>
    };
        
        return (
         <div>
                <button onClick={createFav} 
                onChange={(e) => setFavorite(e.target.value)}
                >
                    ♡
                    <input
                    type="hidden"
                    value={favorite}
                    />
                </button>
         </div>
        )
};


