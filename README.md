# Amazon URL Scraper

## Description

This Python script scrapes Amazon product details like title, image source, fee, and rating. It uses the Playwright library for web scraping and asyncio for asynchronous operations. It also uses Bright Data for more efficient data collection.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [License](#license)

## Installation

1. Clone this repository:

```bash
git clone https://github.com/yourusername/yourrepository.git
```

1. Install the required Python packages:

```bash
git clone https://github.com/yourusername/yourrepository.git
```

1. Install browser binaries required for Playwright:

```bash
playwright install
```


## Usage


1. Add your Bright Data key to the 'SBR_WS_CDP' variable in the script:

```python
SBR_WS_CDP = "ENTER YOUR BRIGHT DATA KEY HERE"
```

1. Run the script:

```bash
python your_script_name.py
```

1. Install browser binaries required for Playwright:

```bash
playwright install
```

The script will automatically start scraping data from Amazon and save it to scraped_data.json.

## Configuration

To customize the scraping behavior, you can modify the following variables directly in the script:

- `SBR_WS_CDP`: Enter your Bright Data key here to enable more efficient data collection.
  
- `page_num`: Change the range value in the `for page_num in range(1, 6):` loop to set the number of Amazon search result pages you want to scrape. The default value is set to scrape 5 pages.

By changing these variables, you can adapt the script to your specific needs.

