## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:5173`:

```bash
# npm
npm run dev

# yarn
yarn dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# yarn
yarn build
```

## Data Input

I have created a [Google Spreadsheet](https://docs.google.com/spreadsheets/d/1EWooRb-Xi1_VvfiozZNckU0cj0SA6IhGUlQoOSzE9lc/edit?usp=sharing "Google Spreadsheet") to input data about the champions:

For converting the spreadsheet data to JSON, I use the following Google Workspace add-on: [2JSON Google Extension](https://workspace.google.com/marketplace/app/2json/104875099452 "2JSON Google Extension")

### Explanation of the JSON Structure

- **icon:** Insert the URL of the champion's icon here (this is used for the top slider).

- **art:** This is the large image of the hero that takes up almost the entire screen.

- **theme:** The background color for each champion.

- **shapeMain and shapeBorder:** At the top-right and bottom-left of the screen, there are triangular shapes. Each champion requires a color for these shapes:

- **spotlightLink**: Insert only the YouTube video ID for the champion's spotlight video. For example:
  https://www.youtube.com/watch?v=Fvk0a0wvUzk&ab_channel=Sparkball
  In this URL, the video ID is: Fvk0a0wvUzk.

The JSON file is located at:

    src/assets/data.json
