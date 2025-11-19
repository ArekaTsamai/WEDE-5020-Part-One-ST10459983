function validateForm() {
    let name=document.forms["contactForm"]["fname"].value;
    let email=document.forms["contactform"]["email"].value;
    let nameError=document.forms["getElementById"]("nameErrror");
    
nameError.textcontent="";
emailError.textContent="";

if(name==""){
    nameError.textContent="name must be"
    return false;//prevents from submit
}
if (email==""){
    nameError.textContent="email must be ('@')"
    return false;
}
//basic email formart check
if(!email,includes("@") || !email.includes)
    emailError.textcontent="please enter"
return false;
} 
{alert("form submitted successfully!");
return true;//allows form submission
}

//get the modal, buttom, and close buttom//
let modal= document.getElementById("flower")
let btn= document.getElementById("open")
let span= document.getElementById("close")

//when the user clicks button
btn.onclick=Function() 
  {  modal.style.display="block";}

//when the user clicks on (x)
span.onclick=function (){
    modal.style.display="none";
}
//when the user clicks anywhere outside
window.onclick=function(event){
    if(event.target==modal) {
        modal.style.display="none";
    }
}

//navigation menu toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.queryselector ('nav ul');

if (navToggle){
    navToggle.addEventListener('click'),()=>{
        navMenu.classlist.toggle('active');
    }
}

//inquiry form submission handling
const inquiryForm=document.getElementById('inquiry-form');

if(inquiryForm){
    inquiryForm.addEventListener ('submit') ,(e)=> {
        e.preventDefault();
        const name=document.getElementById('name').value;
        const email=document.getElementById('email').value;
        const message=document.getElementById('message').value;
    }
}
//send form data to server or email using AJAX
fetch ('/send-inquiries'),{
    method:'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({name, email,message}),

}
.then((resond) => respond.json())
.then ((data)=>console.log(data))
.catch((error)=>console.error(erorr));

//clear fields
document.getElementById('name').value='';
document.getElementById('email').value='';
document.getElementById('message').value='';

//product page functionality
const productItem=document.getElementById('productItem');

if(productItem){
    //add listeners to product items
    const productItems= productItem.flowers;
    Array.from(productItems).forEach((item)=> {
        item.addEventListener('click',()=>  {
            //add logic to display product details
            console.log('product clicked :', item);
        });

        });
    }
    //smooth scrolling for  anchor links
    const anchorlinks= document.querySelectorAll('a[href*="#"]');

    anchorlinks.forEach((links)=> {
        links.addEventListener('click',(e)=> {
            e.preventDefault();
            const targetId=links.getAttribute('href').split('#')[1];
            const targetElement=document.getElementById(targetId);
            targetElement.scrollingintoView({behavior: 'smooth'});
        });
    });

