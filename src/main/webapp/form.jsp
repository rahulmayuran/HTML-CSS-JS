<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To get Form data</title>
</head>
<style>
    *{
        margin: 0;
    }
    html,body{
        height: 100%;
        font-family: Verdana, Geneva, Tahoma, sans-serif
    }
    h1{
        color: green;
        margin-left: 2em;
        margin-bottom: 2em
    }
    ul>li>p{
        font-weight: bold;
        margin-left: 3em;
        margin-right: 3em;
        padding: 5px;
        background-color: lightseagreen;
        border: 2px outset lightgray;
        color: white
    }
    ul>li{
        list-style: none;
        text-decoration: none;
        padding: 2px
    }
</style>
<body>

    <h1>The form data is retrieved</h1>

    <div> 
    <ul>
        <li>
            <p><b>Hidden order : </b>
                <%= request.getParameter("activity-order") %></p>
        </li>
        <li>
            <p>
                <b>Location : </b>
            <%= request.getParameter("location") %>
            </p>
        </li>
        <li>
            <p>
                <b>First Name:</b>
           <%= request.getParameter("firstName")%>
             </p>
        </li>
        <li>
            <p>
                <b>Last  Name:</b>
           <%= request.getParameter("lastName")%>
            </p>
        </li>
        <li>
            <p>
                <b>Address :</b>
            <%= request.getParameter("address")%>
            </p>
        </li>
        <li>
            <p>
                <b>City :</b>
                <%= request.getParameter("Cities") %>
            </p>
        </li>
        <li>
            <p>
                <b>Comments :</b>
                <%= request.getParameter("comments") %>
            </p>
        </li>
     </ul>
    </div>
</body>
</html>