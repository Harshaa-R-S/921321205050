const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 9876;

const windowSize = 10;
let storedNumbers = [];

// Fetch numbers from the third-party server
async function fetchNumbers(numberType) {
    try {
        const response = await axios.get(`http://20.244.56.144/test/${numberType}`);
        return response.data;
    } catch (error) {
        console.error("Failed to fetch numbers from the server:", error);
        return null;
    }
}

// Calculate average of numbers
function calculateAverage(numbers) {
    const window = numbers.slice(-windowSize); // Take the last 'windowSize' numbers
    const sum = window.reduce((acc, num) => acc + num, 0);
    return sum / window.length;
}

// Update stored numbers and keep the window size
function updateStoredNumbers(newNumbers) {
    storedNumbers.push(...newNumbers);
    if (storedNumbers.length > windowSize) {
        storedNumbers = storedNumbers.slice(-windowSize);
    }
}
// Handle requests to the root URL
app.get('/', (req, res) => {
  res.send('Average Calculator Microservice is running.');
});

// Handle requests
app.get('/numbers/:numberType', async (req, res) => {
    const numberType = req.params.numberType;
    const prevState = storedNumbers.slice(); // Copy stored numbers before fetching new ones

    // Fetch new numbers
    const newNumbers = await fetchNumbers(numberType);
    if (newNumbers === null) {
        return res.status(500).json({ error: "Failed to fetch numbers from the server." });
    }

    // Update stored numbers
    updateStoredNumbers(newNumbers);

    const currState = storedNumbers.slice(); // Copy stored numbers after fetching new ones
    const avg = calculateAverage(storedNumbers);

    res.json({
        windowPrevState: prevState,
        windowCurrState: currState,
        numbers: newNumbers,
        avg: avg.toFixed(2) // Round average to 2 decimal places
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
