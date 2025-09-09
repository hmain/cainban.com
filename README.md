# Cainban.com - Official Website

The official landing page for Cainban, a command-line kanban board with Claude AI integration.

## 🌟 Features

- **Modern Design**: Clean, responsive single-page design
- **Interactive Terminal Demo**: Live terminal simulation showing Cainban in action  
- **Smooth Animations**: Subtle animations and transitions for better UX
- **Copy-to-Clipboard**: Easy code copying for installation instructions
- **Mobile Responsive**: Works perfectly on all device sizes
- **Fast Loading**: Optimized for speed with minimal dependencies

## 🚀 Quick Start

This is a static website that can be hosted on GitHub Pages.

### Local Development

1. Clone this repository
2. Open `index.html` in your browser
3. Or serve with a local server:
   ```bash
   python -m http.server 8000
   # or
   npx serve .
   ```

### Deployment

This site is designed to work with GitHub Pages:

1. Push to the `main` branch
2. Enable GitHub Pages in repository settings
3. Point your domain to GitHub Pages

## 📁 Project Structure

```
cainban.com/
├── index.html      # Main HTML file
├── style.css       # CSS styles
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## 🎨 Customization

### Colors

The site uses CSS custom properties for easy theming. Edit the `:root` section in `style.css`:

```css
:root {
  --primary-color: #3b82f6;
  --secondary-color: #1e40af;
  --accent-color: #f59e0b;
  /* ... */
}
```

### Content

- Edit `index.html` to update content
- Modify feature descriptions, installation steps, etc.
- Update links to point to your repositories

## 🌐 Domain Setup

To use with cainban.com domain:

1. Add a `CNAME` file with your domain
2. Configure DNS to point to GitHub Pages
3. Enable HTTPS in GitHub Pages settings

## 📝 License

Open source project - feel free to use and modify.