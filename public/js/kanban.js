







    /*<div id="info-top">
        <header>Hi <%= user.userName %>, Welcome to Your Kanban Board!</header>
        <div class="card light blue-text text-darken-4">
            <img src="IMG_8766.PNG" alt="User image">
            <h2><%= user.userName %> has <%= left %> things left to do.</h2>
            <a href="/logout">Logout</a>
        </div>
    </div>
    <div id="kanban-container">
        <section class="kanbancolumn">
            <section class="kanbantitle">To Do</section>
                <button id="displayandhide">Create a new task</button>

                <form action="/todos/createTodo" method='POST' id="form">
                    <span> 
                        <label for="task">Task</label>
                        <input id="inputtodo" type="text" placeholder="Enter a to do task" name='title'>
                    </span>
                    <span>
                        <label for="description">Description</label>
                        <textarea id ="descriptiontodo" placeholder="Enter a description" name="description"></textarea>
                    </span>
                    <input id="submitbtn" type="submit">
                </form>

            <div class="list-container">
                <ul id="uL1">
                <% todos.forEach( el => { %>
                        <li id="ul11" class='todoItem kanbannote-todo'  data-id='<%=el._id%>'>
                            <span id="task-title"><%= el.title %></span>
                            <span id="task-description"><%= el.description %></span>
                            <span class='del'> Delete </span>
                            <label>
                                <input type="checkbox" class="filled-in"   )"    name="accept" />
                                <span class="check">Move to the next column</span>
                            </label>
                           
                        </li>
                <% }) %>    
                </ul>

                
                
                 

                </section>
            
                <section class="kanbancolumn">
                    <section class="kanbantitle">Doing</section>
                    <ul id="uL2">  
                        <li id="ul21" class='todoItem kanbannote-todo' data-id=''>
                            <span id="task-title"></span>
                            <span id="task-description"></span>
                            <span class='del'> </span>
                        </li>
                    </ul>
                </section>
            
                <section class="kanbancolumn">
                    <section class="kanbantitle">Done</section>
                    <ul id="uL3">
                        <li id="ul31" class='todoItem kanbannote-todo' data-id=''>
                            <span id="task-title"></span>
                            <span id="task-description"></span>
                            <span class='del'> </span>
                        </li>
                    </ul>
                </section>
            </div> */