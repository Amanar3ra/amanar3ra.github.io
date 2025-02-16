/*Pagination Reference -> https://www.youtube.com/watch?v=mslD-bpvjiU*/
const projects = [
    {
        title: "Business Website",
        description: "Developed and Managed a website for mattress business.",
        link: "https://thebedroomboutiqueltd.com/",
        image: "./required/project1.png",
    },
    {
        title: "Music Player",
        description: "A music player system was built on MySQL database and python using Tkinter libraries and pygame module. The system performs various functions such as pause, play, next, previous, store playlists in database and is compatible on all devices.",
        link: "https://github.com/Amanar3ra/Music_Player.git",
        image: "./required/project2.png",
    },
    {
        title: "Navigational bot",
        description: "A navigational bot was built using Python, NLP, JavaScript, HTML & CSS for Humber College website to guide students to find specific resource.",
        link: "https://github.com/Amanar3ra/Chatbot-Project.git",
        image: "./required/project3.png",
    }
];

let currentPage = 1;

function renderProjects() {
    const container = document.getElementById("projects-container");
    container.innerHTML = ""; // Clear existing content

    // Get the project for the current page
    const project = projects[currentPage - 1];

    // Render the single project
    const projectCard = `
        <div class="flex flex-col items-center justify-center bg-white p-6 rounded shadow-md max-w-md mx-auto">
            <img src="${project.image}" alt="${project.title}" class="w-full h-80 object-cover rounded-lg" />
            <h3 class="text-2xl font-bold mt-4 text-center">${project.title}</h3>
            <p class="text-gray-600 mt-2 text-center">${project.description}</p>
            <a href="${project.link}" class="text-blue-600 hover:underline mt-4 block text-center" target="new">View Project</a>
        </div>
    `;
    container.innerHTML = projectCard;

    updatePaginationButtons(); // Update the button states
}

function updatePaginationButtons() {
    const prevButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");

    // Disable "Previous" button on the first project
    if (currentPage === 1) {
        prevButton.disabled = true;
        prevButton.classList.add("opacity-50", "cursor-not-allowed");
    } else {
        prevButton.disabled = false;
        prevButton.classList.remove("opacity-50", "cursor-not-allowed");
    }

    // Disable "Next" button on the last project
    if (currentPage === projects.length) {
        nextButton.disabled = true;
        nextButton.classList.add("opacity-50", "cursor-not-allowed");
    } else {
        nextButton.disabled = false;
        nextButton.classList.remove("opacity-50", "cursor-not-allowed");
    }
}

function nextPage() {
    if (currentPage < projects.length) {
        currentPage++;
        renderProjects();
    }
}

function previousPage() {
    if (currentPage > 1) {
        currentPage--;
        renderProjects();
    }
}

// Initialize rendering
document.addEventListener("DOMContentLoaded", () => {
    renderProjects();
});

function toggleMenu() {
    const mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.classList.toggle("hidden"); // Toggle the hidden class
}

function downloadCV() {
    const link = document.createElement('a');
    link.href = './required/Aman_Resume.pdf'
    link.download = 'Aman_Arora_CV.pdf'
    link.click();
}



