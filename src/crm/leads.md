---
title: Leads
icon: fa6-solid:user-plus       # lead
order: 2
comments: false
category:
  - CRM
# A page can have multiple tags
tag:
  - Guide
contributors: false
editLink: false
author: false
comment: false

---
# Leads Management Training Guide

## Overview
The Leads page helps you track and manage potential customers from initial inquiry through to conversion. This guide will walk you through all features and best practices for managing leads effectively.

---

## Accessing the Leads Page

Navigate to: **Admin → CRM → Leads**

The Leads page displays all captured leads in a table format with the following information:
- Lead ID
- Created date and time
- Contact details (name, email, phone)
- Lead source
- Current status
- Assigned agent

---

## Understanding Lead Sources

Leads can come from three main sources:

1. **Booking Enquiry Form** - Customer flight and accommodation requests
2. **Contact Us Form** - General inquiries and questions
3. **Package Enquiry Form** - Interest in specific travel packages
4. **Manual Entry** - Leads added directly by agents

---

## Understanding the Lead Status Workflow (State Machine)

The system uses a **State Machine** to manage lead progression through a structured workflow. This ensures consistent handling of leads from initial contact to conversion.

### Viewing the State Machine

Navigate to: **Admin → Ref Data → State Machine**

Here you'll see a visual timeline showing all possible status transitions in the lead lifecycle.

### The Complete Lead Journey

The lead workflow follows this sequence:

#### 1. **New** (Initial Stage)
When a lead first enters the system, it starts as "New". From here you can move to:
- **Qualified** - Lead meets criteria for follow-up
- **Unqualified** - Lead doesn't meet criteria

#### 2. **Qualified** (Assessment Complete)
Once qualified, you can move to:
- **Unreached** - Attempting to make contact
- **Reached** - Successfully made contact

#### 3. **Unqualified** (Needs Reassessment)
Can be moved back to:
- **Qualified** - If circumstances change

#### 4. **Unreached** (Contact Attempts)
When trying to reach the lead:
- **Retry Contact** - Need another attempt
- **Not Reached** - Unable to contact after multiple tries
- **Reached** - Successfully contacted

#### 5. **Retry Contact** (Additional Attempts)
Continue trying to reach:
- **Not Reached** - Still unable to contact
- **Reached** - Successfully contacted

#### 6. **Reached** (Initial Contact Made)
After making contact:
- **Not Interested** - Lead declines services
- **Follow-up Required** - Need to schedule follow-up
- **Interested** - Lead expresses interest (creates Deal)

#### 7. **Follow-up Required** (Scheduling)
Move to:
- **Follow-up Scheduled** - Appointment set

#### 8. **Follow-up Scheduled** (Appointment Set)
After follow-up:
- **Interested** - Lead expresses interest
- **Not Interested** - Lead declines

#### 9. **Interested** (Deal Created) 
Lead shows genuine interest:
- **Preparing Quotation** - Begin quote creation

#### 10. **Preparing Quotation** (Quote Development)
Move to:
- **Quotation Sent** - Quote delivered to customer

#### 11. **Quotation Sent** (Awaiting Response)
Customer decides:
- **Quote Accepted** - Customer accepts quote
- **Quote Rejected** - Customer declines quote

#### 12. **Quote Accepted** (Moving Forward)
Proceed to:
- **Generating Payment Link** - Create payment option

#### 13. **Generating Payment Link** (Payment Setup)
Move to:
- **Awaiting Payment** - Payment link sent

#### 14. **Awaiting Payment** (Payment Pending)
Customer payment action:
- **Payment Received** - Payment successful
- **Payment Not Received** - Payment not completed

#### 15. **Payment Received** (Success!)
Final step:
- **Won** 🏆 - Deal successfully closed!

#### 16. **Payment Not Received** (Recovery Options)
Can move to:
- **Generating Payment Link** - Resend payment link
- **Awaiting Payment** - Continue waiting
- **Lost** - Deal lost

#### Additional Document Workflow Statuses

**Awaiting Documents** → **Documents Not Received**

**Documents Received** → **Verifying Documents**

**Verifying Documents** → 
- **Documents Verified** → **Generating Payment Link**
- **Documents Not Verified** → **Awaiting Documents** or **Lost**

**Documents Not Received** → **Awaiting Documents** or **Lost**

### Status Restrictions

**Important:** The system only allows you to move leads to valid next statuses based on the State Machine. You cannot skip stages or move backward unless specifically permitted by the workflow.

For example:
- ✓ You CAN move from "Qualified" to "Unreached"
- ✗ You CANNOT move from "New" directly to "Quotation Sent"

---

## Lead Status Management

### Understanding Stages

Leads progress through three main stages visible in the lead interface:

1. **Lead Generation** - Initial capture of lead information
2. **Lead Qualification** - Assessment and contact attempts
3. **Contact** - Active communication with the lead

### Available Statuses in Lead Interface

The main statuses you'll work with in the Leads page:

- **New** (Lead Generation)
- **Attempting Contact** (Lead Qualification)
- **Contacted** (Lead Qualification)
- **Not Interested** (Lead Qualification)
- **Interested** (Contact)

**Note:** The full State Machine contains many more statuses that become relevant as deals progress through the sales pipeline. The Leads page focuses on the early stages up to "Interested."

### Moving a Lead Status

1. Open the lead details
2. Locate the **"Move Status To"** dropdown
3. Select the new status (only valid transitions will appear)
4. The system validates the move based on the State Machine rules

**Important:** You can only move leads to statuses within movable stages and according to State Machine workflow rules.

---

## Adding a New Lead Manually

1. Click the **"Add Lead"** button (top right)
2. Fill in the contact information:
   - First Name
   - Last Name
   - Email Address (required)
   - Phone Number (required)
3. Click **Submit**

The new lead will appear in your leads table with a "New" status.

---

## Viewing and Editing Leads

### For Form Capture Leads (Booking, Contact, Package Enquiries)

1. Click the **edit icon (pen)** next to the lead
2. A detailed modal opens showing:
   - All form details submitted by the customer
   - Current status and stage
   - Assigned agent
   - Last update information

### For Manual Leads

1. Click the **edit icon**
2. Update contact details as needed
3. Assign an agent
4. Change the status

---

## Creating Deals from Interested Leads

When a lead shows genuine interest, you'll move them to "Interested" status, which creates a Deal.

### Prerequisites

Before moving to "Interested," **a Contact must exist** for this lead.

### If Contact Exists
- Green message: "Lead Contact Found" ✓
- You can proceed to save

### If Contact Does Not Exist
- Red message: "Lead Contact Not Found!"
- Click **"Create Contact"** button
- The form pre-populates with lead information
- Complete any additional required fields
- Submit to create the contact
- Return to lead and move status to "Interested"

---

## Creating a Contact from a Lead

### Basic Information (Required)

1. **Contact Type**: Choose Individual or Company
   - For companies, select the associated company from the dropdown

2. **Personal Details**:
   - Title (Mr., Mrs., Ms., etc.)
   - First Name
   - Last Name
   - Email
   - Phone Number

3. **Gender**: Select Male, Female, or Other

4. **Birthday**: 
   - Enter month (MM) and day (DD)
   - System validates the date
   - Check "Allow Feb 29" if needed for leap year birthdays
   - **Confirm accuracy** - this is used for birthday messages

### Optional Information

**Address Search**:
- Type to search for addresses
- Toggle "Enable Global Search" for international addresses
- Select from suggestions
- System captures coordinates automatically

**Additional Fields**:
- Work Phone Number
- ID Number
- Passport Number
- Job Title
- Department
- Cost Center

### Submitting the Contact

1. Review all information for accuracy
2. Click **Submit**
3. Contact is created and linked to the lead
4. Return to lead to complete status change

---

## Assigning Leads to Agents

### From Lead Details

1. Open any lead
2. Find **"Assigned Agent"** dropdown at the top
3. Select an agent from the list
4. Click **Save**

The assigned agent will now be responsible for following up on this lead.

---

## Searching and Filtering

### Keyword Search
Use the search box to find leads by:
- First or last name
- Email address
- Phone number
- Form type/lead source

### Sorting
Click any column header to sort by that field (ID, date, name, email, status, agent).

---

## Downloading Lead Data

Click the **"Download"** button to export all leads to CSV format for external reporting or backup.

---

## Understanding Form Capture Details

### Booking Enquiry Details

When viewing a booking enquiry lead, you'll see:

**Travel Information**:
- Departure and destination airports
- Travel dates (departure and return)
- Number of travelers (adults and children)
- Trip nature
- Cabin preference

**Accommodation Preferences**:
- Star rating
- Meal preferences (breakfast, dinner)
- Type (B&B, Hotel, Resort, Self-Catering)

**Additional Services**:
- Budget
- Car hire requirements (if applicable)

### Contact Us Enquiry Details

- Customer name and contact info
- Subject line
- Message content

### Package Enquiry Details

- Package reference code and ID
- Package title (clickable link to view package)
- Travel dates
- Customer message
- All customer contact information

---



## Common Workflows

### New Booking Enquiry (Full Workflow)
1. Lead appears with "New" status
2. Assign to specialist agent
3. Review travel requirements
4. Move to "Qualified" (meets criteria)
5. Move to "Unreached" (begin contact attempts)
6. If needed: "Retry Contact"
7. Move to "Reached" (contact successful)
8. Assess interest level
9. If interested: Create contact, move to "Interested" (creates Deal)
10. Continue through quotation and payment workflow
11. Final goal: "Won" 🏆

### Manual Lead Entry
1. Add lead manually
2. Starts at "New"
3. Assign to yourself or team member
4. Move to "Qualified" or "Unqualified"
5. Begin contact attempts
6. Update status based on response
7. Create contact when qualified
8. Move to "Interested" if appropriate

### Follow-up Scenario
1. Lead at "Reached" status
2. Customer needs time to think
3. Move to "Follow-up Required"
4. Schedule callback
5. Move to "Follow-up Scheduled"
6. After follow-up: Move to "Interested" or "Not Interested"

---


### Accessing State Machine Settings

Navigate to: **Admin → Ref Data → State Machine**



---

## Support

For additional assistance with the Leads page or State Machine configuration, contact your system administrator or refer to the main CRM documentation.