# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).


Reflection/feedback to-do
[ ] STRETCH: after finishing project, update this readme to be a description not a checklist
[X] write checklist
[X] install needed packages:
    [X] npm install
    [X] npm install redux react-redux
    [X] npm install redux-logger
    [X] npm install react-router-dom
    [X] npm install @material-ui/core
    [X] npm audit fix --force
[X] create database
    [ ] STRETCH: check if db exists, if not run create statement??
[X] create table
    [ ] STRETCH: check if table exists, if not run create statement??
[X] put some sample data in db
[X] server-side routes:
    [ ] '/api/feedback'
    [X] POST
        [X] insert to table
        [ ] STRETCH: make db
        [ ] STRETCH: make table
    [X] GET
        [X] pull data from table
        [ ] STRETCH: check if db exists
        [ ] STRETCH: check if table exists
    [X] DELETE
    [X] PUT
[ ] client-side axios routes:
    [ ] POST
        [ ] insert to table
        [ ] STRETCH: make db
        [ ] STRETCH: make table
    [ ] GET
        [ ] pull data from table
            [ ] use redux to store data across views
        [ ] STRETCH: check if db exists
        [ ] STRETCH: check if table exists
    [ ] DELETE
    [ ] PUT
[ ] create a multi-part form
    [ ] create components directly in master; hammer out component contents in branches
    [X] Next/Submit buttons call function with useHistory to skip to the next screen
    [X] Screen A: feelings
        [X] tell the user to enter a number 1-5
        [X] check to make sure they entered a number
    [X] Screen B: understanding
        [X] tell the user to enter a number 1-5
        [X] check to make sure they entered a number
    [X] Screen C: support
        [X] tell the user to enter a number 1-5
        [X] check to make sure they entered a number
    [X] Screen D: comments
        [X] tell the user to enter comment of a certain length
        [X] optional
    [X] Screen E: confirmation before submitting
        [ ] conditional render: gray out submit button if missing required info - incomplete
        [ ] navigate to previous screens to edit info
    [X] Screen F: admin - list all feedback
        [ ] most recent first
        [ ] DELETE with confirmation
[ ] STRETCH:
    [ ] styling - material-UI
        [ ] cards, snackbars, buttons, a nav bar, icons, and/or a theme. 
    [ ] flag existing feedback for further review
    [ ] deploy to Heroku