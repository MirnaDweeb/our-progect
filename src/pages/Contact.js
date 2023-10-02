import React from "react";
import'./Contact.css'
function Contact() {
    return (
        <div className="podycont">
            <body class="w3-light-gray">
    <div class="contact">
        <h1> CONTACT ME</h1>
        <p>Lorem ipsum is simply dummy text <br/> of the printing</p>
         </div>



<div class="close">
    
    <div class="content first sec1">
       
                    <h4 class="info"> contact info</h4> 
                        <p> <i class="fas fa-map-marker-alt one "></i>&nbsp;  &nbsp;  Rocked Road , New York , USA</p>
                        <p> <i class="fas fa-envelope one"></i>  &nbsp; steve@gmail.com </p>
                        <p> <i class="fa-solid fa-phone one"></i>  &nbsp;(031)555 679<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(031)555 670  </p>
                        <p> <i class="fas fa-globe one "></i>  &nbsp; Steveballmer.com </p>
        <h3 class="Follow">Follow Me</h3>

        <i class="fab fa-facebook two"> &nbsp;  </i>
        <i class="fab fa-twitter two">  &nbsp;  </i>
        <i class="fab fa-instagram two">  &nbsp; </i>
    </div>
   

     
{/* <!-- <div class="w3-twothird"> --> */}
    <div class="contact1">
    <label class="mystyle" form="lname"> NAME </label>
    <br/>
    <input  class="inputs" type="text" name="fname" id="fname"required placeholder="Type your name"/>
    <br/>
   <label class="mystyle"  form="NUMBER"> PHONE NUMBER</label>  <span> <label  class="mystyle emaill" form="email">EMAIL</label></span>
    <br/>
    <input class="num" type="number" name="number" id="number"required placeholder="Type your phone number "/>
   &nbsp; &nbsp;
    <input class="email" type="email" id="email" name="email" placeholder="Type your email address"/>
    <br/>
    <label class="mystyle"  form="note">YOUR MESSAGE</label>
        <br/>
        <textarea  class="mytextarea" cols="50"rows="8" id="notes" placeholder="Type your message here"></textarea>
        <br/>
        <a class="btn" href="#">SEND MESSAGE</a>
       
        <div class="info"> 
           
        </div>
        </div>   
     </div>


    <div class="last">
<img src="./images/4.PNG" alt=""/>
<p class="address">Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br/> sed diam nonummy nibh euismod tincidunt</p>
<div class= "space">
 <i class="fab fa-facebook-f three"></i> 
 <i class="fab fa-twitter three"></i>
 <i class="fab fa-linkedin-in three"></i>
 <i class="fab fa-instagram three" ></i>
 <i class="fab fa-behance three"></i>
 <i class="fab fa-google-plus-g three"></i>
 </div>
    </div>
    <hr class="hrr"/>
    <p class="Copyrightt">Copyright <span><i class="fas fa-copyright" ></i></span>2021<strong class="col" >steve </strong><span class="word">Balimer</span></p>

</body>


        </div>
    )
}
export default Contact