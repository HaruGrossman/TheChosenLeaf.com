//import everything needed here
//import useState from react
//import useXXXQuery from slice
//import css file
// import { useSelector } from "react-redux";
// import { selectToken } from "../auth/authSlice";
import { useGetAllPlantsQuery } from "./plantSlice";

export default function Plants() {
    const { data } = useGetAllPlantsQuery();

    console.log(useGetAllPlantsQuery());
    return(
        <h1>Plants</h1>
    )
}

//create compenent function
//deconstruct data, isLoading, isError from useXXXQuery slice
//error checking: isLoading return loading...
//errir checking: isError return 'something went wrong

//deconstruct sets of filters, setFilters for all the seach criterias from useState
//create a handleSubmit button once the 'Apply filter button' is clicked
//  -- this function would gather user selections from the dropdown menu
//  -- this function would pass down the selctions to place a GET request

//'return' for webpage layout and display search result
//There are two sections here:
//--1. Search with several drop down search criterias
//Search section drop down criterias:
//  -- Category: Hanging, Fern, Flower, Palm, Cactus And Succulent, Bromeliad, Anthurium, Foliage Plant
//  -- Watering: Frequent, Average, Less Frequent, Infrequent
//  -- Toleratedlight: Direct sunlight, Diffused
//  -- temperature: min, max
//  -- Climate: Subtropical, Tropical, Tropical Humid, Arid Tropical
//  -- Create 'Apply filter button' on the right side of the last search dropdown

//--2. Result
//Result section first displays what's clicked on the Homepage
//or search result for what's entered in the seach box
//Or display everything when nothing is entered into the search box
//When user clicks on the 'Apply filter button' the result section will display the results.

// export default function Search(){
//     return (<h1>Search All Plants</h1>)
// };