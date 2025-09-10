document.addEventListener("DOMContentLoaded", () => {
    // --- Configuration: Set your GitHub repository name here ---
    const repoName = 'KRC-WEBSITE'; // Example: 'KRC-WEBSITE'
    const basePath = window.location.pathname.includes(`/${repoName}/`) ? `/${repoName}` : '';

    // --- Function to dynamically load HTML content (Navbar/Footer) ---
    const loadComponent = (url, placeholderId, callback) => {
        fetch(url)
            .then(response => {
                if (!response.ok) throw new Error(`Failed to load ${url}`);
                return response.text();
            })
            .then(data => {
                const placeholder = document.getElementById(placeholderId);
                if (placeholder) {
                    placeholder.innerHTML = data;
                    if (callback) callback(); // Run the callback function after loading
                }
            })
            .catch(error => console.error(`Error loading component for ${placeholderId}:`, error));
    };

    // --- Load Navbar and then fix its links ---
    loadComponent(`${basePath}/partials/navbar.html`, 'navbar-placeholder', () => {
        // This function runs AFTER the navbar is loaded
        const navLinks = document.querySelectorAll('#navbar-placeholder a');
        navLinks.forEach(link => {
            const originalHref = link.getAttribute('href');
            // Only modify internal links that start with '/'
            if (originalHref && originalHref.startsWith('/')) {
                link.setAttribute('href', `${basePath}${originalHref}`);
            }
        });
    });

    // --- Load Footer ---
    loadComponent(`${basePath}/partials/footer.html`, 'footer-placeholder');


    // --- Initialize Charts (only if the chart elements exist on the page) ---
    const streamPieChart = document.getElementById('streamPieChart');
    if (streamPieChart) {
        new Chart(streamPieChart.getContext('2d'), {
            type: 'pie',
            data: {
                labels: ['Science', 'Commerce', 'Arts'],
                datasets: [{ data: [45, 30, 25], backgroundColor: ['#007bff', '#28a745', '#ffc107'] }]
            },
            options: { responsive: true, plugins: { legend: { position: 'bottom' } } }
        });
    }

    const programBarChart = document.getElementById('programBarChart');
    if (programBarChart) {
        new Chart(programBarChart.getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['Naval Cadet', 'Scouting', 'Cricket', 'Workshops'],
                datasets: [{ label: 'Number of Students', data: [120, 400, 80, 150], backgroundColor: ['#17a2b8', '#6f42c1', '#fd7e14', '#20c997'] }]
            },
            options: { responsive: true, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }
        });
    }
});