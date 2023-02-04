// Testimonials slider 
// Set data for the testimonials slider
const userData = [
    [
        "/PORTFOLIO-SITE/images/user1.jpg",
        "PORTFOLIO-SITE/images/user1.jpg",
        "/PORTFOLIO-SITE/images/user1.jpg",
        "/PORTFOLIO-SITE/images/user1.jpg"
    ],
    [
        "Really good programmer",
        "great performer",
        "teamworker",
        "Best Creator"
    ],
    [
        "Chao Lobi",
        "Hrishyak Kalita",
        "Sandeep Kharketri",
        "Sumit shah"
    ],
    [
        "CEO of Gogle",
        "Developer at Amzon",
        "Content Creator",
        "CEO of aple"
    ]
];

// Get the elements 
const pag = document.querySelectorAll(".pagination li");
const userImg = document.querySelector(".user-img");
const userText = document.querySelector(".user-text");
const userName = document.querySelector(".user-name");
const userTitle = document.querySelector(".user-title");

// loop through all pagination buttons (li)
for (let i = 0; i < pag.length; i++)
{
    // set click event to each
    pag[i].addEventListener('click', () => {
        //loop through all again
        for (let i = 0; i < pag.length; i++)
        {
            // Remove active class from all
            pag[i].classList.remove('pag-active');
        }
        // Re-assign active class to clicked button
        pag[i].classList.add('pag-active');

        // outputing the data depending on which button is clicked 
        // set image 
        userImg.src = userData[0][i];
        // set user text
        userText.innerHTML = userData[1][i];
        // set user name 
        userName.innerHTML = userData[2][i];
        // set user title
        userTitle.innerHTML = userData[3][i];
    });
}
