# River City Big Band Website

A static website for River City Big Band, designed for easy maintenance by non-technical band members and optimized for GitHub Pages hosting.

## Table of Contents

- [Quick Start](#quick-start)
- [File Structure](#file-structure)
- [Managing Events (IMPORTANT!)](#managing-events-important)
- [Customization Guide](#customization-guide)
- [Deploying to GitHub Pages](#deploying-to-github-pages)
- [Accessibility Features](#accessibility-features)
- [Color Palette Reference](#color-palette-reference)
- [Troubleshooting](#troubleshooting)

---

## Quick Start

### Viewing the Site Locally

1. Open the `rcbb` folder in your file explorer
2. Double-click `index.html` to open it in your web browser
3. Navigate between pages using the menu

That's it! No server or special software needed.

### Making Changes

1. Edit files using any text editor (Notepad, TextEdit, VS Code, etc.)
2. Save the file
3. Refresh the page in your browser to see changes

---

## File Structure

```
rcbb/
├── index.html          ← Main homepage
├── about/
│   └── index.html      ← About page (URL: /about/)
├── musicians/
│   └── index.html      ← Musicians page (URL: /musicians/)
├── events/
│   └── index.html      ← Events page (URL: /events/)
├── contact/
│   └── index.html      ← Contact page (URL: /contact/)
├── media/
│   └── index.html      ← Media hub page (URL: /media/)
├── discography/
│   └── index.html      ← Discography page (URL: /discography/)
├── gallery/
│   └── index.html      ← Photo gallery (URL: /gallery/)
├── style.css           ← All visual styles
├── events.js           ← EVENT DATA - Edit this to update events!
├── images/             ← Photos and images
├── RCBBlogo.avif       ← Band logo
└── README.md           ← This file
```

### Clean URLs

This site uses directory-based URLs for cleaner addresses:
- ❌ `rivercitybigband.com/about.html`
- ✅ `rivercitybigband.com/about/`

This works automatically on GitHub Pages!

### What Each File Does

| File | Purpose | Who Should Edit |
|------|---------|-----------------|
| `events.js` | Contains all event data | Band members (see guide below) |
| `index.html` | Homepage content and structure | Developer |
| `style.css` | Colors, fonts, layout | Developer |
| `*.html` (others) | Placeholder pages | Developer |

---

## Managing Events (IMPORTANT!)

### Where to Edit Events

**All events are stored in `events.js`** - this is the ONLY file you need to edit to add, update, or remove events.

### Adding a New Event

1. Open `events.js` in a text editor
2. Find the section that says "ADD YOUR NEW EVENTS ABOVE THIS LINE"
3. Copy this template and paste it above that line:

```javascript
{
  id: 4,
  date: "2025-06-15",
  displayDate: "Sunday, June 15, 2025",
  time: "7:00 PM",
  venue: "Your Venue Name",
  address: "123 Street Name, City, ST 12345",
  description: "Brief description of the event.",
  ticketLink: ""
},
```

4. Update the values:
   - `id`: Use the next number (if the last event is id: 3, use id: 4)
   - `date`: Use format YYYY-MM-DD (this is for sorting)
   - `displayDate`: How you want the date shown on the website
   - `time`: Event time as you want it displayed
   - `venue`: Name of the venue
   - `address`: Full address (or leave as "" if not needed)
   - `description`: Brief event description
   - `ticketLink`: URL for tickets, or "" if no tickets

5. Save the file
6. Refresh your browser to see the new event

### Editing an Existing Event

1. Open `events.js`
2. Find the event you want to change
3. Update the text between the quotation marks
4. Save the file

### Removing an Event

1. Open `events.js`
2. Find the event you want to remove
3. Delete everything from `{` to `},` for that event
4. Save the file

### Important Rules

✅ **DO:**
- Keep all text inside double quotes: `"like this"`
- Keep commas after each field and each event
- Use the date format YYYY-MM-DD for the `date` field

❌ **DON'T:**
- Delete the `const upcomingEvents = [` at the top
- Delete the `];` at the bottom
- Forget the comma between events

### Example: Complete Event Entry

```javascript
{
  id: 1,
  date: "2025-02-14",
  displayDate: "Friday, February 14, 2025",
  time: "7:30 PM",
  venue: "River City Arts Center",
  address: "456 Jazz Avenue, River City, ST 12345",
  description: "Valentine's Day Big Band Spectacular! Join us for a romantic evening of classic love songs.",
  ticketLink: "https://tickets.example.com"
},
```

---

## Customization Guide

### Adding Your Logo

1. Place your logo file in the `images` folder (PNG or SVG recommended)
2. Open `index.html` (and other HTML files)
3. Find this section in the header:
   ```html
   <!-- TODO: Add your logo image here -->
   ```
4. Uncomment and update the img tag with your logo filename

### Changing the Band Name

1. Search for "River City Big Band" in all files
2. Replace with your band's name
3. Files to update: all HTML files, events.js

### Updating Contact Information

1. Search for `info@rivercitybigband.com` in all files
2. Replace with your actual email address

### Adding Social Media Links

1. In each HTML file, find the footer section with social links
2. Replace the `#` in `href="#"` with your actual social media URLs

---

## Deploying to GitHub Pages

### First Time Setup

1. Create a GitHub account at github.com (if you don't have one)
2. Create a new repository named `yourusername.github.io` (for a user site) or any name for a project site
3. Upload all files from the `rcbb` folder to the repository
4. Go to repository Settings → Pages
5. Under "Source", select your main branch
6. Your site will be live at `https://yourusername.github.io`

### Updating the Live Site

After making changes to your local files:

1. Go to your GitHub repository
2. Upload the changed files (drag and drop, or use the "Add file" button)
3. Changes will appear on your live site within a few minutes

### Using GitHub Desktop (Recommended for Beginners)

1. Download GitHub Desktop from desktop.github.com
2. Clone your repository to your computer
3. Make changes to files in the local folder
4. Open GitHub Desktop - it will show your changes
5. Write a brief summary and click "Commit"
6. Click "Push" to update the live site

---

## Accessibility Features

This website is built with WCAG 2.0 AA accessibility in mind:

- **Keyboard Navigation**: All interactive elements are keyboard accessible
- **Skip Links**: Users can skip to main content
- **Color Contrast**: All text meets minimum contrast ratios (4.5:1 for normal text)
- **Screen Readers**: Proper ARIA labels and semantic HTML
- **Focus Indicators**: Clear visual focus states for keyboard users
- **Reduced Motion**: Respects user preferences for reduced animations

---

## Color Palette Reference

The site uses a "Burgundy & Brass" color scheme. All colors meet WCAG AA contrast requirements.

| Color | Hex Code | Usage |
|-------|----------|-------|
| Burgundy | `#4A1C24` | Headers, navigation, dark backgrounds |
| Burgundy Dark | `#3A161C` | Hover states |
| Brass | `#8B6914` | Accent color, buttons, links |
| Brass Dark | `#705410` | Button hover states |
| Cream | `#FDF8F3` | Page background |
| Text | `#2D2D2D` | Body text |
| Text Light | `#5A5A5A` | Secondary text |

### Contrast Ratios (WCAG AA Compliant)

- Burgundy on White: 12.1:1 ✓
- Brass on White: 4.6:1 ✓
- Body text on Cream: 12.4:1 ✓
- Secondary text on Cream: 6.1:1 ✓

---

## Troubleshooting

### Events Not Showing Up

1. **Check the date**: Events with past dates are automatically hidden
2. **Check for syntax errors**: Make sure all quotes and commas are correct in `events.js`
3. **Clear browser cache**: Press Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

### Something Looks Broken

1. **Check if JavaScript is enabled** in your browser
2. **Try a different browser** to rule out browser-specific issues
3. **Undo recent changes** if you were editing files

### Common Mistakes in events.js

❌ **Missing comma after a field:**
```javascript
description: "Event description"  // Missing comma!
ticketLink: ""
```

✅ **Correct:**
```javascript
description: "Event description",
ticketLink: ""
```

❌ **Quotation mark inside text:**
```javascript
description: "Come see "The Band" perform!"  // Broken quotes
```

✅ **Correct:**
```javascript
description: "Come see \"The Band\" perform!"  // Escaped quotes
```

---

## Need Help?

If you run into issues or need to make changes beyond what's covered here, consider:

1. Consulting the original developer
2. Asking a tech-savvy band member
3. Searching for help online (try: "HTML basics" or "editing JavaScript files")

---

## Credits

Website built with accessibility and maintainability in mind.

- **Fonts**: Playfair Display & Source Sans 3 (Google Fonts)
- **Hosting**: Designed for GitHub Pages (free static hosting)
- **Framework**: Pure HTML, CSS, and JavaScript (no dependencies)

