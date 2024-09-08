const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['5k', '10k', '15k', '20k', '25k', '30k', '35k', '40k', '45k', '50k', '55k', '60k'],
    datasets: [{
      label: 'Sales',
      data: [25, 30, 40, 50, 60, 55, 45, 50, 60, 65, 70, 65, 60, 65, 70, 75, 80, 85, 90, 95, 100, 90, 80, 75, 70, 65, 60, 65, 70, 75, 80, 85, 90, 95, 100, 90, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 90, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5],
      borderColor: '#007bff',
      borderWidth: 2,
      pointRadius: 5,
      pointBackgroundColor: '#007bff'
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

const tasks = document.querySelectorAll('.task');

tasks.forEach(task => {
    task.addEventListener('click', () => {
        // Toggle the active class on the clicked task
        task.classList.toggle('active');

        // Update the check box state
        const checkbox = task.querySelector('input');
        checkbox.checked = !checkbox.checked;
    });
});

// Select all message buttons
const messageButtons = document.querySelectorAll('.message-btn');

// Add event listeners to message buttons
messageButtons.forEach(button => {
    button.addEventListener('click', function() {
        const name = this.parentElement.querySelector('h3').innerText;
        alert(`You clicked "Message" for ${name}`);
    });
});

// Handle "Add New Contact" button click
document.querySelector('.add-contact-btn').addEventListener('click', function() {
    const newContact = `
        <div class="contact-card">
            <img src="new-contact.jpg" alt="New Contact">
            <h3>New Contact</h3>
            <p>new.email@example.com</p>
            <button class="message-btn">Message</button>
        </div>`;
    
    // Append the new contact card to the contact list
    document.querySelector('.contactxs').insertAdjacentHTML('beforeend', newContact);

    // Add event listener for the new "Message" button
    document.querySelectorAll('.message-btn').forEach(button => {
        button.addEventListener('click', function() {
            const name = this.parentElement.querySelector('h3').innerText;
            alert(`You clicked "Message" for ${name}`);
        });
    });
});

const sendButton = document.querySelector('.send');

sendButton.addEventListener('click', () => {
  // Add your code here to handle the send button click
  console.log('Send button clicked!');
});

// Select necessary elements
const addEventBtn = document.querySelector('.add-event-btn');
const eventsList = document.querySelector('.events-list');

// Function to add a new event
function addNewEvent() {
    // Prompt the user for event details
    const eventName = prompt('Enter Event Name:');
    const eventDate = prompt('Enter Event Date (e.g., 16 October 2024):');
    const eventLocation = prompt('Enter Event Location:');

    // If user provides all the details, create and add the new event
    if (eventName && eventDate && eventLocation) {
        const newEventItem = document.createElement('li');
        newEventItem.innerHTML = `
            <div class="event">
                <h4>${eventName}</h4>
                <p class="event-time">${eventDate}</p>
                <span class="location">${eventLocation}</span>
            </div>
        `;
        // Append the new event to the events list
        eventsList.appendChild(newEventItem);
    } else {
        alert('Please provide all the event details!');
    }
}

// Add event listener to the "Add New Event" button
addEventBtn.addEventListener('click', addNewEvent);
