# print('hi')

import requests
from bs4 import BeautifulSoup

# URL of the webpage you want to scrape
url = 'https://mohit-nikeclone.vercel.app/'

# Send a GET request to the webpage
response = requests.get(url)

# Check if the request was successful
if response.status_code == 200:
    # Parse the webpage content
    soup = BeautifulSoup(response.text, 'html.parser')
    
    # Example: Scrape all the headings (h1) on the page
    headings = soup.find_all('h1')
    
    # Print the headings
    for heading in headings:
        print(heading.text)
else:
    print(f"Failed to retrieve the webpage. Status code: {response.status_code}")
