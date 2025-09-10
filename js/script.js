// Navbar
document.addEventListener("DOMContentLoaded", () => {
  // Navbar
  fetch("../pages/navbar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar-placeholder").innerHTML = data;
    })
    .catch(error => console.error("Error loading navbar:", error));

  // Footer
  fetch("../pages/footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer-placeholder").innerHTML = data;
    })
    .catch(error => console.error("Error loading footer:", error));
});



window.addEventListener('DOMContentLoaded', function () {
  // Pie Chart: Students per Stream
  const ctxPie = document.getElementById('streamPieChart').getContext('2d');
  new Chart(ctxPie, {
    type: 'pie',
    data: {
      labels: ['Science', 'Commerce', 'Arts'],
      datasets: [{
        label: 'Students per Stream',
        data: [45, 30, 25], 
        backgroundColor: ['#007bff', '#28a745', '#ffc107']
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { position: 'bottom' } }
    }
  });

  // Bar Chart: Program Participation
  const ctxBar = document.getElementById('programBarChart').getContext('2d');
  new Chart(ctxBar, {
    type: 'bar',
    data: {
      labels: ['Naval Cadet', 'Scouting', 'Cricket', 'Workshops'],
      datasets: [{
        label: 'Number of Students',
        data: [120, 400, 80, 150], 
        backgroundColor: ['#17a2b8', '#6f42c1', '#fd7e14', '#20c997']
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: { y: { beginAtZero: true } }
    }
  });
});



// Card Hover
const cards = document.getElementsByClassName('card');

for (let i = 0; i < cards.length; i++) {
  const card = cards[i];

  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.05)'; 
    card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.4)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)'; // revert size
    card.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)'; 
  });
}
