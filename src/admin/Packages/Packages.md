---
title: custom
icon: fa6-solid:box-open

order: 2
category:
  - Guide
tag:
  - Markdown
---

# Custom Packages Management Training Guide

## Overview
The Custom Packages page allows you to create, view, edit, and manage travel packages offered by your company. Custom packages are pre-designed travel itineraries that include various combinations of services like accommodation, flights, transfers, meals, and activities. This guide covers how to view packages, create new packages, edit existing packages, and manage package details including images and destinations.

---

## Accessing the Custom Packages Page

Navigate to: **Admin → Packages → Custom Packages**

The Custom Packages page displays all packages in a table format with the following information:
- Package ID
- Title
- Price
- Reference Code
- Source
- Valid Until date
- Last Day to Book date
- Edit action button

---

## Understanding Package Fields

### Basic Package Information

**Title**:
- The name of the travel package
- Should be descriptive and appealing
- Example: "Luxury Safari Experience", "Cape Town Coastal Adventure"

**Slug**:
- Auto-generated URL-friendly version of the title
- Cannot be manually edited
- Uses lowercase letters and hyphens
- Example: "luxury-safari-experience"

**Price**:
- Cost of the package in South African Rand (ZAR)
- Displayed with currency formatting (R 25,000.00)
- Base price before any customizations

**Reference Code**:
- Internal tracking code for the package
- Used for administrative purposes
- Example: "PKG-2025-001"

**Source**:
- Origin or channel of the package
- Indicates where package was created or imported from
- Example: "Manual", "Import", "API"

**Duration**:
- Length of the package in days
- Numeric value
- Example: 7 (for a 7-day package)

### Date Fields

**Valid From/Valid To**:
- Travel period when the package is available
- Valid From: Earliest date customers can travel
- Valid To: Latest date customers can travel
- Format: YYYY-MM-DD

**Sales Period From/Sales Period To**:
- Booking window for the package
- Sales Period From: When package becomes bookable
- Sales Period To: Last day customers can make a booking
- Format: YYYY-MM-DD
- "Last Day to Book" column shows Sales Period To date

### Package Inclusions

These checkboxes indicate what's included in the package:

**Includes Airfare**: Flights are included in the package price

**Includes Transfers**: Ground transportation between locations included

**Includes Car Hire**: Rental vehicle included

**Includes Meals**: Meals specified in itinerary are included

**Includes Accommodation**: Hotel/lodge stays included

**Includes Guides**: Tour guides or rangers included

**Includes Hotel Service Charges**: Service fees and tips included

**Includes Flights and Accommodation**: Both flights and lodging included (summary flag)

**Popular Flag**: 
- Marks package as "popular" or featured
- May display prominently on website
- Use for best-selling or highlighted packages

### Content Fields

**Description**:
- Main package description
- Rich text editor with formatting options
- Include overview, highlights, and selling points
- Example: detailed narrative about the safari experience

**Includes**:
- Detailed list of what's included in the package
- Rich text editor with formatting options
- Itemize all services, amenities, and benefits
- Example: "3 nights luxury accommodation, All meals, Game drives, Park fees"

**Excludes**:
- List of what's NOT included in the package
- Rich text editor with formatting options
- Clearly state additional costs customers must cover
- Example: "International flights, Travel insurance, Personal expenses, Optional activities"

**Notes and Conditions**:
- Important terms, conditions, and disclaimers
- Rich text editor with formatting options
- Include booking policies, cancellation terms, requirements
- Example: "Minimum 2 passengers, Passport required, 50% deposit required"

---

## Viewing All Packages

### Package Table

The main page displays all packages in a scrollable table.

**Table Columns**:
- ID: Unique package identifier
- Title: Package name
- Price: Package cost (formatted as ZAR)
- Reference: Reference code
- Source: Package origin
- Valid Until: Last travel date (Valid To)
- Last Day to Book: Final booking date (Sales Period To)
- Edit icon: Opens package details for editing

### Searching for Packages

Use the search box to find packages by:
- Title
- Reference Code
- Source

**How to Search**:
1. Type in the "Keyword Search..." box
2. Results filter instantly as you type
3. Search is case-insensitive
4. Clear search box to see all packages

### Downloading Package Data

Click the **"Download"** button to export all packages to CSV format.

**CSV Contents**:
- All table columns
- Package details
- Useful for reporting, analysis, and backup

---

## Creating a New Package

### Step 1: Open the Add Package Form

1. Click the **"Add Package"** button (top right)
2. The "Add Custom Package" dialog opens
3. Dialog is maximizable for easier data entry

### Step 2: Enter Basic Package Information

**Reference Code and Source** (First Row):
1. Enter Reference Code (internal tracking number)
2. Enter Source (origin of package)
3. Both fields required

**Title and Slug**:
1. Enter descriptive package title
2. Slug auto-generates as you type the title
3. Slug field is disabled (auto-generated only)
4. Title is required

**Price, Duration, and Popular Flag**:
1. Enter price as numeric value (no currency symbol)
2. Enter duration in days as number
3. Check "Popular Flag" checkbox if package should be featured
4. Price is required

### Step 3: Set Package Dates

**Valid From/Valid To**:
1. Click "Valid From" date picker
2. Select start date of travel period
3. Click calendar icon or type date (YYYY-MM-DD format)
4. After selecting Valid From, minimum date for Valid To is set automatically
5. Click "Valid To" date picker
6. Select end date of travel period
7. Valid To must be after Valid From

**Sales Period From/Sales Period To**:
1. Click "Sales Period From" date picker
2. Select when booking opens
3. After selecting Sales Period From, minimum date for Sales Period To is set automatically
4. Click "Sales Period To" date picker
5. Select last day customers can book
6. Sales Period To must be after Sales Period From

**Date Picker Tips**:
- Click calendar icon to open visual date selector
- Use arrow buttons to navigate months
- Click date to select
- Dates display in YYYY-MM-DD format
- Today's date is highlighted

### Step 4: Select Destinations

1. Click the "Destinations" dropdown
2. Multi-select dropdown opens showing all available destinations
3. Click destinations to add them to package
4. Selected destinations appear as chips
5. Click X on chip to remove destination
6. Multiple destinations can be selected

### Step 5: Set Package Inclusions

Two columns of checkboxes indicate what's included:

**Left Column**:
- Includes Airfare
- Includes Transfers
- Includes Car Hire
- Includes Meals

**Right Column**:
- Includes Accommodation
- Includes Guides
- Includes Hotel Service Charges
- Includes Flights and Accommodation

Check all applicable boxes for the package.

### Step 6: Add Package Content

Four rich text editors for detailed content:

**Description**:
1. Click in the Description editor
2. Enter comprehensive package overview
3. Use formatting toolbar for styling
4. Toolbar options: Bold, Italic, Underline, Lists, Alignment, etc.
5. Editor height: 320px
6. Include highlights, activities, and selling points

**Includes**:
1. Click in the Includes editor
2. List everything included in package price
3. Use bullet points for clarity
4. Be specific and comprehensive
5. Editor height: 320px

**Excludes**:
1. Click in the Excludes editor
2. List what's NOT included
3. Helps manage customer expectations
4. Prevents misunderstandings
5. Editor height: 320px

**Notes and Conditions**:
1. Click in the Notes and Conditions editor
2. Add terms, policies, requirements
3. Include cancellation policies
4. List any restrictions or prerequisites
5. Editor height: 320px

**Rich Text Editor Tips**:
- Use bold for emphasis
- Use bullet lists for items
- Keep formatting consistent
- Preview how content will appear to customers
- Copy/paste from Word may include unwanted formatting

### Step 7: Submit Package

1. Review all entered information
2. Ensure all required fields are filled
3. Verify dates are logical (Valid To after Valid From, etc.)
4. Click **Submit** button at bottom
5. Dialog closes
6. New package appears in packages table
7. Package is created but needs images and banner to be complete

---

## Editing an Existing Package

### Opening Package Details

1. Locate package in the table
2. Click the **edit icon** (pen) in rightmost column
3. Package details page opens
4. Page displays banner image area, all package fields, and image gallery

### Package Details Page Layout

The page is divided into sections:

**Top Section**:
- Large banner image area (or "No Banner Image" if not uploaded)
- Package title overlaid on banner
- Back button to return to packages list

**Main Content Area** (Left Side):
- Price, Reference Code, Source (top row)
- Title and Slug fields
- Description editor
- Includes editor
- Excludes editor
- Notes and Conditions editor

**Sidebar** (Right Side):
- Travel Details panel
- Destinations selector
- Image Gallery panel
- Action buttons (Preview, Save)

### Editing Basic Information

**Price, Reference, and Source**:
1. Fields are editable text inputs
2. Click in field and modify value
3. Changes are tracked

**Title**:
1. Modify title in text input
2. Slug updates automatically based on title changes
3. Slug field remains disabled

### Editing Package Content

All four editors (Description, Includes, Excludes, Notes and Conditions) are fully editable:

1. Click in the editor area
2. Modify existing text
3. Use formatting toolbar
4. Editor height: 200px
5. Changes are tracked

### Modifying Travel Details (Right Sidebar)

**Duration**:
1. Edit duration in numeric input field
2. Slider below input adjusts visually
3. Drag slider to change duration
4. Input and slider are synchronized

**Valid From/Valid To**:
1. Click date picker to modify
2. Select new dates
3. Format: YYYY-MM-DD
4. Ensure Valid To is after Valid From

**Sales Period From/Sales Period To**:
1. Click date picker to modify
2. Select new dates
3. Format: YYYY-MM-DD
4. Ensure Sales Period To is after Sales Period From

**Checkbox Flags**:
- Popular
- Includes Airfare
- Includes Transfers
- Includes Car Hire
- Includes Meals
- Includes Accommodation
- Includes Guides
- Includes Hotel Service Charges
- Includes Flights and Accommodation

Check or uncheck as needed. Changes are tracked.

### Managing Destinations

**Destinations Multi-Select**:
1. Click the dropdown
2. Current destinations show as chips
3. Add new destinations by selecting from list
4. Remove destinations by clicking X on chip
5. Changes are tracked

---

## Managing Package Images

### Banner Image

The banner image appears at the top of the package page.

**If No Banner Exists**:
1. "No Banner Image" message displays
2. File upload input appears
3. Click "Choose File" or browse button
4. Select image from computer
5. Supported formats: JPG, PNG, etc.
6. After file selected, "Upload" button appears with cloud icon
7. Click "Upload" to upload banner image
8. Banner image displays after successful upload

**If Banner Exists**:
- Banner displays across top of page
- Package title overlays banner
- To change banner, you may need to delete and re-upload

### Image Gallery

Package can have multiple images for gallery display.

**If No Images Exist**:
1. Gray box displays with "Add Images +" message
2. Click "Add Images +" button
3. "Add More Package Images" dialog opens
4. Image gallery interface loads
5. Select and upload images

**If Images Exist**:
1. Gallery shows thumbnail grid (3 columns)
2. Each image has delete icon (red X circle) below it
3. Click thumbnail to view full-size in lightbox gallery
4. Use gallery navigation arrows to view all images
5. Gallery is fullscreen with circular navigation
6. Press Esc or click outside to close gallery

**Adding More Images** (when images already exist):
1. Click **"Add More Images"** button below gallery
2. "Add More Package Images" dialog opens
3. Upload additional images via gallery interface

**Deleting Images**:
1. Click the red X circle icon below image thumbnail
2. Image is deleted immediately
3. No confirmation dialog (be careful)
4. Deleted images are removed from gallery

**Gallery Viewer Features**:
- Click thumbnail to open fullscreen viewer
- Navigate with left/right arrows
- Circular navigation (loops back to start)
- Shows one image at a time
- Responsive to different screen sizes

---

## Saving and Previewing

### Preview Package

1. Click the **"Preview"** button in right sidebar
2. Package opens in preview mode
3. Shows how package will appear to customers
4. Verify all content displays correctly
5. Check formatting, images, and layout

### Save Changes

1. Click the **"Save"** button in right sidebar
2. All changes are saved to database
3. Success message may appear
4. Package updates in system

### Unsaved Changes Warning

The system tracks changes to packages:

**When Changes Are Made**:
- System detects modifications to any field
- Changes are tracked automatically
- Package is marked as "dirty" (unsaved)

**When Attempting to Leave Page**:
1. If unsaved changes exist, warning dialog appears
2. Dialog title: "Unsaved changes"
3. Message: "You have unsaved changes. Are you sure you want to leave?"
4. Two options:
   - **"Yes, leave"** (red button): Discards changes and navigates away
   - **"Stay"** (blue button): Cancels navigation, remains on page
5. Choose appropriately to avoid losing work

**Best Practice**: Save frequently to avoid losing changes.

---

## Common Package Management Workflows

### Creating a Standard Safari Package

1. Click "Add Package"
2. Reference Code: "SAF-001"
3. Source: "Manual"
4. Title: "5-Day Kruger Safari Adventure"
5. Price: 15000
6. Duration: 5
7. Set Valid From: 2025-06-01
8. Set Valid To: 2025-12-31
9. Set Sales Period From: 2025-01-01
10. Set Sales Period To: 2025-11-30
11. Select destinations: Kruger National Park
12. Check: Includes Accommodation, Includes Meals, Includes Guides, Includes Transfers
13. Write description highlighting safari experience
14. List inclusions: accommodation, meals, game drives
15. List exclusions: flights, beverages, tips
16. Add terms and conditions
17. Submit
18. Edit created package to add banner and images

### Updating Package Price

1. Find package in table
2. Click edit icon
3. Locate Price field at top
4. Change price value
5. Click Save
6. Price updates immediately

### Extending Package Validity

1. Open package for editing
2. Locate Valid To date picker in Travel Details
3. Select new end date (later than current)
4. Click Save
5. Package validity extended

### Marking Package as Popular

1. Open package for editing
2. Locate Popular checkbox in Travel Details
3. Check the checkbox
4. Click Save
5. Package marked as featured/popular

### Adding Package to Multiple Destinations

1. Open package for editing
2. Click Destinations multi-select dropdown
3. Select all applicable destinations
4. Destinations appear as chips
5. Click Save
6. Package associated with all selected destinations

---

## Best Practices for Package Management

### 1. Package Titles

**Good Titles**:
- "Luxury Cape Winelands Experience - 3 Days"
- "Family Safari Adventure in Kruger - 7 Days"
- "Romantic Coastal Getaway - Cape Town & Garden Route"

**Poor Titles**:
- "Package 1"
- "Safari"
- "Tour"

### 2. Accurate Descriptions

- Be specific and detailed
- Highlight unique selling points
- Include daily overview if possible
- Use engaging, evocative language
- Mention target audience (couples, families, adventure seekers)

### 3. Clear Inclusions/Exclusions

**Inclusions**:
- List every service included
- Be specific about meal plans (breakfast only, full board, etc.)
- Specify accommodation standards
- Detail transportation included
- Mention any special experiences

**Exclusions**:
- Clearly state what's NOT included
- Mention typical additional costs
- Prevents customer complaints
- Manages expectations

### 4. Realistic Pricing

- Research competitor pricing
- Include all costs in package price
- Consider seasonal variations
- Update prices regularly
- Reflect value in description

### 5. Logical Date Ranges

**Valid Dates**:
- Align with seasons/weather
- Consider peak vs. off-peak periods
- Update annually
- Remove packages outside valid dates

**Sales Periods**:
- Open booking well in advance
- Close booking before travel start
- Allow processing time
- Consider deposit timelines

### 6. High-Quality Images

**Banner Image**:
- High resolution (at least 1920x1080)
- Represents package highlights
- Professional quality
- Eye-catching and appealing

**Gallery Images**:
- Multiple images (5-10 recommended)
- Show accommodations, activities, destinations
- Professional photography preferred
- Consistent quality across images
- Diverse perspectives

### 7. Checkbox Accuracy

- Only check inclusions that apply
- Double-check before saving
- Update if package contents change
- Consistency with written inclusions

### 8. Regular Updates

- Review packages quarterly
- Update prices annually
- Refresh descriptions
- Add new images periodically
- Remove outdated packages

---

## Package Status and Lifecycle

### Active Packages

Packages are active when:
- Current date is within Sales Period
- Valid To date is in the future
- Available for customer booking

### Expired Packages

Packages expire when:
- Current date exceeds Sales Period To
- Valid To date has passed
- No longer bookable

**Handling Expired Packages**:
- Update dates to reactivate
- Create new version with new dates
- Archive or remove if discontinued

---

**Creating Packages**:
1. Add Package button
2. Enter reference, source, title
3. Set price and duration
4. Select dates (Valid, Sales Period)
5. Choose destinations
6. Check inclusion boxes
7. Write content (Description, Includes, Excludes, Notes)
8. Submit
9. Add banner and images

**Editing Packages**:
1. Click edit icon
2. Modify any fields
3. Manage images
4. Preview changes
5. Save

---

## Support

For additional assistance with the Custom Packages page, contact your system administrator or technical support team.