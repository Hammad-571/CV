AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "I Quiz patente",
    cardImage: "assets/images/project-page/logo.png",
    description: "A quiz app built using bootstrap.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://www.iquizpatente.com/home.html",
    Githublink: "https://github.com/Hammad-571/patenteBilingua",
  },
  {
    title: "Quiz app Sistemi Biometrici",
    cardImage: "assets/images/project-page/quiz.jpg",
    description: "A quiz app for test of biometric system built using bootstrap.",
    tagimg: "https://image.flaticon.com/icons/png/512/643/643350.png",
    Previewlink: "https://hammad-571.github.io/bio/1/",
    Githublink: "https://github.com/Hammad-571/bio",
  },
  {
    title: "Quiz app Complementi di Sistemi Biometrici",
    cardImage: "assets/images/project-page/quiz.jpg",
    description: "A quiz app for test of complements of biometric system built using bootstrap.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://hammad-571.github.io/compbio/",
    Githublink: "https://github.com/Hammad-571/compbio",
  },
  {
    title: "GitHub profile",
    cardImage: "assets/images/project-page/git.png",
    description: "My GitHub page.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://github.com/Hammad-571/Hammad-571",
    Githublink: "https://github.com/Hammad-571/Hammad-571",
  },
  {
    title: "Snake game",
    cardImage: "assets/images/project-page/snake.jpg",
    description: "Snake game in java.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "https://github.com/Hammad-571/Snake",
  },
  {
    title: "Mobi Air",
    cardImage: "assets/images/project-page/mobi.jpg",
    description: "Website for mobile repair shop.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "http://www.mobiair.pt/",
    Githublink: "https://github.com/Hammad-571/mobi.pt",
  },
  {
    title: "Spotify clone",
    cardImage: "assets/images/project-page/spotify.png",
    description: "Spotify clone that uses Spotify api, MongoDB and bootstrap",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "https://github.com/Hammad-571/project",
  },
  {
    title: "JAVA Unique word",
    cardImage: "assets/images/project-page/java.png",
    description: "Java program that reads the excel file and write unique words on an excel file",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "https://github.com/Hammad-571/Unique_Word",
  },
  {
    title: "JAVA",
    cardImage: "assets/images/project-page/java.png",
    description: "Differnet Java programs.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "https://github.com/Hammad-571/Exercise-Java",
  },
  {
    title: "Perfect Eye",
    cardImage: "assets/images/project-page/eye.jpg",
    description: "Online store that Oil and Herbal medicine.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "https://github.com/Hammad-571/perfectEye",
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, Previewlink, Githublink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
                </div>
            <ul class="menu-content"><br>
                  <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                  <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
