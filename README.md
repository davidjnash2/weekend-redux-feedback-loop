# Project Name

Weekend Redux Feedback Loop
## Description

Building portal for user to submit daily feedback on material comprehension. Built database in PostgresSQL, and used Node, Node pg, and Express for server-side routers, all for back end functionality. For front end, used Javascript, Axios, React, and React-Redux, to creat SPA with complete input functionality and state tracking across multiple url paths.



##

<!-- BUILD INFO GOES HERE -->



Front End:
    X-SPA/Components & Routes
        X-Routes
            x/feeling
                x-How are you feeling today?
                x    -number input, 1-5, required
            x/understanding
            x    -How well are you understanding the content?
            x        -number input, 1-5, required
            x/support
            x    -How well are you being supported?
            x        -number input, 1-5, required
            x/comments
            x    -Any comments you want to leave?
            x        -text, not required
            x/review
            x    -Review:
            x        -all input values (state)
            x        -submit button
                        X-save to database
                        x-take to submission success page
                        x-(NEW ROUTE)
                            x-Submission success page
                            x-success message
                            x-button to submit new feedback
DONE! STILL NEED TO DO THIS!!!                                X-reset all state data & return to step 1

    X-Redux to store input values (state, reducers, combine reducers, components)
        x-reducers for: feeling, understanding, support, comments 
        X-"survey" to hold all
        

    x-Install remaining needed dependencies




Back End:
    x-serverjs
    x-routerjs
        X-post only? for this 
    x-database
        x-table
    



    STRETCH GOALS
NOTE: These stretch goals are intended to be completed in order.

>>><<<DONE!!!>>><<<UPDATE SCORES
Allow the user to go back to a previous step and change their score. You still need to disallow empty values!

STYLING
Improve the styling of the app using Material-UI. This might include cards, snackbars, buttons, a nav bar, icons, and/or a theme.

ADMIN SECTION
Display all of the existing feedback at the route /admin. The most recently added feedback should appear at the top of the list. Allow the user to delete existing feedback. Prompt the user to confirm prior to deleting the feedback from the database.
    -useEffect to load list
    -get to pull list
    -1 component for list (map), 1 component for item
    -add import to App