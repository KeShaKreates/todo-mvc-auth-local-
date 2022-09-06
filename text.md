For the checkboxsetup :
  -  Session data still isnt saving (when todos are moved in to doing or done they go back to to do when page refreshed)

  - It isn't passing in any data or content
    - It takes <li id="ul11" class="todoItem kanbannote-todo" data-id="6316b9927100ac60a89a8a5a">…</li>
    - This is the result in the Doing column li type="li" name="ul11" id="ul11"></li>
    - Open inspect and look at the elements after clicking to see 

  - Not able to click the exact to do wanted and move it to doing (it goes in order from top to bottom)
  
  - Delete btn broken due to it



CSS<
-Check for mobile- --- KeSha
-adjust sizing for all pages - media queries - adjust for desktop sizes.
-flexbox

Finish Css for all pagesssss --- KeSha - fonts - blue -> green - pastel pink --> spun cotton white - styling - mater (maybe add a line that says the date with the day of the week under Hi name welcome...?)

set a max # of todos ? ------- Olivia - container - flex - relative to container
-view height - containers can keep going.

Add to todos.ejs ? Ideas ? ---- MICAH
-switching card and welcome

Add to user card ? Ideas ? ---- MICAH
-box shadow - blue -> green - pastel pink --> spun cotton white

style alerts --- KeSha

HTML
Move delete button some where else ------ MICAH
-x maybe

**_using Heebo font from google_**

Javascript -
when submitting with empty fields it keeps loading ---Olivia
-fix by adding alert - form validation for completing

dragging and refreshing ---- Olivia - keep data to dragged column.

checkbox to move tasks into diff columns --- KeSha - copy and hide in todo

/_const { reset } = require("nodemon");_/
but really who... show yourself.

future ideas:

- opensource
- attach to 100devs
- kanboard for each class

Psuedo Code:
request thru - moving task from todo to in progress
-hit controller - to handle put request - update

- go to model to update item in database to in progress - boolean
  respond back to controller with updated status
  -controller hits our views - render with response that task is in progress

inprogress = todoItemapend('#ul2')
completed = todoItemappend('#ul3')

if (todoItem === inprogress){
do this function
}else ( completed)
then strike through when clicked

hebo-font
