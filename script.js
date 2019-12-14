const navbtn = document.querySelector(".menubar");
var c=0;
navbtn.addEventListener('click', function () {
    c++;
    
       if(c%2==1)
{   document.querySelector(".m2" ).style.display = "inline-block";
    document.querySelector(".m3" ).style.display = "inline-block";
    document.querySelector(".m4" ).style.display = "inline-block";
    document.querySelector(".m5" ).style.display = "inline-block";
    document.querySelector(".m6" ).style.display = "inline-block";
       }
    else
        {   document.querySelector(".m2" ).style.display = "none";
    document.querySelector(".m3" ).style.display = "none";
    document.querySelector(".m4" ).style.display = "none";
    document.querySelector(".m5" ).style.display = "none";
    document.querySelector(".m6" ).style.display = "none";
       }
        
});
const sendbtn = document.querySelector("#send");
const uname = document.querySelector("#uname");
const cmmntin = document.querySelector("#commentin");
const cmmntout = document.querySelector("#commentout");

sendbtn.addEventListener('click',sendcmmnt)

function sendcmmnt (){
    let name = uname.value;
    let cmmnt = cmmntin.value;
   if(name === '')
       {
           alert("enter your name");
       }
    if(cmmnt === '')
       {
           alert("enter comment");
       }
    else{
        var newli = document.createElement('li');
        
        newli.innerHTML = "<strong> <em>"+name+ "</em> </strong> " + " : " + cmmnt;
        cmmntout.appendChild(newli);
        uname.value = "";
        cmmntin.value = "";
    }
    
}


const nextbtn = document.querySelector(".next");
const prevbtn = document.querySelector(".prev");
const cvrimg = document.querySelector(".image"); 
var counter=1;

nextbtn.addEventListener('click',function(){
    if(counter<3)
        {     counter++;
            cvrimg.style.backgroundImage = 'url(images/pic' + counter + '.JPG)';
            
        }
})

prevbtn.addEventListener('click',function(){
    if(counter>1)
        {   
                counter--;
            cvrimg.style.backgroundImage = 'url(images/pic' + counter + '.JPG)';

        }
})