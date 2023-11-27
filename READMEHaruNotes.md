Things we want our project to do/ have
1. Create Root folder
2. Create Api/ store
3. Create Components folder
4. Create Navigation Bar component
        1. Logo
            1. Create logo from “The Chosen Plant” “TheChosenPlant.com”
        2. Search box
            1. When clicked empty or filled will lead to search page
                TESTing
                    1. If a none english word is entered in search field => lead to search page with message saying "We couldn't find any plants with that information. Please try again or use out sorting features for ideas".
                    2. If exact plant name is entered => lead to search page with all plants with entered name showing on page with message "This is what we found"
                    3. If nothing is entered 
        3. Home button
            1. Takes user to home page with plant slideshow
        4. Login/logout button
            1. Button has toggle function
                1. Show login is user is not logged in 
                2. Show logout is user is logged in 
            2. Takes user to new page login/ register page
5. Create Footer Component
        1. Instagram link
        2. Facebook link
        3. Contact information
            1. Creators
                1. Pauline Pan
                2. Courtney Snyder
                3. Haru Grossman
6. Home page  (“/”)
    1. Navbar
    2.  Slideshow of plants that when click will lead to search page
        1. Look for carousel library’s
        2. When photo is clicked it takes user to search page with that filter field already sorting the rendered plant cards
    3. Footer 

1. Search page with dropdown filter menu like amazon (“/search”)
    1. Navbar
    2. Search drop down filter menu like Amazon
        1. Sunlight
        2. Watering
        3. Indoor/ outdoor
        4. Poisonous
        5. Dimension
    3. Results list (individual plant cards) (GET "/species" returns all plant)
        1. Image
        2. Discretion
            1. When plant card is selected it will take user to plant detail page
    4. Footer

2. Login/ Register page (“/login”)
    1. Navbar
    2. 
    3. Footer

3. Plant detail page (GET “/species/:id” returns plant by specific id ) (“/search/:id”)
    1. Navbar
    2. body
        1. Section 1
            1. Star  review button
        2. Section 2
            1. Section left
                1. Photo of plant
                2. Buttons “favorite” “store near me”
                    1. Will take user to google maps page
            2. Section right
                1. List items
                    1. Common name
                    2. Scientific name
                    3. Sunlight
                    4. Watering
                    5. Indoor/outdoor
                    6. Poisonous
                    7. Dimensions/ size
        3. Section 3 
            1. Reviews in list format from newest to oldest
    3. Footer

4. User Account page (“/account”)
    1. Navbar
    2. Body
        1. Section 1
            1. Welcome back “user name”
            2. My plants
                1. Favorited plants in carousel
            3. My Notes with “create note” button
                1. Item
                    1. Left section
                        1. Edit button
                            1. Will update the current changed note to backend for saving
                        2. Delete button
                            1. Will remove selected note from backend and page
                    2. Right section
                        1. Note paragraph
                2. Item 
                    1. Left section
                        1. Edit button
                            1. Will update the current changed note to backend for saving
                        2. Delete button
                            1. Will remove selected note from backend and page
                    2. Right section
                        1. Note paragrap
            4. Saved Stores
                1. Delete button 
                    1. Will  remove selected store from saved store list and from page
                2. Store information
                    1. Link to store website
                    2. Hours
                    3. Location  
    3. Footer

5. Google maps page (“/nearme”)
    1. Navbar
    2. Body
        1. Entered zipcode
        2. Section 1
            1. Section left 
                1. Google map on left
            2. Section right
                1. Close addresses rendered
                    1. With company website button
                    2. Save button to store preferences
        3. Section 2
            1. If you cannot find a store near you, here are the online stores that will deliver. </p>
                1. Delivery stores
                    1. Global store
                        1. Link to store site, when clicked reroute off our app to other site
                    2. National store
                        1. Link to store site, when clicked reroute off our app to other site
    3. footer