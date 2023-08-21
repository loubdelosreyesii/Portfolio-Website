const targetMenu = document.getElementById("menu");

const targetLIMenus = targetMenu.getElementsByTagName('a');


console.log(targetLIMenus);
console.log("execute Done!");

console.log(targetLIMenus.length);

let selected = "green";
function menuReset()
{
    for(let i =0 ; i<targetLIMenus.length;i++)
    {
        // alert(targetLIMenus[i].);
        targetLIMenus[i].style.color = "white";
    }
}
for(let i =0 ; i<targetLIMenus.length;i++)
{
    
    targetLIMenus[i].addEventListener("click",(event)=>{
        menuReset();
        targetLIMenus[i].style.color="#02a2ff";
    });
}