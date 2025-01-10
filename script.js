const topics = [
    {
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202307/why-design-thinking-is-important-in-todays-job-industries-132433-16x9.jpg?VersionId=r3DkuIlkjSZI0KClaN79ksVBKui34xNG&size=690:388",
      title: "Design Thinking in Job Industries",
      description: "Why design thinking is becoming a crucial skill in modern job markets."
    },
    {
      img: "https://www.godigit.com/content/dam/godigit/directportal/en/sports-to-lose-weight.jpg",
      title: "Fitness and Weight Loss Tips",
      description: "Effective workouts and diets to help you lose weight and get fit."
    },
    {
      img: "https://www.fibe.in/_next/image/?url=https%3A%2F%2Faltcont.fibe.in%2Fwp-content%2Fuploads%2F2019%2F04%2FBudget-Travel.jpg&w=1920&q=75",
      title: "Budget Travel Guide",
      description: "How to travel the world without breaking the bank. Tips and tricks!"
    },
    {
      img: "https://rooman.net/wp-content/uploads/2024/05/innovation-in-the-tech-industry.png",
      title: "Tech Innovations in 2025",
      description: "Explore the latest trends in tech innovations shaping the future."
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3q4meyK9t48AxulnZhiKJbQKSCO4txaf_yA&s",
      title: "Top 10 Health Hacks",
      description: "Simple but effective health tips you can incorporate into your routine."
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVbJ0IndVzgA2iG-S4HJJLZI8qShQifD1CfQ&s",
      title: "Mastering Digital Marketing",
      description: "A guide to becoming proficient in digital marketing strategies."
    }
  ];
  
  let currentPage = 1;
  const topicsPerPage = 3;
  
  function displayTopics() {
    const start = (currentPage - 1) * topicsPerPage;
    const end = start + topicsPerPage;
    const topicsToDisplay = topics.slice(start, end);
  
    const grid = document.getElementById('topicsGrid');
    grid.innerHTML = ''; 
  
    topicsToDisplay.forEach(topic => {
      const topicCard = document.createElement('div');
      topicCard.classList.add('topic-card');
  
      topicCard.innerHTML = `
        <img src="${topic.img}" alt="${topic.title}">
        <h4>${topic.title}</h4>
        <p>${topic.description}</p>
      `;
  
      grid.appendChild(topicCard);
    });
  
    document.getElementById('prevBtn').disabled = currentPage === 1;
    document.getElementById('nextBtn').disabled = currentPage === Math.ceil(topics.length / topicsPerPage);
  }
  
  document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      displayTopics();
    }
  });
  
  document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentPage < Math.ceil(topics.length / topicsPerPage)) {
      currentPage++;
      displayTopics();
    }
  });
  
  
  displayTopics();
  
 
  
  document.addEventListener('DOMContentLoaded', () => {
    displayFeaturedPost();
  });
  let lastScrollTop = 0;
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
      // Scroll Down
      navbar.style.top = "-60px";  
    } else {
      // Scroll Up
      navbar.style.top = "0";
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
  });
    