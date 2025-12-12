/* =============================================================================
 * RIVER CITY BIG BAND - EVENTS DATA FILE
 * =============================================================================
 * 
 * PURPOSE: This file contains all upcoming event information for the website.
 * Band members can edit this file to add, update, or remove events without
 * touching any other code.
 * 
 * =============================================================================
 * HOW TO EDIT THIS FILE - STEP BY STEP GUIDE
 * =============================================================================
 * 
 * ADDING A NEW EVENT:
 * -------------------
 * 1. Find the "ADD YOUR NEW EVENTS ABOVE THIS LINE" comment below
 * 2. Copy this template and paste it above that line:
 * 
 *    {
 *      id: NUMBER,
 *      date: "YYYY-MM-DD",
 *      displayDate: "Day, Month Date, Year",
 *      time: "0:00 PM",
 *      venue: "Venue Name",
 *      address: "Full Address, Edmonton, AB",
 *      description: "Event description here.",
 *      ticketLink: ""
 *    },
 * 
 * 3. Fill in your event details
 * 4. Save the file
 * 
 * EDITING AN EXISTING EVENT:
 * --------------------------
 * 1. Find the event you want to change in the list below
 * 2. Update the text between the quotation marks ""
 * 3. Save the file
 * 
 * REMOVING AN EVENT:
 * ------------------
 * 1. Find the event you want to remove
 * 2. Delete everything from the { to the }, (including the comma after)
 * 3. Save the file
 * 
 * =============================================================================
 * FIELD EXPLANATIONS
 * =============================================================================
 * 
 * id:          Unique number for each event. Just use the next number.
 * date:        Event date as YYYY-MM-DD (for sorting). Ex: "2025-03-15"
 * displayDate: How the date shows on the website. Ex: "Saturday, March 15, 2025"
 * time:        Event time. Ex: "7:30 PM" or "7:00 - 10:00 PM"
 * venue:       Name of the venue. Ex: "Winspear Centre"
 * address:     Full address (can be "" if not needed)
 * description: Brief description (1-2 sentences)
 * ticketLink:  URL for tickets, or "" if no online tickets
 * 
 * =============================================================================
 * IMPORTANT RULES
 * =============================================================================
 * 
 * 1. Keep text inside double quotes: "like this"
 * 2. Keep commas after each field and each event
 * 3. Use date format YYYY-MM-DD for the date field
 * 4. Past events are automatically hidden from the website
 * 
 * =============================================================================
 * EVENTS LIST - EDIT YOUR EVENTS BELOW
 * =============================================================================
 */

const upcomingEvents = [
  // -------------------------------------------------------------------------
  // UPCOMING SHOWS - Add new events here!
  // -------------------------------------------------------------------------
  
  {
    id: 1,
    date: "2025-02-08",
    displayDate: "Saturday, February 8, 2025",
    time: "7:30 PM",
    venue: "Muttart Hall - Alberta College",
    address: "10050 MacDonald Drive, Edmonton, AB",
    description: "Winter Swing Spectacular! Join us for an evening of classic big band hits and jazz standards.",
    ticketLink: ""
  },

  {
    id: 2,
    date: "2025-03-22",
    displayDate: "Saturday, March 22, 2025",
    time: "7:00 PM",
    venue: "Festival Place",
    address: "100 Festival Way, Sherwood Park, AB",
    description: "Remembering the Sounds of the Great Big Bands - A tribute to the legends of the swing era.",
    ticketLink: ""
  },

  {
    id: 3,
    date: "2025-05-10",
    displayDate: "Saturday, May 10, 2025",
    time: "7:30 PM",
    venue: "Winspear Centre",
    address: "4 Sir Winston Churchill Square, Edmonton, AB",
    description: "Spring Jazz Concert featuring special guest artist. An unforgettable evening of big band music!",
    ticketLink: ""
  },

  {
    id: 4,
    date: "2025-06-28",
    displayDate: "Saturday, June 28, 2025",
    time: "6:00 PM",
    venue: "Edmonton Jazz Festival",
    address: "Downtown Edmonton",
    description: "Outdoor summer concert as part of the TD Edmonton International Jazz Festival. Free admission!",
    ticketLink: ""
  }

  // -------------------------------------------------------------------------
  // ADD YOUR NEW EVENTS ABOVE THIS LINE
  // Remember: Add a comma after the } of the event above when adding new ones!
  // -------------------------------------------------------------------------
];

/* =============================================================================
 * TECHNICAL NOTE (for developers)
 * =============================================================================
 * This file is loaded by index.html via a <script> tag. The upcomingEvents
 * array is accessed by inline JavaScript to render event cards.
 * 
 * Events are automatically sorted by date (earliest first) when displayed.
 * Past events (dates before today) are automatically filtered out.
 * 
 * The home page displays up to 3 upcoming events.
 * =========================================================================== */
