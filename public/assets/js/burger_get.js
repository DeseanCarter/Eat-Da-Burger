document.addEventListener('DOMContentLoaded', (event) => {
  if (event) {
    console.info('DOM loaded');
  }

const createBurgerBtn = document.getElementById('create-form');

if (createBurgerBtn) {
  createBurgerBtn.addEventListener('submit', (e) => {
    e.preventDefault();

    const newBurger = {
      name: document.getElementById('burgerName').value.trim(),
    };

    fetch('/api/burgers', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(newBurger),
      }).then(() => {
      document.getElementById('burgerName').value = '';

      console.log('Created a new burger!');
      location.reload();
    });
  });
}

const devourBurger = document.querySelectorAll('.devour');

if (devourBurger) {
  devourBurger.forEach((button) => {
    button.addEventListener('click', (e) => {
      
      const id = e.target.getAttribute('data-id');

      fetch(`/api/burgers/${id}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },

      }).then((response) => {
        
        if (response.ok) {
          location.reload('/');
        } else {
          alert('something went wrong!');
        }
      });
    });
  });
}


});