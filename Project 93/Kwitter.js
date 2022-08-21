function addUser()
{
    var name = document.getElementById("user1name").value
    localStorage.setItem("Username",name);

    if(name == 0 || name == "")
    {
        window.alert("Please enter your username in the box")
    }
    else
    {
        window.location = "Kwitter_room.html"
    }

    
}