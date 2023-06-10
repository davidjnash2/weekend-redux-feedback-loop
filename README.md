# Project Name

Weekend Redux Feedback Loop
## Description

Building portal for user to submit daily feedback on material comprehension. Built database in PostgresSQL, and used Node, Node pg, and Express for server-side routers, all for back end functionality. For front end, used Javascript, Axios, React, and React-Redux, to creat SPA with complete input functionality and state tracking across multiple url paths.



##

<!-- BUILD INFO GOES HERE -->



Front End:
    -SPA/Components & Routes
        -Routes
            /feeling
                -How are you feeling today?
                    -number input, 1-5, required
            /understanding
                -How well are you understanding the content?
                    -number input, 1-5, required
            /support
                -How well are you being supported?
                    -number input, 1-5, required
            /comments
                -Any comments you want to leave?
                    -text, not required
            /review
                -Review:
                    -all input values (state)
                    -submit button
                        -save to database
                        -take to submission success page (NEW ROUTE)
                            -Submission success page
                            -success message
                            -button to submit new feedback
                                -reset all state data & return to step 1
    -Redux to store input values (state, reducers, combine reducers, components)
        -reducers for: feeling, understanding, support, comments 
        -"survey" to hold all
        -

Back End:
    x-serverjs
    -routerjs
        -post only? for this 
    x-database
        x-table
    



    STRETCH GOALS
NOTE: These stretch goals are intended to be completed in order.

UPDATE SCORES
Allow the user to go back to a previous step and change their score. You still need to disallow empty values!

STYLING
Improve the styling of the app using Material-UI. This might include cards, snackbars, buttons, a nav bar, icons, and/or a theme.

ADMIN SECTION
Display all of the existing feedback at the route /admin. The most recently added feedback should appear at the top of the list. Allow the user to delete existing feedback. Prompt the user to confirm prior to deleting the feedback from the database.
    -useEffect to load list
    -get to pull list
    -1 component for list (map), 1 component for item
    -add import to App