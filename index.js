//smoothly scroll down to a click link on navigation bar
document.querySelectorAll('a[href = "#"]').forEach(anchor =>{
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelectorAll(this.getAttribute('href')).scrollIntoView()
    })
})

document.addEventListener('DOMContentLoaded', function() {
    var scrollToTopButton = document.getElementById('scrollToTopButton');

 // Show the button when the user scrolls down a certain distance
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) { // Adjust this value as needed
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

// Scroll to the top when the button is clicked
    scrollToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0
        });
    });
});

//navigation bar menu on less than 700px screens
let listMenu = document.getElementById('listMenu');
listMenu.style.maxHeight = '0px';
function toggleMenu(){
    if(listMenu.style.maxHeight == '0px'){
        listMenu.style.maxHeight = '130px';
    }else{
        listMenu.style.maxHeight = '0px';
    }
}

//get in touch button connecting to contacts section

document.getElementById('getInTouch').addEventListener('click', function() {
    document.querySelector('#contacts').scrollIntoView();
});


/*function sendMessage(){
    var details = {
        name: document.getElementById("f_name").value,
        email: document.getElementById("e_mail").value,
        phones: document.getElementById("phones_").value,
        message: document.getElementById("message_").value,
    };
    const serviceID = "service_mfe3c59";
    const templateID = "template_qwg8acr";

    emailjs.send(serviceID,templateID,details)
    .then (
        res =>{
            document.getElementById("f_name");
            document.getElementById("e_mail");
            document.getElementById("phones_");
            document.getElementById("message_");
            console.log(res);
            alert("Your message send successfully...");
        }).catch((err) => console.error(err));
}

const myNames = ['Neo', 'Theo','Jakes', 'Den'];
for(let i = 0; i < myNames.length; i++){
    console.log(myNames[i]);
}

const student = {
    name: 'Theo',
    class: 11,
    age: 17
}
for ( let key in student ) {
    console.log(student[key]);
}

const celebration = new Date(2023, 11, 1);
celebration.getDate();
celebration.getMonth();
celebration.getFullYear();



//////////////////
        // Define a function to be called when the button is clicked
        function handleClick() {
            alert('Button clicked!');
        }
        // Get a reference to the button element
        var button = document.getElementById('myButton');
        // Add an event listener to the button
        button.addEventListener('click', handleClick);

        

   
        function changeText() {
            // Get a reference to the paragraph element
            var paragraph = document.getElementById('myParagraph');
            // Change the text using innerHTML
            paragraph.innerHTML = 'This is the updated text.';
        }

        function loadContent(url) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    document.getElementById('content').innerHTML = this.responseText;
                }
            };
            xhttp.open('GET', url, true);
            xhttp.send();
        }
        */