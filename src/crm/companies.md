---
icon: mdi:office-building        # for company
title: Companies
category:
  - Guide
tag:
  - encryption

contributors: false
editLink: false
author: false
comment: false


---
# Companies Management Training Guide

## Overview
The Companies page allows you to manage all business entities in your CRM system. Companies can be clients, suppliers, partners, or any organization you do business with. This guide covers how to add, edit, search, and manage company records.

---

## Accessing the Companies Page

Navigate to: **Admin → CRM → Companies**

The Companies page displays all registered companies in a table format with the following information:
- Company ID
- Trading Name
- Address (full location)
- Edit action button

---

## Adding a New Company

### Step 1: Open the Add Company Form

1. Click the **"Add Company"** button (top right)
2. The Add Company modal will open

### Step 2: Select Company Classification

**Company Type** (Required):
- Select the appropriate company type from the dropdown
- This categorizes the company within your system

**Organisation Type** (Required):
Choose from the following options:
- Sole Proprietorship
- Partnership
- Private Company
- Public Company
- Non-Profit Organization
- Government Entity
- Other

### Step 3: Search and Select Address

The system uses intelligent address search to ensure accurate location data.

**Address Search**:
1. Type the company address in the search field
2. Suggestions will appear as you type
3. Click on the correct address from the suggestions
4. The system automatically captures:
   - Full address string
   - Latitude coordinates
   - Longitude coordinates

**Enable Global Search**:
- Toggle this checkbox ON to search for international addresses
- Toggle OFF (default) to search only local addresses

**Note:** The address is crucial for location-based features and mapping.

### Step 4: Enter Company Details

**Required Fields**:

1. **Trading Name**
   - The name the company operates under
   - As you type, a URL-friendly slug is automatically generated
   - Example: "ABC Travel Agency" becomes "abc-travel-agency"

2. **Slug**
   - Auto-generated from Trading Name
   - Cannot be edited manually
   - Used for URLs and system references

3. **Company Email**
   - Primary contact email for the company
   - Must be a valid email format

4. **Company Phone Number**
   - Main contact number for the company

**Optional Fields**:

1. **Company Registration Number**
   - Official registration/incorporation number
   - Leave blank if not applicable

2. **VAT Registration**
   - Check the "VAT Registered?" checkbox if company is VAT registered
   - VAT Number field becomes enabled when checked
   - Enter the VAT number if applicable

3. **Website**
   - Company website URL
   - As you type, the system extracts the top-level domain (TLD)
   - TLD field is auto-populated and cannot be edited
   - Example: "https://www.example.com" → TLD: ".com"

### Step 5: Submit

1. Review all entered information
2. Click **Submit**
3. The new company appears in your companies table

---

## Editing an Existing Company

### Opening the Edit Form

1. Locate the company in the table
2. Click the **edit icon (pen)** in the rightmost column
3. The edit modal opens with the header "Editing [Company Name]"

### Updating Company Information

All fields from the Add Company form are available for editing.

**Changing the Company Address**:

1. Toggle **"Change Address"** switch to ON
2. The address search field appears
3. Use the same address search process as adding a company
4. Select the new address from suggestions
5. Current address, latitude, and longitude are displayed below for reference

**Other Editable Fields**:
- Trading Name (slug updates automatically)
- Company Registration Number
- Organisation Type
- VAT Registration status and number
- Company Email
- Phone Number
- Website

**Note:** The slug is auto-generated based on the Trading Name and cannot be manually edited.

### Saving Changes

1. Make your desired changes
2. Click **Submit**
3. Changes are saved and reflected in the companies table

---

## Searching and Filtering Companies

### Keyword Search

Use the search box at the top of the table to find companies by:
- Trading Name
- Registration Number
- Phone Number
- Street Address
- City
- Province

The search is instant and filters results as you type.

### Sorting

Click any column header to sort the table by that field:
- ID (ascending/descending)
- Trading Name (alphabetically)
- Address (alphabetically)

---

## Downloading Company Data

Click the **"Download"** button to export all company records to CSV format. This is useful for:
- External reporting
- Data backup
- Analysis in spreadsheet applications
- Sharing with stakeholders

---

## Understanding Company Fields

### Trading Name vs Legal Name
- **Trading Name**: The name the company uses for business operations
- This may differ from the legal registered name
- Use the name most commonly recognized by customers

### Slug
- Auto-generated URL-friendly version of the Trading Name
- Uses lowercase letters and hyphens
- Cannot contain spaces or special characters
- Used in system URLs and references

### VAT Registration
- Only relevant for tax-registered companies
- Check the box to enable VAT number entry
- Leave unchecked for non-VAT registered entities

### Organisation Type
Choose the type that best describes the company's legal structure:
- **Sole Proprietorship**: Single-owner business
- **Partnership**: Business owned by two or more partners
- **Private Company**: Private limited company (Pty Ltd)
- **Public Company**: Publicly traded company
- **Non-Profit Organization**: NPO or NGO
- **Government Entity**: Government department or agency
- **Other**: Any other structure

### Website and TLD
- **Website**: Full URL including http:// or https://
- **TLD**: Top-level domain automatically extracted (e.g., .com, .co.za, .org)
- TLD helps categorize and identify company web presence

---

## Address Search Feature

### How It Works

The address search uses Google Places API to provide accurate, standardized addresses.

**Local Search** (Default):
- Searches addresses in your country
- Faster and more relevant results for local companies
- Recommended for domestic businesses

**Global Search**:
- Enable when adding international companies
- Searches worldwide addresses
- Takes slightly longer but covers all countries

**Geocoding Benefits**:
- Captures exact GPS coordinates
- Enables mapping features
- Allows distance calculations
- Supports location-based reporting

### Best Practices for Address Search

1. **Be Specific**: Type enough detail to narrow results
   - Good: "123 Main Street, Cape Town"
   - Less Good: "Main Street"

2. **Select from Suggestions**: Always choose from dropdown
   - Don't manually type the full address
   - Ensures proper geocoding

3. **Verify Address**: Check the displayed address after selection
   - Confirm it matches the intended location
   - Edit if necessary using Change Address feature

---

## Common Workflows

### Adding a New Client Company

1. Navigate to Companies page
2. Click "Add Company"
3. Select Company Type: "Client"
4. Select Organisation Type: e.g., "Private Company"
5. Search and select company address
6. Enter Trading Name: e.g., "Smith & Associates Travel"
7. Note auto-generated slug: "smith-associates-travel"
8. Enter company email and phone
9. Enter registration number if available
10. Check VAT Registered if applicable, enter VAT number
11. Enter website if available
12. Submit

### Updating Company Contact Information

1. Locate company in table
2. Click edit icon
3. Update Email and/or Phone Number fields
4. Submit changes

### Relocating a Company

1. Open company for editing
2. Toggle "Change Address" to ON
3. Search for new address
4. Select correct address from suggestions
5. Verify new coordinates are displayed
6. Submit changes

---

## Integration with Other pages

### Companies and Contacts

When creating a **Company Contact** in the Contacts page:
- You must first have the company created in this page
- The contact will be linked to the company
- Company details flow through to contact records

### Companies and Leads

When a lead is associated with a company:
- Company information is available in lead details
- Helps qualify B2B leads
- Links multiple contacts to the same organization

### Companies and Deals

Company records connect to deals for:
- B2B sales tracking
- Corporate client management
- Multi-contact deal coordination

---

## Data Quality Best Practices

1. **Consistent Naming**: Use official company names
   - Check company websites for correct spelling
   - Use proper capitalization

2. **Complete Records**: Fill in all available information
   - Even optional fields add value
   - More data = better reporting

3. **Regular Updates**: Keep information current
   - Update contact details when they change
   - Verify addresses periodically

4. **Avoid Duplicates**: Search before adding
   - Check if company already exists
   - Use search function first

5. **Accurate Classification**: Choose correct types
   - Organisation Type affects reporting
   - Company Type determines workflows

6. **Verify VAT Status**: Confirm before checking
   - Important for invoicing
   - Affects financial records

---

---

## Support

For additional assistance with the Companies page, contact your system administrator or refer to the main CRM documentation.