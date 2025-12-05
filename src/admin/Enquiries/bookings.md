---
title: Bookings
icon: fa6-solid:calendar-check
category:
  - Guide
tag:
  - encryption

contributors: false
editLink: false
author: false
comment: false

---
# Bookings Management Training Guide

## Overview
The Bookings page displays all booking enquiries submitted through your website's booking form. These are customers who have filled out detailed travel requests including flights, accommodation, and other travel services. This page allows you to view booking details and track their assignment status. This guide covers how to search, filter, view, and manage booking enquiries.

---

## Accessing the Bookings Page

Navigate to: **Admin → CRM → Bookings**

The Bookings page displays all booking enquiries in a table format with the following information:
- Customer Name (Title, First Name, Last Name)
- Email Address
- Phone Number
- Company Name
- Status (Assigned/Unassigned)
- Assigned Agent
- View action button

---

## Understanding Booking Enquiries

### What is a Booking Enquiry?

A booking enquiry is a detailed travel request submitted by a customer through your website's booking form. It includes:

**Travel Details**:
- Departure and destination airports
- Travel dates (departure and return)
- Number of travelers (adults and children)
- Trip nature (business, leisure, etc.)
- Cabin/flight class preference

**Accommodation Preferences**:
- Star rating requirement
- Meal preferences (breakfast, dinner)
- Accommodation type (B&B, Hotel, Resort, Self-Catering)

**Additional Information**:
- Budget range
- Car hire requirements (if needed)
- Company affiliation

### How Booking Enquiries Enter the System

Booking enquiries are automatically captured when:
1. A customer visits your website
2. Fills out the booking enquiry form
3. Submits their travel requirements
4. System creates a booking record
5. System creates a corresponding lead in the Leads page

**Important**: Booking enquiries are view-only in this page. To manage them (assign agents, change status, etc.), you must work with them through the **Leads page**.

---

## Viewing the Bookings Table

### Table Columns

**Name**:
- Full name including title (Mr., Mrs., Ms., etc.)
- Format: "Title First_Name Last_Name"
- Example: "Mr. John Smith"

**Email Address**:
- Customer's contact email
- Used for communication

**Phone No.**:
- Customer's contact number
- International or local format

**Company**:
- Company name (if provided)
- Empty if individual traveler

**Status**:
- **Assigned**: Booking has been assigned to an agent
- **Unassigned**: Booking awaits assignment
- Displayed as colored badges (green for assigned, orange for unassigned)

**Agent**:
- Name of assigned agent
- Empty if unassigned

**Actions**:
- Eye icon to view booking details

---

## Searching and Filtering Bookings

### Global Keyword Search

Use the search box at the top to search across multiple fields:
- First name
- Last name
- Email address
- Phone number
- Company name
- Agent name
- Status

**How to Search**:
1. Type in the search box
2. Results filter instantly as you type
3. Search is case-insensitive
4. Partial matches work (e.g., "john" finds "Johnson")

### Column-Specific Filters

Each column has its own filter option for precise searching:

#### Name Filter
1. Click the filter icon in the Name column header
2. Type name to search
3. Filters as you type

#### Email Filter
1. Click the filter icon in the Email column header
2. Type email or partial email
3. Results update automatically

#### Phone Filter
1. Click the filter icon in the Phone column header
2. Enter phone number or partial number
3. Instant filtering

#### Company Filter
1. Click the filter icon in the Company column header
2. Type company name
3. Filters matching companies

#### Status Filter
1. Click the filter icon in the Status column header
2. Select from dropdown:
   - Assigned
   - Unassigned
3. Click "Clear" button to remove filter

#### Agent Filter
1. Click the filter icon in the Agent column header
2. Multi-select dropdown appears
3. Check one or more agent names
4. Shows "1 item selected" if one agent chosen
5. Shows "Multiple" if more than one agent selected
6. Click X to clear filter

**Tip**: Combine multiple column filters for very specific searches (e.g., unassigned bookings for a specific company).

---

## Viewing Booking Details

### Opening Booking Details

1. Locate the booking in the table
2. Click the **eye icon** in the Actions column
3. Booking details modal opens

### Booking Details Modal

The modal displays complete information submitted by the customer:

#### Header Section

**Modal Title**: "Title First_Name Last_Name"
- Example: "Mr. John Smith"

**Assigned Agent Display**:
- Shows current assigned agent name
- Format: "Assigned Agent: [Agent Name]"

**Update Information** (if booking has been updated):
- Updated by: Name of person who last updated
- Updated at: Date and time of last update

#### Customer Information Section

Four-column grid displaying:

**Name**:
- Full name with title
- As submitted on form

**Email**:
- Customer's email address
- Contact method

**Phone No.**:
- Customer's phone number
- Contact method

**Company**:
- Company name if provided
- Empty if individual booking

#### Travel Route Display

Visual representation of travel route:

**Departure Airport** ✈️ ----→ **Destination Airport**

Shows:
- Full departure airport name
- Airplane icon and route line
- Destination pin icon
- Full destination airport name

Example: "O.R. Tambo International Airport → Dubai International Airport"

#### Travel Dates Section

Two-column grid:

**Departure Date**:
- Date customer wants to depart
- Formatted: DD Month YYYY

**Return Date**:
- Date customer wants to return
- Formatted: DD Month YYYY

#### Travel Details Section

Three-column grid:

**Travellers**:
- Number of adults
- Number of children
- Format: "X Adult, Y Children"

**Nature of Trip**:
- Purpose of travel
- Options: Business, Leisure, Family, Honeymoon, etc.

**Cabin Preference**:
- Flight class requested
- Options: Economy, Premium Economy, Business, First Class

#### Accommodation Section

**Meals Preferences**:

Two checkable preferences:
- **Breakfast**: ✓ (wanted) or ✗ (not wanted)
- **Dinner**: ✓ (wanted) or ✗ (not wanted)

**Accommodation Star Rating**:
- Visual star display
- Shows 1-5 stars in gold
- Indicates quality preference

**Accommodation Types**:

Four preferences with check/cross indicators:
- **B&B**: Bed and Breakfast
- **Hotel**: Standard hotel
- **Resort**: Resort property
- **Self Catering**: Self-service accommodation

Each shows ✓ if customer interested, ✗ if not

#### Budget Section

**Budget Range**:
- Customer's budget for the trip
- Format varies (may be range or specific amount)
- Examples: "R 50,000 - R 75,000" or "Under R 30,000"

#### Car Hire Section

Only appears if customer requested car hire.

**Preferred Vehicle** (if specified):
- Specific vehicle name requested
- Example: "Toyota Fortuner"

**OR**

**Vehicle Category Details** (if no specific preference):

Two-column display:
- **Category**: Vehicle type (Compact, SUV, Luxury, etc.)
- **Vehicle Name**: Example vehicle in that category

---

## Downloading Booking Data

### Exporting to CSV

Click the **"Download"** button (top right) to export all bookings.

**Export Includes**:
- All visible columns
- All bookings (not just filtered results)
- Customer contact information
- Assignment status
- Travel preferences

**Use Cases**:
- Reporting and analytics
- Backup records
- Share with team members
- Import to other systems
- Performance tracking

**File Format**: CSV (Comma-Separated Values)
- Opens in Excel, Google Sheets, etc.
- Preserves all data
- Easy to manipulate and analyze

---

## Status Badges

### Understanding Status Colors

**Assigned** (Green Badge):
- Booking has been assigned to an agent
- Someone is responsible for following up
- Lead exists and is being managed

**Unassigned** (Orange Badge):
- Booking has not been assigned
- Needs attention
- Should be assigned to agent soon

**Best Practice**: Prioritize unassigned bookings for quick assignment.

---

## Working with Bookings

### Important Limitation

**This page is VIEW-ONLY**. You cannot:
- Assign agents to bookings
- Change booking status
- Edit customer information
- Update travel preferences

### Managing Bookings Through Leads

To manage a booking enquiry:

1. Note the customer's name or email from Bookings page
2. Navigate to **Admin → CRM → Leads**
3. Search for the lead by:
   - Customer name
   - Email address
   - Phone number
4. The lead will have "Lead Source: Booking Enquiry Form"
5. Click edit icon on the lead
6. Manage through Leads page:
   - Assign agent
   - Change status
   - Create contact
   - Move through workflow
   - Convert to deal

**Why This Design?**
- Bookings page: Quick reference for raw enquiries
- Leads page: Full management capabilities
- Prevents duplicate management interfaces
- Maintains data consistency

---

## Common Workflows

### Reviewing New Bookings

**Daily Review Process**:
1. Navigate to Bookings page
2. Apply Status filter: "Unassigned"
3. Review each unassigned booking
4. Note customer details and preferences
5. Switch to Leads page
6. Find corresponding lead
7. Assign to appropriate agent
8. Agent begins qualification process

### Following Up on Assigned Bookings

1. Apply Status filter: "Assigned"
2. Apply Agent filter: Select your name
3.