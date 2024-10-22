// console.log('hllo world');

const axios = require('axios');
const cheerio = require('cheerio');

// URL of the webpage you want to scrape
const url = 'https://apurva-protfolio-final.netlify.app/';

// Function to scrape data
async function scrapeData() {
    try {
        // Fetch the HTML content of the webpage
        const { data } = await axios.get(url);
        
        // Load the HTML content into cheerio
        const $ = cheerio.load(data);
        
        // Example: Scrape all the headings (h1) on the page
        const headings = [];
        $('h1').each((index, element) => {
            headings.push($(element).text());
        });

        // Print the scraped headings
        console.log('Headings:', headings);
    } catch (error) {
        console.error('Error scraping data:', error.message);
    }
}

// Call the scraping function
scrapeData();
