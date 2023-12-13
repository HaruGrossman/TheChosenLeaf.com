import { useGetFavoritePlantsQuery, useDeleteFavoritePlantMutation } from "../../store/FavoriteSlice";
import { selectToken } from "../auth/authSlice";
import { useSelector } from "react-redux";
import { useState } from 'react';
import { Link } from "react-router-dom";
import './favorite.css';

function PlantCard({ plant }) {

    const [deleteFavorite] = useDeleteFavoritePlantMutation();
    const plantNotes = plant.notes[0];
    
    // delete an existing favorite
    const deleteFav = async (evt) => {
        evt.preventDefault();
        deleteFavorite(plant.id);
    };

    console.log(plant.plantId);
    console.log(plant.id)
    console.log(plant);

    return(
        <div className="fav-plant-card">
            <li>
                <Link to={`/search/${plant.plant.id}`}>
                    <img src={plant.plant.image} className="fav-plant-img" />
                </Link>
                <h3>{plant.plant.name}</h3>
                <h3>Favorite Plant Id: {plant.id}</h3>
                <h3>Plant Notes: {plantNotes?.note}</h3>
                <div>
                    <input type="checkbox" id="checkbox" defaultChecked="checked"
                        onChange={deleteFav}
                    />
                    <label htmlFor="checkbox">
                    <svg id="heart-svg" viewBox="467 392 58 57" xmlns="http://www.w3.org/2000/svg">
                        <g id="Group" fill="none" fill-rule="evenodd" transform="translate(467 392)">
                        <path d="M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z" id="heart" fill="#AAB8C2"/>
                        <circle id="main-circ" fill="#E2264D" opacity="0" cx="29.5" cy="29.5" r="1.5"/>

                        <g id="grp7" opacity="0" transform="translate(7 6)">
                            <circle id="oval1" fill="#9CD8C3" cx="2" cy="6" r="2"/>
                            <circle id="oval2" fill="#8CE8C3" cx="5" cy="2" r="2"/>
                        </g>

                        <g id="grp6" opacity="0" transform="translate(0 28)">
                            <circle id="oval1" fill="#CC8EF5" cx="2" cy="7" r="2"/>
                            <circle id="oval2" fill="#91D2FA" cx="3" cy="2" r="2"/>
                        </g>

                        <g id="grp3" opacity="0" transform="translate(52 28)">
                            <circle id="oval2" fill="#9CD8C3" cx="2" cy="7" r="2"/>
                            <circle id="oval1" fill="#8CE8C3" cx="4" cy="2" r="2"/>
                        </g>

                        <g id="grp2" opacity="0" transform="translate(44 6)">
                            <circle id="oval2" fill="#CC8EF5" cx="5" cy="6" r="2"/>
                            <circle id="oval1" fill="#CC8EF5" cx="2" cy="2" r="2"/>
                        </g>

                        <g id="grp5" opacity="0" transform="translate(14 50)">
                            <circle id="oval1" fill="#91D2FA" cx="6" cy="5" r="2"/>
                            <circle id="oval2" fill="#91D2FA" cx="2" cy="2" r="2"/>
                        </g>

                        <g id="grp4" opacity="0" transform="translate(35 50)">
                            <circle id="oval1" fill="#F48EA7" cx="6" cy="5" r="2"/>
                            <circle id="oval2" fill="#F48EA7" cx="2" cy="2" r="2"/>
                        </g>

                        <g id="grp1" opacity="0" transform="translate(24)">
                            <circle id="oval1" fill="#9FC7FA" cx="2.5" cy="3" r="2"/>
                            <circle id="oval2" fill="#9FC7FA" cx="7.5" cy="2" r="2"/>
                        </g>
                        </g>
                    </svg>
                    </label>
                </div>

            </li>
        </div>
    )
}

export default function MyPlants() {
    const token = useSelector(selectToken);
    const { data: plants, isLoading } = useGetFavoritePlantsQuery();

    if (!token) {
        return <p>You must be logged in to see your favorite plants.</p>
    }

    return (
        <div>
            <h2>My Plants:</h2>
            {isLoading && <p>Loading plants...</p>}
            {plants && (
                <ul>
                    {plants.map((plant) => (
                        <PlantCard key={plant.id} plant={plant} />
                    ))}
                </ul>
            )}
        </div>
    )
};