// import react from 'react';
import Notes from "../notes/Notes";
import { useMeQuery, selectToken } from "../auth/authSlice";
import { useSelector } from "react-redux";
import MyPlants from "../favorites/FavoritePlants";
import FavoriteStore from "../components/FavoriteStores";
import "./Account.less";
import "../notes/Note.less";

//error checking: isLoading return Loading...
//error checking: isError return 'something went wrong'

//Welcome the user
//There are three sections: My Plants, My Notes, Saved Stores
//Display My Plants for the plants that are saved by the user
//--display images and names for the saved plants and plants should be placed inlined

//Display My Notes for the notes that are created and saved by the user
//Have a 'Create Note' button on the far right to the My Notes
//--When the create button is clicked, an alert window will popup. Note componet would be inserted here.
//--diplay 'Edit' & 'Delete' button on the left side of the Note
//--When Edit is clicked, an alert window will popup. Note componet would be inserted here
//Display Saved Stored for the stores that are saved by the user
//--display 'Delete' button to the left of the Stores

//write a component function for account profile
export default function Account() {
    //define variable 'token' and assign selectToken(from useSelector) to it
    const token = useSelector(selectToken);

    //deconstruct data, isLoading, isError from userXXXprofileQuery for later use
    const { data: user, isLoading, isError } = useMeQuery();

    if (!token) {
        return <div>Please log in or register to access your account.</div>
    }

    //return the information and output to the webpage
    return isLoading ? (
        <p>Loading...</p>
    ) : (
        <main id="accountBody">
            <section className="welcome">
                <h1>Welcome, {user?.username}!</h1>
            </section>
            <section className="myplants">
                <MyPlants />
            </section>
            <section>
                <Notes />
            </section>
            <section className="mystores">
                <FavoriteStore />
            </section>
        </main>
    )

};