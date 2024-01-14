const form = document.querySelector("form");
const firstName = document.getElementById("name1");
const lastName = document.getElementById("name2");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");


function sendEmail(){
    const bodyMessage = `Full name: ${firstName.value + " " + lastName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${message.value}`
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "readeasy964@gmail.com",
        Password : "9BED3D74874597668F484B79C5427A02A0F2",
        To : "readeasy964@gmail.com",
        From : "readeasy964@gmail.com",
        Subject : "New Contact From Enquiry",
        Body : bodyMessage

    })
    .then(
        message => {
            if(message == "OK"){
                Swal.fire({
                    title: "Success!",
                    text: "Message send successfully!",
                    icon: "success"
                  });
            }
        }
    );
}

function checkInputs(){
    const items = document.querySelectorAll(".item");

    for(const item of items){
         if(item.value == ""){
            item.classList.add("error");
            item.parentElement.classList.add("error");
         }
         item.addEventListener("keyup" , () => {
            if(item.value != " "){
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
             }
             else{
                item.classList.add("error");
                item.parentElement.classList.add("error");
             }
         });
    }
    
}


form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

    sendEmail();
})