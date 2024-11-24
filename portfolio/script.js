// Tab switching functionality in About section
function opentab(tabName) {
    const tabLinks = document.querySelectorAll('.tab-links');
    const tabContents = document.querySelectorAll('.tab-contents');

    tabLinks.forEach(link => link.classList.remove('active-link'));
    tabContents.forEach(content => content.classList.remove('active-tab'));

    document.querySelector(`.tab-links[onclick="opentab('${tabName}')"]`).classList.add('active-link');
    document.getElementById(tabName).classList.add('active-tab');
}

// Filter projects by category
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        const projects = document.querySelectorAll('.work');

        // Update active filter button styling
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Show/Hide projects based on category
        projects.forEach(project => {
            if (category === 'all' || project.getAttribute('data-category') === category) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    });
});

// Update footer with the current month and year
const currentDateElement = document.getElementById("current-date");
const date = new Date();

const options = { year: 'numeric', month: 'long' };
currentDateElement.textContent = date.toLocaleDateString('en-US', options);

// Smooth scrolling for navigation links
document.querySelectorAll('#nav-menu a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Toggle responsive menu visibility (if menu-toggle button exists)
const navMenu = document.getElementById('nav-menu');
const menuToggle = document.querySelector('.menu-toggle');
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}
