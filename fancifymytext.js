function biggerText(){
    // unsure if i needed to keep the initial alert when building this function
    // kept alert just in case, functionality of making text = 24pt works
    alert("Hello, world!"); 
    document.getElementById("textInput").style.fontSize = "24pt";
}

function fancyText(){
    let userText = document.getElementById("textInput");

    if(document.getElementById("fancy").checked)
    {
        userText.style.fontWeight = "bold";
        userText.style.color = "blue";
        userText.style.textDecoration = "underline";
    }
    else if(document.getElementById("boring").checked)
    {
        userText.style.fontWeight = "normal";
        userText.style.color = "black";
        userText.style.textDecoration = "none";
    }
    else
    {
        // just in case
        alert("Error! Button function not implemented!");
    }

}

function mooText(){
    let userText = document.getElementById("textInput");
    let newText = userText.value.toUpperCase();
    let parts = newText.split(".");

    newText = parts.join("-Moo. ");

    // incase there is no period at the end
    if (!newText.endsWith("-Moo. "))
    {
        newText += "-Moo. "
    }

    userText.value = newText;

}