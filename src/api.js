import axios from 'axios';

// Example: Send user data to backend
axios.post('http://localhost:5000/user', { name: 'John', age: 25 })
    .then((response) => console.log(response.data))
    .catch((error) => console.error(error));
