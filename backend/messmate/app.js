const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

// test route
app.get('/test', (req, res) => {
    res.status(200).json({ message: 'Test route is working fine' });
});


// undefined routes
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});