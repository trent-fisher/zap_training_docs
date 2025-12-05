---
# This is the title of the article
title: Payments
# This is the icon of the page
icon: mdi:credit-card-outline    
# This control sidebar order
order: 3
# Set author
author: false

# A page can have multiple categories
category:
  - CRM
# A page can have multiple tags
tag:
  - Page config
  - Guide
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
# You can customize footer content
footer: Footer content for test
# You can customize copyright content
copyright: No Copyright
---
# Payment Links Management Training Guide

## Overview
The Payment Links page allows you to view and manage all payment links generated through Peach Payments for your customers. This is a read-only module where you can monitor payment link status, track transactions, and access customer payment information. This guide covers how to view, search, refresh, and download payment link data.

---

## Accessing the Payment Links Page

Navigate to: **Admin → CRM → Payments**

The Payment Links page displays all payment links in a scrollable table format with the following information:
- Source
- Created Date
- Expiry Date
- Payment Status
- Customer Name
- Invoice ID
- Amount
- Payment Link ID
- Payment Link URL
- Customer Email
- Customer Phone Number
- Terms of Service Acceptance

---

## Understanding the Payment Links Table

### Table Columns Explained

**Source**
- Indicates where the payment link was generated from
- Example: "Website", "Admin Portal", "API"

**Created Date**
- When the payment link was generated
- Displays both date and time
- Format: DD/MM/YYYY HH:MM

**Expiry Date**
- When the payment link expires and can no longer be used
- Displays both date and time
- Format: DD/MM/YYYY HH:MM
- After this date, customer cannot complete payment

**Status**
- Current state of the payment
- Displayed as a colored tag/badge
- Common statuses include:
  - **Pending**: Payment link sent, awaiting payment
  - **Completed**: Payment successfully processed
  - **Failed**: Payment attempt failed
  - **Expired**: Payment link has passed expiry date
  - **Cancelled**: Payment link was cancelled

**Customer**
- Full name of the customer (First Name + Surname)
- Example: "Sarah Johnson"

**Invoice ID**
- Merchant invoice identifier
- Links payment to specific booking or service
- Use this to cross-reference with your invoicing system

**Amount**
- Payment amount in South African Rand (ZAR)
- Displayed with currency formatting
- Example: "R 2,500.00"

**Payment Link ID**
- Unique identifier for the payment link
- System-generated reference number
- Use for technical support or queries

**Payment Link URL**
- The actual payment link sent to customer
- Clickable link that opens in new tab
- Copy icon available for easy sharing
- Example: "https://pay.peachpayments.com/xyz123"

**Email Address**
- Customer's email address
- Where payment link and receipts are sent

**Phone No.**
- Customer's mobile number
- Contact number for payment-related queries

**Terms of Service Accepted**
- Indicates if customer accepted terms
- Shows "true" or "false"

---

## Refreshing Payment Links Data

The system loads payment links from Peach Payments when you open the page. To get the latest data:

### Using the Refresh Button

1. Locate the **"Refresh"** button (top right area)
2. Click the button
3. System displays "Contacting Peach Payments..." loading message
4. Table updates with latest payment link data from Peach Payments
5. New statuses and recent payment links will appear

**When to Refresh**:
- After generating a new payment link
- To check if pending payment has been completed
- When customer reports making payment
- At start of each work session
- When troubleshooting payment issues

---

## Searching for Payment Links

### Keyword Search

Use the search box at the top-left of the table to find payment links by:
- Customer First Name
- Customer Surname
- Payment Link ID
- Invoice ID

**How to Search**:
1. Click in the search box (has magnifying glass icon)
2. Type your search term
3. Results filter instantly as you type
4. Example: Type "Sarah" to find all payments for customers named Sarah
5. Example: Type invoice number to find specific payment

**Search Tips**:
- Search is case-insensitive
- Partial matches work (typing "John" finds "Johnson")
- Clear search box to see all payment links again

---

## Sorting Payment Links

Click any column header to sort the table:

**Sortable Columns**:
- **Created Date**: Sort by newest or oldest first
  - Click once: Ascending (oldest first)
  - Click twice: Descending (newest first)
  - Default recommendation: Newest first

**How to Sort**:
1. Click the column header
2. Small arrow appears indicating sort direction
3. Click again to reverse sort order
4. Click a different column to sort by that field

---

## Viewing and Using Payment Links

### Accessing a Payment Link

**To View**:
1. Locate the payment link in the "Payment Link URL" column
2. Click the blue hyperlinked URL
3. Payment page opens in new browser tab
4. You can see the payment interface the customer sees

**To Copy**:
1. Locate the payment link in the "Payment Link URL" column
2. Click the **copy icon** (clipboard) next to the URL
3. Success message appears: "Payment Link URL Copied"
4. The URL is now in your clipboard
5. Paste (Ctrl+V or Cmd+V) to share via email, SMS, WhatsApp, etc.

### Sharing Payment Links with Customers

**Best Practices**:
- Copy link using the copy icon (ensures accuracy)
- Share via customer's preferred communication channel
- Include payment amount and invoice reference
- Remind customer of expiry date
- Confirm customer can access the link

**Example Message**:
```
Hi Sarah,

Here is your payment link for Invoice #12345:
[paste payment link]

Amount: R 2,500.00
Expiry: 15/01/2025 23:59

Please complete payment before the expiry date. Contact us if you need assistance.
```

---

## Monitoring Payment Status

### Status Indicators

Payment status is shown with color-coded tags:

**Pending** (typically orange/yellow):
- Payment link sent but not yet paid
- Customer hasn't completed transaction
- Action: Follow up with customer if approaching expiry

**Completed** (typically green):
- Payment successfully processed
- Funds received
- No action needed

**Failed** (typically red):
- Payment attempt unsuccessful
- Could be due to insufficient funds, declined card, etc.
- Action: Contact customer to resolve and generate new link if needed

**Expired** (typically gray):
- Payment link has passed expiry date
- Customer can no longer use this link
- Action: Generate new payment link if payment still required

**Cancelled** (typically gray):
- Payment link was deliberately cancelled
- Link is no longer valid
- Action: Generate new link if cancellation was error

### Checking Payment Status

**Workflow**:
1. Customer reports making payment
2. Click **Refresh** button to get latest data from Peach Payments
3. Search for customer name or invoice ID
4. Check Status column
5. If "Completed": Confirm with customer and proceed with service
6. If "Pending": Ask customer to try again or check their bank
7. If "Failed": Investigate error and possibly generate new link

---


## Understanding Payment Link Lifecycle

### 1. Payment Link Creation
- Generated through your booking or invoicing system
- Customer details and amount are set
- Expiry date is assigned (typically 7-30 days)
- Status: "Pending"

### 2. Link Sent to Customer
- Email sent automatically with payment link
- Customer receives invoice details
- Link is active and clickable

### 3. Customer Payment Process
- Customer clicks link
- Redirected to Peach Payments secure page
- Enters card/payment details
- Completes transaction

### 4. Payment Outcome
- **Success**: Status updates to "Completed"
- **Failure**: Status updates to "Failed"
- **Abandoned**: Status remains "Pending"

### 5. Post-Payment
- Receipt sent to customer automatically
- Your system receives payment confirmation
- Service/booking can proceed

---

## Common Payment Link Scenarios

### Scenario 1: Customer Claims Payment Made But Status Shows Pending

**Action Steps**:
1. Click **Refresh** to get latest data
2. Check expiry date - ensure link hasn't expired
3. Search for payment by customer name
4. Check status column
5. If still "Pending":
   - Ask customer for payment reference number
   - Contact Peach Payments support with Payment Link ID
   - Check if customer completed all payment steps
6. If "Failed":
   - Check failure reason with support
   - Generate new payment link

### Scenario 2: Payment Link Expired Before Customer Paid

**Action Steps**:
1. Locate expired payment link in table
2. Note the amount and invoice details
3. Generate new payment link with same details
4. Send new link to customer
5. Inform customer of new expiry date
6. Old link will remain in table as "Expired" (for records)

### Scenario 3: Customer Needs Payment Link Resent

**Action Steps**:
1. Search for customer name or invoice ID
2. Check expiry date
3. If not expired:
   - Click copy icon next to Payment Link URL
   - Send copied link to customer via preferred method
4. If expired:
   - Generate new payment link
   - Send new link to customer

### Scenario 4: Wrong Amount on Payment Link

**Action Steps**:
1. Locate incorrect payment link
2. Check if customer has already paid:
   - If "Completed": Contact Peach Payments support for refund process
   - If "Pending": Cancel link (if feature available) or let it expire
3. Generate new payment link with correct amount
4. Send corrected link to customer
5. Keep records of both links for accounting

### Scenario 5: Month-End Reconciliation

**Action Steps**:
1. Click **Refresh** to ensure latest data
2. Click **Download** to export CSV
3. Open CSV in spreadsheet program
4. Filter by Created Date for the month
5. Filter by Status = "Completed"
6. Sum all completed payment amounts
7. Cross-reference with bank deposits
8. Investigate any discrepancies

---

## Payment Link Data Filtering

Although the system doesn't have advanced filters in the UI, you can use search and CSV export for filtering:

### By Date Range
1. Download CSV
2. Open in spreadsheet
3. Filter Created Date column
4. Select desired date range

### By Status
1. Download CSV
2. Open in spreadsheet
3. Filter Status column
4. Select specific status (e.g., "Completed")

### By Amount
1. Download CSV
2. Open in spreadsheet
3. Sort or filter Amount column
4. Find payments above/below certain value

### By Customer
Use the search box in the admin portal to find specific customers instantly.

---

## Troubleshooting

**Table shows "Contacting Peach Payments..." continuously**
- Check internet connection
- Wait up to 60 seconds for Peach Payments response
- Refresh browser page
- Contact IT support if issue persists

**Search not finding payment link**
- Verify spelling of customer name
- Try searching partial name
- Try searching by Invoice ID instead
- Click Refresh to ensure latest data loaded
- Check if payment link was actually created

**Download button not working**
- Ensure browser allows downloads
- Check browser popup blocker settings
- Try different browser
- Check if you have storage space

**Payment Link URL shows "undefined" or broken link**
- This indicates technical issue with link generation
- Contact technical support with Payment Link ID
- Generate new payment link for customer

**Status not updating after customer paid**
- Click Refresh button
- Wait 5 minutes and refresh again (payment processing delay)
- Verify customer completed all payment steps
- Check with customer for payment confirmation email
- Contact Peach Payments support if status still wrong after 1 hour

**Cannot copy payment link**
- Try clicking copy icon again
- Manually select URL text and copy (Ctrl+C)
- Check browser clipboard permissions
- Try different browser

**CSV export missing some columns**
- This is normal - CSV exports all available data
- Some columns may be empty if data not collected
- Column order may differ from table display

---

## Best Practices for Payment Link Management

### 1. Regular Monitoring

**Daily**:
- Check for newly completed payments
- Follow up on pending payments approaching expiry
- Respond to customer payment queries

**Weekly**:
- Review failed payments
- Generate replacement links for expired pending payments
- Download CSV for record keeping

**Monthly**:
- Export all payment data for accounting
- Reconcile completed payments with bank deposits
- Archive payment records

### 2. Customer Communication

**When Sending Payment Links**:
- Include clear payment amount
- State expiry date prominently
- Provide contact info for payment issues
- Confirm link is for correct service/booking

**Follow-Up Protocol**:
- Send reminder 2-3 days before expiry
- Contact customer if payment fails
- Confirm receipt of payment with customer

### 3. Record Keeping

- Download CSV monthly for permanent records
- Store payment link data for minimum 7 years (tax requirements)
- Keep invoice IDs synchronized with booking system
- Document any payment issues or refunds

### 4. Security

- Never share payment links publicly
- Only send to verified customer email/phone
- Verify customer identity before resending links
- Report suspicious payment activity immediately

### 5. Efficiency Tips

- Use search function to find payments quickly
- Bookmark Payment Links page for quick access
- Keep customer communication templates with placeholder for payment link
- Set up email notifications for payment completions (if available)

---

## Data Fields Reference

### Required Customer Information for Payment Links

When generating payment links (in other system modules), ensure you collect:
- Customer first name
- Customer surname
- Valid email address
- Mobile phone number
- Invoice/booking reference
- Payment amount
- Expiry date

### Optional Information
- Terms of service acceptance
- Source identifier
- Custom reference fields

---

## Integration Notes

The Payment Links module integrates with:

**Booking System**: Invoice IDs link payments to specific bookings

**Customer Records**: Customer names and contact info should match CRM records

**Accounting Software**: CSV exports can be imported for financial reconciliation

**Email System**: Payment link sent automatically to customer email

**Peach Payments Gateway**: Real-time status updates from payment processor

---

## Reporting with Payment Links Data

### Key Metrics to Track

**Payment Success Rate**:
- (Completed Payments / Total Payment Links) × 100
- Target: >85%

**Average Time to Payment**:
- Calculate days between Created Date and payment completion
- Target: <7 days

**Expiry Rate**:
- (Expired Pending Payments / Total Payment Links) × 100
- Target: <10%

**Failed Payment Rate**:
- (Failed Payments / Payment Attempts) × 100
- Investigate if >5%

### Monthly Reporting Process

1. Download CSV at month-end
2. Filter by Created Date for the month
3. Calculate metrics above
4. Sum total payments received (Completed status)
5. Identify trends (increasing failures, common amounts)
6. Create summary report for management

---

## Frequently Asked Questions

**Q: Can I edit a payment link after it's created?**
A: No, payment links cannot be edited. Generate a new link with correct details.

**Q: What happens after payment link expires?**
A: Customer cannot use expired link. Generate new link if payment still needed.

**Q: How long does it take for payment status to update?**
A: Usually instant, but can take up to 5 minutes. Click Refresh to check.

**Q: Can I delete payment links?**
A: No, payment links are maintained for record-keeping and audit purposes.

**Q: Why don't I see a payment link I just created?**
A: Click Refresh to load latest data from Peach Payments.

**Q: Can customers pay more than the amount shown?**
A: No, payment amount is fixed when link is generated.

**Q: What if customer pays after expiry date?**
A: Link won't work after expiry. Generate new link for customer.

**Q: How do I process refunds?**
A: Contact Peach Payments support with Payment Link ID for refund process.

**Q: Can I customize payment link expiry time?**
A: Expiry is set when generating link. Contact admin for default settings.

**Q: What payment methods can customers use?**
A: Customers can use credit/debit cards accepted by Peach Payments (Visa, Mastercard, etc.).

---

## Support and Escalation

**For Payment Link Issues**:
- First: Click Refresh and search again
- Second: Check Peach Payments system status
- Third: Contact Peach Payments support with Payment Link ID

**For Technical Issues**:
- Browser problems: Clear cache, try different browser
- Data not loading: Check internet connection
- System errors: Contact your IT support team

**For Customer Payment Issues**:
- Provide customer with Payment Link ID
- Direct customer to Peach Payments support
- Generate replacement link if needed

---

## Quick Reference Card

**Navigation**: Admin → CRM → Payments

**Key Actions**:
- **Refresh**: Updates table with latest payment data
- **Search**: Find specific payment by name or ID
- **Copy**: Click icon next to URL to copy link
- **Download**: Export all data to CSV
- **Sort**: Click column headers

**Important Columns**:
- **Status**: Current payment state
- **Expiry Date**: When link stops working
- **Amount**: Payment value in ZAR
- **Invoice ID**: Links to your booking

**Remember**:
- Refresh regularly for latest data
- Check expiry before sharing links
- Download CSV monthly for records
- Follow up on pending payments before expiry

---

## Support

For additional assistance with the Payment Links module, contact your system administrator or Peach Payments support team.

**Peach Payments Support**: Include Payment Link ID in all queries