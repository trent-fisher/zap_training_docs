---
title: Deals
icon: mdi:handshake              # for deal
order: 2
category:
  - Guide
tag:
  - Markdown
comment: false
author: false


---

# Deals Management Training Guide

## Overview
The Deals page manages opportunities that have progressed beyond the initial lead stage. When a lead moves to "Interested" status, a deal is automatically created. Deals track the sales pipeline from initial interest through quotation, payment, and closure. This guide covers managing deals, generating payment links, handling documents, and closing deals successfully.

---

## Accessing the Deals Page

Navigate to: **Admin → CRM → Deals**

The Deals page displays all active deals in a table format with the following information:
- Deal ID
- Lead ID (originating lead)
- Assigned Agent
- Current Status
- Deal Value (in ZAR)
- Deal Probability (percentage)
- Action buttons (Edit, Manage Documents)

---

## Understanding Deal Creation

### How Deals Are Created

Deals are **automatically created** when:
1. A lead reaches "Interested" status in the Leads module
2. A contact exists for that lead
3. The lead is saved with the new status

**Important:** You cannot manually create deals. They must originate from qualified leads.

### Deal-Lead Relationship

- Each deal is linked to its originating lead via Lead ID
- The deal inherits information from the lead and associated contact
- Agent assignment carries over from the lead
- Deal status continues from where the lead workflow left off

---

## Deal Status Workflow

Deals follow the State Machine workflow starting from "Interested":

**Interested** → **Preparing Quotation** → **Quotation Sent** → **Quote Accepted/Rejected**

Then, depending on requirements:

**Quote Accepted** → **Documents** (if required) → **Generating Payment Link** → **Awaiting Payment** → **Payment Received** → **Won** 

Or if documents aren't required:

**Quote Accepted** → **Generating Payment Link** → **Awaiting Payment** → **Payment Received** → **Won** 

Possible alternate endings:
- **Quote Rejected** (customer declines)
- **Payment Not Received** → **Lost**
- **Documents Not Verified** → **Lost**

---

## Viewing and Editing Deals

### Opening a Deal

1. Locate the deal in the table
2. Click the **edit icon (pen)** in the Actions column
3. The Edit Deal modal opens

### Deal Information Displayed

**Header Section**:
- Assigned Agent (editable dropdown)
- Last Updated By information
- Last Update timestamp

**Status Section**:
- Current Deal Status (with status badge)
- Current Stage in the workflow
- "Move Status To" dropdown (for valid transitions)

**Status-Specific Actions**:
Different actions appear based on current status (see sections below)

---

## Managing Deal Status Transitions

### Standard Status Changes

1. Open the deal for editing
2. Review current status and stage
3. Select new status from **"Move Status To"** dropdown
   - Only valid next statuses appear (per State Machine rules)
4. Click **Save**
5. Deal updates to new status

**Note:** The dropdown automatically filters to show only statuses you can move to from the current position.

---

## Handling Quote Acceptance

When a deal reaches **"Quote Accepted"** status, you must decide if documents are required.

### Documents Required Decision

**Question Presented**: "Documents Required?"

**Option 1: No Documents Required**
1. Select **"No"**
2. "Move Status To" dropdown appears
3. Select next status (typically "Generating Payment Link")
4. Click **Save**
5. Proceed to payment generation

**Option 2: Documents Required**
1. Select **"Yes"**
2. Document selection checkboxes appear
3. Select required documents:
   -  Identity Document
   -  Passport
4. Click **Save** (separate from main Save button)
5. System creates document requirements
6. Deal status automatically moves to "Awaiting Documents"

**Available Document Types**:
- **Identity Document**: National ID, driver's license, or similar
- **Passport**: International passport document

**Note:** You can require one, both, or neither document type. Select based on travel requirements and company policy.

---

## Managing Documents

### Accessing Document Management

The **Manage Documents** icon (file with plus) appears for deals that have document requirements.

**To Access**:
1. Locate deal in table
2. Click the **file-plus icon** in Actions column
3. Documents modal opens

### Document Management Modal Structure

The modal shows two sections:

#### 1. Documents Required Section
Displays documents that still need to be uploaded:
- Document type name
- File upload field
- Upload button

**To Upload a Document**:
1. Click **Choose File** next to the document type
2. Select file from your computer
3. Click **Upload**
4. File uploads to system
5. Document moves to "Uploaded Documents" section

**Supported File Formats**: PDF, JPG, PNG (check with administrator for specifics)

#### 2. Uploaded Documents Section
Displays all documents already uploaded for this deal:

**Columns**:
- **ID**: Document record ID
- **Document Type**: Type of document
- **File Name**: Clickable link to view/download
- **File Size**: Document size (automatically formatted)
- **Verified**: Check mark (verified) or X (not verified)
- **Action**: Verify button (if not verified)

### Document Verification

Documents must be verified before deals can proceed.

**To Verify a Document**:
1. Click the file name to open/download
2. Review document for:
   - Authenticity
   - Correct information
   - Valid dates (not expired)
   - Clear, readable images
3. If acceptable, click **Verify** button (green, with check icon)
4. Document status changes to "Verified" ✓
5. Verified documents cannot be unverified

**Important**: Once all required documents are uploaded AND verified, you can move the deal status forward to "Generating Payment Link".

### Document Workflow

**Complete Document Flow**:
1. Quote Accepted → Select documents required → Save
2. Deal moves to "Awaiting Documents"
3. System notifies customer (if configured)
4. Customer or agent uploads documents
5. Agent verifies each document
6. All documents verified → Move to "Documents Received"
7. Move to "Verifying Documents"
8. Move to "Documents Verified"
9. Move to "Generating Payment Link"

**If Documents Not Received/Verified**:
- Can move to "Documents Not Received"
- Can move to "Lost" (deal abandoned)

---

## Generating Payment Links

When a deal reaches **"Generating Payment Link"** status, the **"Generate Payment Link"** button appears (green, with wallet icon).

### Opening Payment Link Form

1. Deal must be at "Generating Payment Link" status
2. Click **"Generate Payment Link"** button
3. Payment link modal opens
4. System shows "Contacting Payment Merchant..." loader
5. Form populates with contact information

### Payment Link Form Sections

#### 1. Contact Details (Auto-Populated)

These fields are pre-filled from the deal's contact:
- Company name
- Contact full name
- Email address
- Phone number

**Note**: This section is display-only for reference.

#### 2. Payment Information (Required)

**Merchant Invoice ID**:
- Your internal invoice or reference number
- Used for accounting and reconciliation
- Must be unique per payment
- Example: "INV-2024-001234"

**Amount**:
- Payment amount in South African Rand (ZAR)
- Enter numbers only (no currency symbol)
- System automatically formats
- Example: "15000" displays as "R 15,000.00"

#### 3. Customer Information (Editable)

These fields pre-populate from contact but can be edited:

**First Name**: Customer's first name

**Surname**: Customer's last name

**Email Address**: 
- Must be valid email format
- Payment link sent here if email option selected
- Required field

**Country Code & Mobile**:
- **Country Code**: Select from dropdown
  - Search by country name
  - Shows flag and dialing code
  - Example: South Africa (+27)
- **Mobile Number**: Customer's mobile number
  - Must start with 0 (local) or +27 (international format)
  - Must be 10 digits (including area code)
  - Used for SMS and WhatsApp if selected
  - Example: "0821234567" or "+27821234567"

**Validation**: The system validates the mobile number format. You'll see an error message if the format is incorrect.

#### 4. Customer Billing Information (Required)

**Address Search**:
Uses the same intelligent search as Companies and Contacts modules.

**To Add Billing Address**:
1. Type address in search field
2. Toggle "Enable Global Search" if international address
3. Select correct address from suggestions
4. System auto-populates:
   - Street address (Street1)
   - City
   - State/Province
   - Country
   - Postal Code

**Displayed After Selection**:
- Full address line
- City, State, Country broken down
- Postal code

**Important**: Accurate billing information is required by the payment gateway and may be used for fraud prevention.

#### 5. Payment Link Options

Select how to deliver the payment link:

**Send Email**: Send payment link via email
- Recommended: Always enable
- Provides permanent link reference
- Customer can forward to accounting

**Send SMS**: Send payment link via SMS
- Requires valid mobile number
- Good for immediate notification
- Character limits apply

**Send WhatsApp**: Send payment link via WhatsApp
- Requires valid mobile with WhatsApp
- Modern, preferred by many customers
- Supports rich formatting

**Note**: You can select one, multiple, or all delivery methods. Selecting multiple increases likelihood of customer receiving and acting on the payment link.

### Generating the Link

1. Review all information for accuracy
2. Verify mobile number format if SMS/WhatsApp selected
3. Verify email address if email selected
4. Click **Generate**
5. System contacts Peach Payments gateway
6. Payment link created
7. Link sent via selected method(s)
8. Deal status automatically moves to "Awaiting Payment"
9. Modal closes

**What Happens Next**:
- Customer receives payment link
- Link remains active until expiry (typically 7 days)
- Customer can pay via multiple methods
- System monitors payment status

---

## Monitoring Payment Status

### Viewing Payment Status

When a deal is at **"Awaiting Payment"** status:

1. Open the deal for editing
2. View **"Current Payment Status"** section
3. Status badge displays current state:
   - **Pending**: Link sent, awaiting action
   - **Paid**: Payment completed successfully
   - **Failed**: Payment attempt failed
   - **Expired**: Payment link expired

### Viewing Detailed Payment Information

Click **"View Payment Info"** button (orange, with eye icon) to see complete payment details.

#### Payment Information Modal Sections

**1. Payment Details**:
- **Source**: Where payment originated (e.g., "Payment Link")
- **T&Cs Accepted**: Whether customer accepted terms (✓ or ✗)
- **Payment Link**: Clickable URL to payment page
- **Merchant Invoice ID**: Your reference number
- **Amount**: Payment amount with currency
- **Created Date**: When link was generated
- **Expiry Date**: When link expires

**2. Customer Details**:
- Customer full name
- Email address
- Mobile number
- Complete billing address

**3. Audit Log** (Timeline):
Visual timeline of all payment events:
- Each status change
- Timestamp for each event
- Chronological order from oldest to newest

**Example Timeline**:
```
Created → Pending → Viewed → Paid → Completed
```

**Note**: This information is retrieved in real-time from Peach Payments gateway.

---

## Handling Payment Outcomes

### Payment Received

When customer successfully pays:

1. Payment status updates to "Paid"
2. Open deal for editing
3. Verify payment in Payment Info modal
4. Select **"Payment Received"** from status dropdown
5. Click **Save**
6. Deal moves to "Payment Received" status
7. Next step: Move to **"Won"** 

### Payment Not Received

If customer doesn't pay within timeframe:

**Option 1: Resend Payment Link**
1. Select **"Generating Payment Link"** from dropdown
2. Generate new payment link with extended expiry
3. Deal returns to "Awaiting Payment"

**Option 2: Continue Waiting**
1. Keep at **"Awaiting Payment"** status
2. Follow up with customer
3. Wait for payment

**Option 3: Close as Lost**
1. Select **"Lost"** from dropdown
2. Deal closes as unsuccessful
3. Document reason in notes

---

## Closing Deals

### Winning a Deal (Won)

To successfully close a deal:

1. Ensure all requirements met:
   - Documents uploaded and verified (if required)
   - Payment received and confirmed
2. Open deal for editing
3. Current status should be "Payment Received"
4. Select **"Won"** from "Move Status To" dropdown
5. Click **Save**
6. Deal marked as successfully closed
7.  

**What "Won" Means**:
- Revenue recognized
- Commission calculated (if applicable)
- Customer journey complete
- Success metrics updated

### Losing a Deal (Lost)

Deals can be lost at various stages:

**Common Loss Points**:
- Quote Rejected: Customer declined offer
- Documents Not Received: Customer failed to provide documents
- Documents Not Verified: Documents invalid or fraudulent
- Payment Not Received: Customer didn't pay

**To Close as Lost**:
1. Open deal for editing
2. Select **"Lost"** from dropdown (available at multiple stages)
3. Click **Save**
4. Deal marked as lost

**Important**: Document the reason for loss in your CRM notes or follow company procedures for lost deal reporting.

---

## Deal Value and Probability

### Understanding Deal Value

**Deal Value**: The potential revenue from this deal in ZAR (South African Rand).

- Displayed in table as formatted currency
- Sortable (high to low, low to high)
- Used for pipeline reporting
- Represents total deal amount

**Setting Deal Value**: Typically set when deal is created from lead or during quotation stage.

### Understanding Deal Probability

**Deal Probability**: The likelihood (0-100%) that this deal will close successfully.

**Visual Representation**:
- Green progress bar in table
- Percentage value
- Updates based on status progress

**Typical Probability Progression**:
- Interested: 10-20%
- Preparing Quotation: 30-40%
- Quotation Sent: 50%
- Quote Accepted: 70%
- Documents Verified: 80%
- Awaiting Payment: 90%
- Payment Received: 95%
- Won: 100%

**Uses**:
- Weighted pipeline forecasting
- Revenue projections
- Performance tracking

---

## Searching and Filtering

### Keyword Search

Use the search box to find deals by:
- Lead ID
- Agent name

The search filters results instantly as you type.

### Sorting

Click column headers to sort by:
- Deal ID
- Lead ID
- Agent
- Status
- Deal Value
- Deal Probability

Click again to reverse sort order (ascending/descending).

---

## Downloading Deal Data

Click the **"Download"** button to export all deals to CSV format.

**CSV Export Includes**:
- All visible columns
- All deals (not just filtered results)
- Useful for:
  - Pipeline analysis
  - Revenue forecasting
  - Performance reporting
  - External system integration

**Success Notification**: "Deals CSV File Exported! Note: Check Your Downloads Folder"

---

## Best Practices

### Deal Management

1. **Keep Status Current**: Update deal status as soon as stages complete
2. **Act Quickly on Payments**: Generate payment links promptly after quote acceptance
3. **Verify Documents Thoroughly**: Don't rush document verification
4. **Monitor Payment Status**: Check payment status daily for active links
5. **Follow Up**: Contact customers if payment links near expiry

### Document Management

1. **Clear Requirements**: Specify exactly which documents needed
2. **Quick Verification**: Verify documents within 24 hours of upload
3. **Communicate Issues**: Contact customer immediately if document problems
4. **Secure Storage**: Documents stored securely in cloud storage
5. **Maintain Privacy**: Only access documents when necessary

### Payment Links

1. **Accurate Information**: Double-check all customer details before generating
2. **Multiple Delivery Methods**: Use email + SMS or WhatsApp for best results
3. **Clear Invoice References**: Use descriptive, unique invoice IDs
4. **Monitor Expiry**: Track when links expire and follow up
5. **Resend When Needed**: Don't hesitate to generate new links

### Pipeline Health

1. **Regular Review**: Check deals list daily for stuck deals
2. **Update Probability**: Adjust probability as circumstances change
3. **Clean Pipeline**: Close or update stale deals
4. **Document Reasons**: Keep notes on status changes
5. **Learn from Losses**: Review lost deals to improve process

---

## Deal Stages Summary

Understanding the stages helps track deal progress:

**Stage Progression**:
1. **Qualification**: Interest established (from Leads module)
2. **Proposal**: Preparing and sending quotation
3. **Negotiation**: Quote accepted/rejected decision
4. **Documents**: Document collection and verification (if required)
5. **Payment**: Payment link generation and processing
6. **Closed Won/Lost**: Final outcome

Each stage contains multiple statuses that track detailed progress.

---

## Integration with Other Modules

### Deals and Leads

- Deals automatically created from "Interested" leads
- Lead ID links back to originating lead
- Contact information flows from lead to deal
- Agent assignment carries over

### Deals and Contacts

- Deal requires existing contact
- Contact information used for payment links
- Communication history linked to contact
- Company affiliation maintained

### Deals and Documents

- Document requirements created per deal
- Documents stored against deal ID
- Verification status tracked per deal
- Documents accessible from multiple modules

### Deals and Payments

- Payment links generated per deal
- Payment status monitored in real-time
- Payment history stored
- Financial integration points available

---

## Troubleshooting

**Deal not appearing in list**
- Check if lead reached "Interested" status
- Verify contact exists for lead
- Use search function with Lead ID
- Refresh page

**Cannot move to next status**
- Verify current status allows transition (check State Machine)
- Ensure prerequisites met (documents verified, payment received, etc.)
- Contact administrator if valid transition blocked

**Payment link generation fails**
- Verify all required fields completed
- Check mobile number format
- Ensure valid email address
- Verify billing address selected
- Check internet connection
- Contact administrator if persistent

**Documents not uploading**
- Check file size (may have limits)
- Verify file format supported
- Ensure stable internet connection
- Try different browser
- Contact administrator if issue persists

**Payment status not updating**
- Status updates may have delay
- Click "View Payment Info" to force refresh
- Check Peach Payments dashboard
- Contact payment gateway support

**Cannot verify document**
- Ensure document has been uploaded
- Click document link to view
- Refresh page and try again
- Contact administrator if button not working

**Probability not displaying**
- Probability may need to be set initially
- Check if deal has value assigned
- Refresh page
- Contact administrator

---

## Common Workflows

### Standard Deal Closure (With Documents)

1. Lead converts to "Interested" → Deal created
2. Agent assigned (or inherited from lead)
3. Move to "Preparing Quotation"
4. Prepare quote document/itinerary
5. Move to "Quotation Sent"
6. Customer reviews quote
7. Move to "Quote Accepted"
8. Select "Documents Required: Yes"
9. Check required document types → Save
10. Deal moves to "Awaiting Documents"
11. Documents uploaded (by agent or customer)
12. Verify each document
13. Move to "Documents Received" → "Verifying Documents" → "Documents Verified"
14. Move to "Generating Payment Link"
15. Click "Generate Payment Link"
16. Complete payment form
17. Click Generate
18. Deal moves to "Awaiting Payment"
19. Monitor payment status
20. Customer pays
21. Move to "Payment Received"
22. Move to "Won" 

### Fast-Track Deal (No Documents)

1. Lead converts to "Interested" → Deal created
2. Move through quotation stages
3. Quote Accepted
4. Select "Documents Required: No"
5. Move to "Generating Payment Link"
6. Generate payment link
7. Customer pays
8. Move to "Payment Received"
9. Move to "Won" 

### Recovering Unpaid Deal

1. Deal at "Awaiting Payment"
2. Check "View Payment Info"
3. Link expired or customer didn't pay
4. Select "Payment Not Received"
5. Option A: Move to "Generating Payment Link" → Generate new link
6. Option B: Move to "Lost" if customer unresponsive

---

## Tips for Success

1. **Respond to Payment Status**: Check payment status daily and act on changes

2. **Clear Communication**: Keep customers informed at each stage

3. **Document Everything**: Use notes feature to track interactions

4. **Set Reminders**: Follow up before payment links expire

5. **Accurate Data**: Ensure all customer information correct before generating payment

6. **Verify Quickly**: Don't let documents sit unverified

7. **Learn Patterns**: Note which stages cause delays and address them

8. **Clean Pipeline**: Regularly update or close stale deals

9. **Use Filters**: Sort by probability or value to prioritize

10. **Celebrate Wins**: Acknowledge successful closures

---

## Support

For additional assistance with the Deals module, payment gateway issues, or document management, contact your system administrator or refer to the main CRM documentation.

For Peach Payments technical support, refer to payment gateway documentation or contact their support team directly.