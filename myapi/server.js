const express = require('express');
const app = express();
const PORT = 5000;

// Updated data array with placeholder image URLs
const categories = [
  {
    id: 1,
    title: 'Dentist',
    description: 'Teething troubles? Schedule a dental checkup',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9vJYX6Bay75mw8CZhcEsozJ8cbvuagk07ckv6SQrm3QLqPvEJUdFAD--gtgX6qbTZnLA&usqp=CAU', // Placeholder URL
  },
  {
    id: 2,
    title: 'Gynecologist/Obstetrician',
    description: 'Explore for women’s health, pregnancy and infertility treatments',
    imageUrl: 'https://media.istockphoto.com/id/898903840/photo/young-woman-patient-with-gynecologist-in-the-office.jpg?s=612x612&w=0&k=20&c=8Y_5s0lSezhE2OfCRrgSYsSDwdXb0WGDLBfif78zAT4=', // Placeholder URL
  },
  {
    id: 3,
    title: 'Dietitian/Nutrition',
    description: 'Get guidance on eating right, weight management and sports nutrition',
    imageUrl: 'https://media.istockphoto.com/id/1293734715/photo/nutritionist-and-client-discussing-balanced-nutrition-plan.jpg?s=612x612&w=0&k=20&c=PHDzERwFAEVTFEa6bHTCSykyWAnkuvfGt0amiumJz-I=', // Placeholder URL
  },
  // ...add more categories as needed
];


const doctors = [
  {
    id: 1,
    name: 'Dr. Ujjval Mehrotra',
    specialty: 'Dentist',
    experience: '10 years experience overall',
    location: 'Dalanwala, Dehradun • Face Mile Dentofacial Clinic',
    consultationFee: '₹200 Consultation fee at clinic',
    availability: 'Available Today',
    rating: '100%',
    patientStories: '17 Patient Stories',
    imageUrl: 'https://via.placeholder.com/150', // Placeholder image URL
  },
  {
    id: 2,
    name: 'Dr. Mehak Aggarwal',
    specialty: 'Dentist',
    experience: '15 years experience overall',
    location: 'Cannaught Place, Dehradun • Dr. Mahak’s Dental Clinic',
    consultationFee: '₹300 Consultation fee at clinic',
    availability: 'Available Today',
    rating: '96%',
    patientStories: '54 Patient Stories',
    imageUrl: 'https://via.placeholder.com/150', // Placeholder image URL
  },
  // ...add more doctors as needed
];

// Route that sends categories data
app.get('/api/section-one', (req, res) => {
  res.json(categories);
});

app.get('/api/section-two', (req, res) => {
  res.json(doctors);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
