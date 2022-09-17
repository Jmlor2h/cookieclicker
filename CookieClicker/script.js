let cookies = 0;
let cookiePerClick = 1; 

let bakeryName = prompt("What's your Bakery name?");
document.write(bakeryName + "'s Bakery");

function addCookie() {
    cookies += cookiePerClick;
    document.getElementById('count').innerHTML = cookies;
}


document.getElementById('upgrade').addEventListener('click', function(){
    cookiePerClick ++;
    console.log(cookiePerClick);
}) 