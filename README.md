# The Table Top Tavern

A modern, responsive HTML/CSS website for a tabletop gaming tavern featuring Yu-Gi-Oh, Magic: The Gathering, Dungeons & Dragons, and Warhammer.

## Features

- **Hero Section** - Welcoming landing with call-to-action buttons
- **Brand Showcase** - Featured games with themed cards and descriptions
- **Stock Gaming Images** - High-quality images from Unsplash
- **Features Section** - Community events, expert staff, premium products, play space, extended hours, rewards program
- **Gaming Gallery** - 8 stock tabletop gaming images
- **Contact Section** - Location, hours, phone, and contact form
- **Modern Dark Theme** - Amber/gold accents matching tavern aesthetic
- **Responsive Design** - Works on all screen sizes

## Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **Vanilla JavaScript** - No frameworks needed
- **SVG Icons** - Inline SVG icons for performance

## Getting Started

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/yuininja36-dotcom/thetabletoptavern.git
cd table-top-tavern
```

2. Simply open `index.html` in your browser, or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using VS Code Live Server extension
# Right-click on index.html and select "Open with Live Server"
```

3. Open http://localhost:8000 in your browser

## Deployment

### Cloudflare Pages

1. Go to https://dash.cloudflare.com/
2. Navigate to Pages → Create a project
3. Connect to Git and select your repository
4. Build settings:
   - **Framework preset**: None
   - **Build command**: (leave empty)
   - **Build output directory**: (leave empty - root directory)
5. Click "Save and Deploy"

### Other Static Hosting

This site can be deployed to any static hosting service:
- Netlify
- GitHub Pages
- Vercel
- AWS S3 + CloudFront

## Project Structure

```
table-top-tavern/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── README.md           # Documentation
└── .gitignore          # Git ignore rules
```

## Customization

- **Colors**: Modify CSS variables in `:root` selector in `styles.css`
- **Content**: Edit HTML directly in `index.html`
- **Images**: Replace Unsplash URLs with your own images
- **Contact Info**: Update contact section in `index.html`

## License

This project is open source and available for personal and commercial use.
