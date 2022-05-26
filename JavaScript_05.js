
//Create function to rest Form //

function resetForm() { document.getElementById("invForm").reset(); }

//CSS Functions to streamline form // 
function hideinvite() { document.getElementById("inviteeForm").style.display = "none";
                      document.getElementById("invForm").style.display = "block";
                      document.getElementById("restartButton").style.display ="block";
                      document.getElementById("invinButton").style.display ="block";
                      
                      elemLp();
                  }
 
 
//Set Up Iteration Varaible 
let invites = 0;
 
//pattern Rexex to prevent non-numbers
let invPattern = /^\d{1,2}$/;

//Number of invites validation
function addInvinIter(){     
            invites = document.getElementById("invinIter").value;
            maxInvites = invites;
    // Add message to form to indicate entries left 
   
    //Validation of invites requested
              
    if(invPattern.test(invites)){ if( invites >= 1) {if(invites <=10){hideinvite();
                                                                                 document.getElementById("foot").style.position="relative";
                                                                                 }
                                                                 else{ document.getElementById("inviteeForm").reset(); 
                                                                        document.getElementById("invinIter").placeholder = "****Entry Must Be 1-10****";
                                                                     }
                                                                } 
                                                        
                                                else{ document.getElementById("inviteeForm").reset(); 
                                                     document.getElementById("invinIter").placeholder = "****Entry Must Be 1-10****";
                                                    }
                                            }
                else{ document.getElementById("inviteeForm").reset(); 
                    document.getElementById("invinIter").placeholder = "****Entry Must Be 1-10****";
                    }
                                           
                        }

//Construct Form Dynamically
function AddElements(){
    //create line breaks for elements and horizontal rule to seperate enteries 
    var br = document.createElement("br");
    var hr = document.createElement("hr");
    //Create   Recipient
    
    var recLb = document.createElement("label");
    recLb.setAttribute("for","recipientName"+ct);
    recLb.textContent ="Recipient name:";
    var RecName =document.createElement("input");
    RecName.setAttribute ("type","text");
    RecName.setAttribute ("name","recipientName" +ct);
    
    //create orginization 
    var orgLb = document.createElement("label");
    orgLb.setAttribute("for","organizationName"+ct);
    orgLb.textContent ="Organization name:";
    var orgName =document.createElement("input");
    orgName.setAttribute ("type","text");
    orgName.setAttribute ("name","organizationName" +ct);
    
   //Create event Date 
    var eventLb = document.createElement("label");
    eventLb.setAttribute("for","eventDate"+ct);
    eventLb.textContent ="Event Date:";
    var eventName =document.createElement("input");
    eventName.setAttribute ("type","text");
    eventName.setAttribute ("name","eventDate" +ct);
   
    //create URL  
    var URLLb = document.createElement("label");
    URLLb.setAttribute("for","websiteURL"+ct);
    URLLb.textContent ="URL:";
    var URLName =document.createElement("input");
    URLName.setAttribute ("type","text");
    URLName.setAttribute ("name","websiteURL" +ct);
    
    //create Host 
    
    var hostLb = document.createElement("label");
    hostLb.setAttribute("for","hostName"+ct);
    hostLb.textContent ="Host name:";
    var hostName =document.createElement("input");
    hostName.setAttribute ("type","text");
    hostName.setAttribute ("name","hostName" +ct);
    
 
    //Gen custom Form 
    
 
    document.getElementById("invForm").appendChild(recLb);
    document.getElementById("invForm").appendChild(RecName);
    document.getElementById("invForm").appendChild(br);
    document.getElementById("invForm").appendChild(orgLb);
    document.getElementById("invForm").appendChild(orgName);
    document.getElementById("invForm").appendChild(br);
    document.getElementById("invForm").appendChild(eventLb);
    document.getElementById("invForm").appendChild(eventName);
    document.getElementById("invForm").appendChild(br);
    document.getElementById("invForm").appendChild(URLLb);
    document.getElementById("invForm").appendChild(URLName);
    document.getElementById("invForm").appendChild(br);
    document.getElementById("invForm").appendChild(hostLb);
    document.getElementById("invForm").appendChild(hostName);
    document.getElementById("invForm").appendChild(br);
    document.getElementById("invForm").appendChild(hr);
    document.getElementById("invForm").appendChild(br);
    
    
    
  
};


//Create Message Array and add values 

    let invinText = "";
    let messArray =[];
//Create Clean index to loop array and form elements
    let ct= 0;
 

    function addToArray(){

    
                            invinText = "Hello "+ document.forms["invForm"]["recipientName"+ct].value +"<br><br/> You have been invited to volunteer for an event held by "+
                        document.forms["invForm"]["organizationName"+ct].value +" on "+ document.forms["invForm"]["eventDate"+ct].value +". Please come to the following website: "+
                        document.forms["invForm"]["websiteURL"+ct].value+ "to sign up as a volunteer.<br/><br/> Thanks!<br/><br/>"+document.forms["invForm"]["hostName"+ct].value;             

                        messArray[messArray.length] = invinText; 
                    };
    
    
    
// loops for elements and message 

    function elemLp() {for (let i = 0; i< invites; i++){AddElements(); 
                        ct++; }
                        };

    function messageLp() {ct = 0;
                            for ( i = 0; i <invites;i++){addToArray(); ct++;}                                       
//hide invite Form
                            document.getElementById("invForm").style.display ="None";
//set place holder for HTML Message to be constructed 
                            let text = "";
//Loop over Array and build HTML
                            for (let i = 0; i < messArray.length; i++) {
                                                                         text +=messArray[i] + "<br><br><br><br>";
                                                                        }
// Insert HTML into Element                            
                            document.getElementById("placeholderContent").innerHTML = text;
                            document.getElementById("placeholderContent").style.display ="block";
                            document.getElementById("foot").style.position="relative";
                            document.getElementById("invinButton").style.display ="none";
                            };



//Create function to allow enter key to be used on Invitee Form instead of onclick button
function enterPress(){
                        if (event.keyCode == 13){ addInvinIter();
//prevent page reload on keypress                     
                                                  event.preventDefault();
                                                }
                     }



//Gallery JS Section//

//Preload Function
function imagePreloader(){
//Variables for image preload 

    let gallIndex = 0;
    let gallImage = new Image(); 
    let gallArray = new Array();

//Add Images to Array 
    gallArray[0] = "images/event.jpg"
    gallArray[1] = "images/silhouette.jpg"
    gallArray[2] = "images/work.jpg"
    gallArray[3] = "images/firefighter.jpg"
    gallArray[4] = "images/banner1.jpg"
    gallArray[5] = "images/banner2.jpg"
    gallArray[6] = "images/banner3.jpg"

//Loop images    to preload 

    for(gallIndex =0; gallIndex < gallIndex.length; gallIndex++){
                                                                gallImage.src=gallArray[gallIndex];
                                                                }
  
}
//on mouse in /out function 



function mouseOver(x){
       x.style.width = "280px";
};
function mouseOut(x){
         x.style.width = "180px"; 
      
}


//Banner Rotation 
var thisAd = 0;

function rotate() {
     var adImages = new Array("images/banner2.jpg","images/banner3.jpg");

     thisAd++;
     if (thisAd == adImages.length) {
        thisAd = 0;
     }
     document.getElementById("bannerImage").src = adImages[thisAd];

     setTimeout(rotate, 3 * 1000);
}

//registration form  
//regex patterns for each validation
  let phonePat = /^((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}$/;
 let phoneLenPat = /^[0-9]{10}$/;    
  let alphNumPat = /^[a-zA-Z0-9]*$/;
  let eightMinPat = /^.{8,}$/;
  let emailPat = /^\w+@[a-zA-Z0-9_]+?\.[a-zA-Z]{2,3}$/; 
  let namePat =/^[a-zA-Z]*$/;
//reg Form Function  

 function valRegForm() {
     
    let regUserName = document.forms["regForm"]["userName"].value;     
    let  regPassWord1 = document.forms["regForm"]["password"].value;   
    let  regPassWord2 = document.forms["regForm"]["passwordVerify"].value; 
    let  regFirstName = document.forms["regForm"]["firstName"].value;
    let  regLastName = document.forms["regForm"]["lastName"].value;
    let regEmail = document.forms["regForm"]["email"].value;
      let regphone = document.forms["regForm"]["phone"].value;
     // Required  fields indext to confirm page is ready to submit for required fields
     let reqCheckCt=0;
     // validation fields index to confirma all data is valid 
     let valCheckCt=0;
  
     
   
     //ReqCheck 




       if(regLastName == ""){document.getElementById("lastName").focus();
                             document.getElementById("lastReq").style.display="block"; 
                              reqCheckCt = reqCheckCt + 1;
                            }else {document.getElementById("lastReq").style.display="none";}
     
            if(regFirstName == ""){document.getElementById("firstName").focus();
                             document.getElementById("firstReq").style.display="block"; 
                              reqCheckCt = reqCheckCt + 1;
                                }else{document.getElementById("firstReq").style.display="none"; 
                                     }
     
            if(regPassWord2 == ""){document.getElementById("password2").focus();
                             document.getElementById("pass2Req").style.display="block";
                               reqCheckCt = reqCheckCt + 1;
                                  }else{document.getElementById("pass2Req").style.display="none";}
     
          if(regPassWord1 == ""){document.getElementById("password1").focus();
                             document.getElementById("passReq").style.display="block";
                             reqCheckCt = reqCheckCt + 1;
                                }else {document.getElementById("passReq").style.display="none";}
     
          if(regUserName == ""){  document.getElementById("userName").focus();
                             document.getElementById("userReq").style.display="block";
                             reqCheckCt = reqCheckCt + 1;
                                } else{document.getElementById("userReq").style.display="none";}
   
     
     //  Validation


      

     // check phone number if not blank normal, if match normal, if pattern fail for length check special char pat, else red,show error focus on error
     //Check Length for no special Chars  
     if(regphone == ""){document.getElementById("phone").style.outlineColor = "black";
                         document.getElementById("phoneError").style.display="none";}
        else{ if(phoneLenPat.test(regphone)){document.getElementById("phone").style.outlineColor = "black";
                                             document.getElementById("phoneError").style.display="none";} 
// Check pattern if dashes and parenthsies are used      
          else{ if(phonePat.test(regphone)){document.getElementById("phone").style.outlineColor = "black";
                                             document.getElementById("phoneError").style.display="none";} 
                else{  document.getElementById("phone").style.outlineColor = "red";
                        document.getElementById("phone").focus();
                         document.getElementById("phoneError").style.display="block" ;
                           valCheckCt = valCheckCt+1;}
            
                                                                    }

                                }
     //EMAIL VALIDATION 
     if(regEmail == ""){document.getElementById("email").style.outlineColor = "black";
                         document.getElementById("emailError").style.display="none";}     
     else{ if(emailPat.test(regEmail)){document.getElementById("phone").style.outlineColor = "black";
                                             document.getElementById("emailError").style.display="none";} 
          else{ document.getElementById("email").style.outlineColor = "red";
               document.getElementById("email").focus();
                                                                    
                                                                     document.getElementById("emailError").style.display="block" ;
                                                                     valCheckCt = valCheckCt+1;
            
                                                                    }
                                }
     
  //LAST NAME Validation   
     
                if(namePat.test(regLastName) ){ document.getElementById("lastName").style.outlineColor = "black";
                         document.getElementById("lastVal").style.display="none";} 
     
     else{document.getElementById("lastName").focus();
           document.getElementById("lastVal").style.display="block" ;
          document.getElementById("lastName").style.outlineColor = "red";
            valCheckCt = valCheckCt+1;
                                    }
     
     
//FIST NAME Validation 
             if(namePat.test(regFirstName) ){ document.getElementById("firstName").style.outlineColor = "black";
                         document.getElementById("firstVal").style.display="none";} 
     
     else{document.getElementById("firstName").focus();
           document.getElementById("firstVal").style.display="block" ;
          document.getElementById("firstName").style.outlineColor = "red";
            valCheckCt = valCheckCt+1;
                                    }
     
    
//Check password 2 for match 
     if(regPassWord1!==""){
     if(regPassWord2 == regPassWord1 && eightMinPat.test(regPassWord2)){ 
         document.getElementById("password2").style.outlineColor = "black"; 
        document.getElementById("pass2Val").style.display="none" ;
     
     } 
         
         
         else{document.getElementById("pass2Val").style.display="block" ;
            document.getElementById("password2").style.outlineColor = "red";
             document.getElementById("password2").focus();
                                                                                document.getElementById("password2").value = "";
                                                                               
                                                                                valCheckCt = valCheckCt+1;
                                                                                }
                            }
     
     //PASSWORD 1 VALIDATION AND COMPARISON
          if(regPassWord1!==""){
     
     if(eightMinPat.test(regPassWord1) ){ document.getElementById("password1").style.outlineColor = "black"; 
                                                                   document.getElementById("passVal").style.display="none" ;
     
     } else{document.getElementById("passVal").style.display="block" ;
            document.getElementById("password1").style.outlineColor = "red"; 
         document.getElementById("password1").focus();
                                                 document.getElementById("password1").value = "";
                                                  
                                                 valCheckCt = valCheckCt+1;
                                                }           
                            }
     

     
          //USERNAME VALIDATION
          if(alphNumPat.test(regUserName)){ if(regUserName !== ""){document.getElementById("userName").style.outlineColor = "black"; 
                                                                   document.getElementById("userVal").style.display="none" ;
                                                        }}
            else{  document.getElementById("userName").style.outlineColor = "red";                
                document.getElementById("userName").focus();
                document.getElementById("userVal").style.display="block" ; 
                valCheckCt = valCheckCt+1;
             
                }
     
     
     //SUBMIT Form Error Check  
     if(valCheckCt ==0 && reqCheckCt == 0){document.forms["regForm"].submit();}
     
     
     
     
     console.log(regUserName);
      console.log(regPassWord1);
      console.log(regPassWord2);
      console.log(regFirstName);
      console.log(regLastName);
     console.log(reqCheckCt);
     console.log(valCheckCt);
}
 //document.forms["regForm"].submit();

//Setting up cookies 

function setCookies(){
    document.cookie = "userName="+document.getElementById("userName").value;
    document.cookie = "password="+document.getElementById("password1").value;
document.cookie = "passwordVerify="+document.getElementById("password2").value;
  document.cookie = "firstName="+document.getElementById("firstName").value;
    document.cookie = "lastName="+document.getElementById("lastName").value;
  document.cookie = "email="+document.getElementById("email").value;
   document.cookie = "phone="+document.getElementById("phone").value;
//document.cookie = "signUpNewsletter="+document.getElementById("signUpNewsletter").value;
     
    
    window.alert(document.cookie);
    
}