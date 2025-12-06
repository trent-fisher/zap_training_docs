---
title: Packages
icon: mdi:package-variant-closed
order: 2
comments: false
category:
  - CRM
# A page can have multiple tags
tag:
  - Guide
comment: false
author: false
---

# Package Enquiry and Booking Workflow Guide

## Overview
This guide explains the complete process for handling customer package enquiries from initial submission through to booking confirmation and payment. This workflow involves multiple modules in the admin portal and describes how they work together to process customer bookings efficiently.

---

## Process Overview

The package enquiry and booking process follows these main stages:

1. **Client Submits Package Enquiry** → Client expresses interest in a travel package
2. **Enquiry Assignment** → Enquiry is assigned to a ZAP consultant
3. **Package Verification** → Consultant confirms package details and pricing
4. **Quote Acceptance** → Client decides whether to proceed
5. **Information Capture** → Client details are recorded in the system
6. **Payment Link Generation** → Secure payment link sent to client
7. **Payment Processing** → Client completes payment
8. **Booking Confirmation** → Confirmation sent to client and recorded in system

---

## Module Integration

This workflow uses the following admin portal modules:

- **Leads Module**: Client enquiries are captured as leads
- **Custom Packages Module**: Package details and pricing are verified
- **Payment Links Module**: Payment links are monitored and tracked
- **Contacts Module**: Client information is stored (after conversion)
- **Calendar Module**: Follow-ups and deadlines are scheduled

---

## Stage 1: Client Submits Package Enquiry

### What Happens

A potential customer submits an enquiry about a travel package through:
- Website contact form
- Email
- Phone call
- Social media
- Walk-in

### Automated Process

**The system automatically**:
- Captures the enquiry details
- Creates a lead record in the CRM
- The client "filters through as a Lead within the CRM" (as per process document)

### Where to Find the Enquiry

Navigate to: **Admin → CRM → Leads**

The new enquiry appears in the Leads table with:
- Lead Status: "New"
- Lead Source: Source channel (Website, Email, Phone, etc.)
- Customer name and contact details
- Enquiry details in Notes field

---

## Stage 2: Enquiry Assignment and Action

### Consultant Assignment

**Enquiry is assigned to a ZAP consultant** either:
- Automatically (if auto-assignment is configured)
- Manually by team lead or manager
- Based on availability or specialization

### Initial Actions Required

**The assigned consultant must**:

1. **Review the Lead**:
   - Navigate to Admin → CRM → Leads
   - Locate the new lead
   - Click edit icon to view full details
   - Review customer information and enquiry notes

2. **Update Lead Status**:
   - Change status from "New" to "Contacted"
   - This indicates you've acknowledged the enquiry
   - Add initial notes about the enquiry

3. **Contact the Client**:
   - Make first contact within 24 hours
   - Acknowledge their enquiry
   - Confirm package interest and requirements
   - Gather any additional information needed

4. **Document the Interaction**:
   - Return to Leads module
   - Edit the lead record
   - Add notes about the conversation
   - Include: customer requirements, travel dates, budget, special requests
   - Update lead status to "Qualified" if client shows genuine interest

**Example Notes Entry**:
```
2025-01-15: Initial contact made via phone. Client interested in 
5-Day Kruger Safari package (Ref: SAF-001) for 4 adults traveling 
in June 2025. Budget confirmed at R60,000 total. Prefers luxury 
lodges. Vegetarian meals required. Proceeding to verify package 
details and pricing.
```

---

## Stage 3: Package Verification

### Searching for the Package

**Using the Reference Code**:

1. Navigate to: **Admin → Packages → Custom Packages**

2. **Locate the Package**:
   - Use the search box at top of table
   - Enter the reference code from customer enquiry
   - Example: Type "SAF-001"
   - Package appears in filtered results

3. **Open Package Details**:
   - Click the edit icon (pen) next to the package
   - Package details page opens

### Confirming Package Details

**Verify the following information**:

**Travel Period Validity**:
- Check "Valid From" and "Valid To" dates
- Ensure customer's travel dates fall within this range
- If dates don't match, search for alternative package or note for custom quote

**Booking Window**:
- Check "Sales Period From" and "Sales Period To"
- Confirm package is currently bookable
- If Sales Period To has passed, package cannot be booked

**Current Price**:
- Note the price displayed in the Price field
- Price is in ZAR (South African Rand)
- Confirm this is current pricing (not outdated)

**Package Inclusions**:
- Review checkboxes: Accommodation, Meals, Transfers, etc.
- Read "Includes" section for detailed list
- Read "Excludes" section for what's NOT included
- Ensure inclusions match customer expectations

**Duration**:
- Confirm number of days matches customer requirements
- Check if adjustable or fixed

**Destinations**:
- Review destinations included in package
- Verify they align with customer interests

**Additional Details**:
- Read full Description
- Review Notes and Conditions
- Check for any special requirements or restrictions

### Package Supplier's Website Verification

**As per the process document**: "The Zap Consultant searches for Package on Package Supplier's Website using the Reference Code"

**Steps**:
1. Note the Reference Code from the Custom Package
2. Visit the package supplier's website
3. Search for the package using the reference code
4. Confirm current pricing on supplier's site
5. Check for any updates, changes, or special conditions
6. Note any discrepancies between portal and supplier pricing

**Why This Step is Important**:
- Supplier pricing may have changed
- Special offers or promotions may be available
- Package details may have been updated
- Availability may be limited
- Ensures you quote accurate, current pricing

---

## Stage 4: Advise Client and Quote Acceptance

### Communicating with the Client

**Prepare Your Communication**:

Based on verified package details, prepare to advise client with:
- Confirmed package price (from supplier if different from portal)
- Exact inclusions and exclusions
- Travel dates and availability
- Any special conditions or requirements
- Payment terms and schedule
- Cancellation policy

**Contact Methods**:
- Phone call (preferred for immediate response)
- Email with detailed quote
- WhatsApp or other messaging
- Combination of methods

**What to Include in Quote**:
```
Package: 5-Day Kruger Safari Adventure
Reference: SAF-001
Travel Dates: June 15-19, 2025
Number of Guests: 4 Adults

Package Price: R 15,000 per person
Total Cost: R 60,000

INCLUDES:
- 4 nights luxury lodge accommodation
- All meals (vegetarian options available)
- Daily game drives with professional guides
- Park entrance fees
- Ground transfers

EXCLUDES:
- Flights to/from Kruger
- Travel insurance
- Personal expenses
- Optional activities
- Gratuities

Payment Terms:
- 50% deposit required to secure booking
- Balance due 30 days before travel

Cancellation Policy:
[Include relevant terms from package conditions]

Valid Until: [Quote expiry date]
```

### Client Decision Point

**The client will respond in one of three ways**:

#### Option 1: Accept Quote (YES - Proceed to Booking)

**Client says YES, proceed to Stage 5: Capture Client Information**

#### Option 2: Request Revisions (Revise Quotation?)

**If client wants changes**:

**Common Revision Requests**:
- Different travel dates
- More/fewer days
- Upgraded accommodation
- Additional destinations
- Modified inclusions
- Group size changes

**Your Actions**:
1. Note revision requests
2. Update lead notes with requirements
3. Search for alternative package or prepare custom quote
4. If alternative package exists:
   - Repeat Stage 3 verification process
   - Prepare revised quote
   - Return to this stage (advise client)
5. If custom package needed:
   - May require manager approval
   - Prepare custom pricing
   - Document in lead notes

**Update Lead Status**: Keep as "Qualified" or move to "Negotiation"

**Loop back to Stage 4** with revised quote until client accepts or declines.

#### Option 3: Decline Quote (NO - END)

**Client decides not to proceed**:

**Your Actions**:
1. Navigate to Admin → CRM → Leads
2. Edit the lead record
3. Update Lead Status to "Lost"
4. Add detailed notes explaining why:
   - Price too high
   - Dates didn't work
   - Chose competitor
   - Budget constraints
   - Changed mind
   - Other reasons
5. Save the record

**Example Lost Lead Notes**:
```
2025-01-16: Client declined quote. Feedback: Price exceeded budget 
by R10,000. Looking for more affordable option. Suggested our 
mid-range safari package (SAF-002) but client will research and 
may contact again in future. Follow up in 3 months.
```

**Process Ends** - Lead remains in system for future reference and potential re-engagement.

---

## Stage 5: Capture Client Information

### When Client Accepts Quote

Once client accepts and agrees to proceed with booking:

### Information to Capture

**Personal Details**:
- Full legal names (as per passport/ID)
- Date of birth
- Passport number and expiry (for international travel)
- ID number (for domestic travel)
- Nationality
- Contact details (phone, email, address)

**Booking Details**:
- Number of travelers
- Room/accommodation preferences
- Dietary requirements
- Special requests or needs
- Accessibility requirements
- Medical conditions (if relevant)
- Emergency contact information

**Payment Information**:
- Billing address (if different from residential)
- Preferred payment method
- Invoice requirements (company bookings)

### Creating Contact Record

**Navigate to: Admin → CRM → Contacts**

1. Click "Add Contact" button
2. **Enter Contact Type**: Select "Individual" or "Company Contact"
3. **Enter Personal Details**:
   - First Name
   - Surname  
   - Email Address
   - Phone Number
   - Date of Birth (if required)
4. **Enter Address** (if applicable):
   - Use address search feature
   - Select from suggestions
5. **Additional Information**:
   - Add passport details in notes
   - Document special requirements
   - Record emergency contact
6. Submit to create contact

**For Group Bookings**:
- Create primary contact (person making booking)
- Add notes listing all travelers
- Or create separate contact for each traveler

### Update Lead Record

**Navigate to: Admin → CRM → Leads**

1. Find and edit the lead
2. **Update Status** to "Proposal Sent" or "Negotiation"
3. **Add Notes** documenting:
   - Client accepted quote
   - Information captured
   - Contact record created
   - Next step: Sending payment link
4. Save changes

---

## Stage 6: Send Payment Link to Client

### Payment Link Generation

**This step happens in your booking/invoicing system** (not shown in the provided code interfaces).

**What You Need**:
- Client contact details (email, phone)
- Total amount to be charged
- Invoice/booking reference number
- Payment link expiry date (typically 7-30 days)

**Payment Link is Generated and Sent**:
- System creates unique payment link via Peach Payments
- Link is sent to client's email automatically
- May also send via SMS/WhatsApp

### Informing the Client

**Contact the client to**:
- Confirm payment link has been sent
- Verify they received the email
- Explain how to use the payment link
- Provide payment amount and invoice reference
- State payment deadline (expiry date)
- Offer assistance if needed

**Example Communication**:
```
Hi [Client Name],

Thank you for booking your 5-Day Kruger Safari Adventure with us!

Your secure payment link has been sent to [email@example.com].

Payment Details:
- Amount: R 30,000 (50% deposit)
- Invoice Reference: INV-2025-001
- Payment Deadline: January 25, 2025

Please click the link in the email to complete your payment securely 
through Peach Payments. If you have any questions or don't see the 
email, please contact me immediately.

Looking forward to confirming your booking!

Best regards,
[Your Name]
ZAP Travel Consultant
```

### Create Calendar Reminder

**Navigate to: Admin → Calendar → Event**

1. Click "Create Event"
2. **Event Title**: "Follow up - Payment Link [Client Name]"
3. **From**: Set to 2-3 days after payment link sent
4. **To**: Same day, 1 hour later
5. **Description**: "Check if [Client Name] has paid deposit for booking INV-2025-001. Payment link expires [date]. Follow up if payment not received."
6. Submit

This reminds you to follow up if client hasn't paid.

---

## Stage 7: Payment Processing

### Monitoring Payment Status

**Navigate to: Admin → CRM → Payments**

This is where you monitor all payment links and their status.

**Finding Client's Payment**:
1. Use search box to find payment
2. Search by:
   - Customer name
   - Invoice ID
   - Payment Link ID (if you have it)
3. Locate the payment link for this booking

**Check Payment Status**:

The Status column shows current state:

- **Pending**: Payment link sent, awaiting payment
- **Completed**: Payment successfully processed ✓
- **Failed**: Payment attempt unsuccessful
- **Expired**: Payment link has passed expiry date

### If Payment Status is PENDING

**Client hasn't paid yet**:

**Your Actions**:
1. Check expiry date - is deadline approaching?
2. If approaching expiry:
   - Contact client
   - Remind them of payment deadline
   - Ask if they need assistance
   - Verify they received payment link
3. If client claims they paid:
   - Click Refresh button (top right) to get latest status
   - Wait a few minutes for processing
   - Check status again
4. Document follow-up in lead notes

**Update Calendar Event**:
- Reschedule follow-up if needed
- Or mark complete if payment received

### If Payment Status is COMPLETED

**Payment successful - Proceed to Stage 8: Booking Confirmation**

### If Payment Status is FAILED

**Payment attempt unsuccessful**:

**Reasons for Failure**:
- Insufficient funds
- Card declined
- Payment limit exceeded
- Technical error
- Incorrect card details

**Your Actions**:

1. **Contact Client Immediately**:
   - Inform them payment failed
   - Ask if they encountered error message
   - Offer to help troubleshoot

2. **Troubleshooting Steps**:
   - Verify payment link is still valid (not expired)
   - Ask client to try different payment method
   - Check if bank/card issuer is blocking payment
   - Verify client entered correct details

3. **If Issue Cannot Be Resolved**:
   - Contact Peach Payments support
   - Provide Payment Link ID from the table
   - Explain the situation
   - May need to generate new payment link

4. **Generate New Payment Link** (if necessary):
   - If original link expired or corrupted
   - Issue new link with same details
   - Send to client
   - Update lead notes

5. **Update Lead Notes**:
```
   2025-01-18: Payment failed. Contacted client - bank declined 
   transaction. Client will call bank and retry. Following up 
   tomorrow. Payment link expires 2025-01-25.
```

**Return to Stage 7** and continue monitoring until payment succeeds.

### Payment Link Expired?

**If payment link expires before client pays**:

**Check Expiry Date**:
- Look at "Expiry Date" column in Payment Links table
- If current date has passed expiry date, link is expired

**What Happens**:
- Status changes to "Expired"
- Client can no longer use the link
- Payment cannot be processed

**Your Actions**:

1. **Contact Client**:
   - Inform them link has expired
   - Ask if they still want to proceed with booking
   - Explain new link will be sent

2. **If Client Still Wants to Book**:
   - **Generate New Payment Link**
   - Same amount and details
   - New expiry date
   - Send to client
   - **Return to Stage 6** with new payment link

3. **If Client No Longer Wants to Book**:
   - Update lead status to "Lost"
   - Document reason in notes
   - **Process Ends**

4. **Update Lead Notes**:
```
   2025-01-26: Original payment link expired. Client was traveling 
   and couldn't pay. Still interested in booking. New payment link 
   generated, expires 2025-02-05. Awaiting payment.
```

---

## Stage 8: Booking Confirmation

### When Payment is Completed

**Navigate to: Admin → CRM → Payments**

1. Locate the payment
2. Verify Status shows "Completed"
3. Note the payment amount received
4. Check Terms of Service Accepted shows "true"

### Automated Confirmations

**As per process document**: "Zap Receives Payment Confirmation and Client Receives Booking Confirmation"

**What Happens Automatically**:
- Peach Payments processes the payment
- Your system receives payment confirmation
- Client receives payment receipt via email
- Booking is confirmed in booking system

### Manual Confirmation Steps

**Even with automation, verify**:

1. **Payment Received**:
   - Confirm amount matches quote
   - Check payment date/time
   - Verify in banking system (if required)

2. **Update Lead Record**:
   - Navigate to Admin → CRM → Leads
   - Edit the lead
   - **Update Status to "Won"**
   - Add final notes:
```
   2025-01-18: Payment completed successfully. Deposit of R30,000 
   received. Booking confirmed for June 15-19, 2025. Booking 
   reference: BKG-2025-045. Client received confirmation email. 
   Balance of R30,000 due May 15, 2025.
```
   - Save changes

3. **Contact the Client**:
   - Call or email to confirm
   - Thank them for booking
   - Confirm booking details
   - Provide booking reference
   - Outline next steps
   - Mention balance payment deadline
   - Offer assistance with any questions

**Example Confirmation Email**:
```
Hi [Client Name],

Fantastic news! Your booking is confirmed!

BOOKING DETAILS:
Booking Reference: BKG-2025-045
Package: 5-Day Kruger Safari Adventure  
Travel Dates: June 15-19, 2025
Number of Guests: 4 Adults
Accommodation: Luxury Safari Lodge

PAYMENT STATUS:
Deposit Paid: R 30,000 ✓
Balance Due: R 30,000
Balance Payment Deadline: May 15, 2025

Your booking confirmation and detailed itinerary have been sent 
to your email. Please review carefully and let us know if you 
have any questions.

NEXT STEPS:
1. Review your confirmation documents
2. Ensure all traveler details are correct
3. Arrange travel insurance (highly recommended)
4. Balance payment due 30 days before departure

We're excited to have you join us for this incredible safari 
experience! Please don't hesitate to contact me with any 
questions or special requests.

Best regards,
[Your Name]
ZAP Travel Consultant
[Contact Details]
```

4. **Create Follow-Up Calendar Events**:

**Navigate to: Admin → Calendar → Event**

**Balance Payment Reminder**:
- Event Title: "Balance Payment Due - [Client Name] BKG-2025-045"
- From: May 15, 2025 (balance due date)
- Description: "Contact client re: balance payment of R30,000"

**Pre-Departure Check**:
- Event Title: "Pre-Departure Check - [Client Name] BKG-2025-045"
- From: June 8, 2025 (1 week before travel)
- Description: "Final confirmation, travel documents, last-minute details"

**Post-Trip Follow-Up**:
- Event Title: "Post-Trip Follow-Up - [Client Name] BKG-2025-045"
- From: June 20, 2025 (day after return)
- Description: "Request feedback, testimonial, photos. Discuss future travel plans."

5. **Internal Documentation**:
   - Update booking system with all details
   - File signed documents
   - Record in financial system
   - Update CRM records

### Process Complete

**The booking is now confirmed and recorded**:
- Lead status: "Won"
- Contact created with client details
- Payment confirmed and received
- Booking reference issued
- Client has confirmation documentation
- Follow-up events scheduled

**The process ends successfully here.**

---

## Process Exceptions and Special Cases

### Client Wants to Revise After Payment

**If client requests changes after paying**:

1. Review requested changes
2. Check if changes are possible
3. Calculate any price differences
4. Consult cancellation/modification policy
5. If additional payment needed:
   - Generate new payment link for difference
   - Follow payment processing steps
6. If refund required:
   - Contact Peach Payments support
   - Follow refund procedures
   - Document thoroughly

### Partial Payments

**If accepting deposit only**:

1. Generate payment link for deposit amount
2. Process deposit payment (follow Stage 6-8)
3. Schedule calendar event for balance payment
4. Generate second payment link when balance due
5. Process balance payment
6. Final confirmation after full payment received

### Group Bookings with Multiple Payers

**If different people paying for group members**:

1. Create separate payment links for each payer
2. Track each payment individually in Payment Links module
3. Monitor all payments before confirming booking
4. Ensure total received matches total package cost
5. Only issue final confirmation when all payments completed

### Corporate/Company Bookings

**If booking for a company**:

1. Capture company details as well as traveler details
2. Create Company record (Admin → CRM → Companies)
3. Create Contact linked to Company
4. Payment link may go to finance department
5. Invoice requirements may differ
6. Follow company payment terms

### Urgent Bookings

**If booking needed urgently**:

1. Expedite all stages
2. Shorten payment link expiry to 24-48 hours
3. Call client instead of email only
4. Monitor payment status hourly
5. Confirm booking immediately upon payment
6. May require same-day processing

---

## Best Practices for the Entire Workflow

### 1. Communication

**Always**:
- Respond to enquiries within 24 hours
- Be clear and professional in all communications
- Confirm receipt of enquiries immediately
- Keep client updated at every stage
- Document every interaction in lead notes

**Never**:
- Leave enquiries unattended for days
- Promise what you can't deliver
- Give outdated pricing
- Skip verification steps

### 2. Documentation

**Record Everything**:
- Every phone call, email, interaction
- All quotes provided
- Changes requested
- Reasons for lost deals
- Payment attempts and outcomes
- Special requests or requirements

**Use Consistent Format**:
```
[Date]: [Action/Interaction]. [Key details]. [Next steps].
```

### 3. Follow-Up

**Set Reminders For**:
- Pending quotes (follow up after 2-3 days)
- Payment links (follow up if no payment in 3 days)
- Balance payments (remind 1 week before due)
- Pre-departure (1 week before travel)
- Post-trip feedback (day after return)

### 4. Accuracy

**Always Verify**:
- Package reference codes
- Current pricing from supplier
- Travel dates and availability
- Client contact details
- Payment amounts
- Booking terms and conditions

**Double-Check**:
- Before sending quotes
- Before generating payment links
- Before issuing confirmations

### 5. Timeliness

**Time Targets**:
- Initial response: Within 4 hours (ideally)
- Quote provision: Within 24 hours of enquiry
- Payment link generation: Same day as acceptance
- Booking confirmation: Within 1 hour of payment receipt

### 6. Status Updates

**Keep Lead Status Current**:
- Update after every significant action
- Status should reflect actual stage in process
- Helps team see pipeline at a glance
- Enables accurate reporting

### 7. Payment Monitoring

**Check Payment Links Daily**:
- Review all pending payments
- Follow up on approaching expiries
- Contact clients with failed payments
- Refresh data regularly for latest status

---

## Workflow Checklist

Use this checklist for each booking:

### Stage 1-2: Enquiry and Assignment
- [ ] Enquiry captured as lead in CRM
- [ ] Lead assigned to consultant
- [ ] Initial contact made within 24 hours
- [ ] Lead status updated to "Contacted"
- [ ] Client requirements documented in notes
- [ ] Lead status updated to "Qualified"

### Stage 3: Package Verification
- [ ] Package located using reference code
- [ ] Valid dates confirmed match client travel dates
- [ ] Sales period confirmed package is bookable
- [ ] Current price verified
- [ ] Inclusions/exclusions reviewed
- [ ] Package details verified on supplier website
- [ ] Any discrepancies noted and resolved

### Stage 4: Quote and Acceptance
- [ ] Detailed quote prepared with all information
- [ ] Quote communicated to client
- [ ] Client questions answered
- [ ] Client decision recorded
- [ ] If revisions needed: revised quote prepared and loop repeated
- [ ] If accepted: proceed to next stage
- [ ] If declined: lead status updated to "Lost" with reason

### Stage 5: Information Capture
- [ ] All client personal details collected
- [ ] Passport/ID information obtained (if required)
- [ ] Special requirements documented
- [ ] Contact record created in CRM
- [ ] Lead status updated to "Proposal Sent" or "Negotiation"
- [ ] Lead notes updated with progress

### Stage 6: Payment Link
- [ ] Payment link generated with correct amount
- [ ] Payment link sent to client's email
- [ ] Client notified via phone/SMS
- [ ] Payment deadline communicated
- [ ] Calendar reminder created for follow-up
- [ ] Payment Link ID recorded for reference

### Stage 7: Payment Processing
- [ ] Payment status monitored in Payment Links module
- [ ] Status checked daily until payment completed
- [ ] If pending: follow-up reminders sent
- [ ] If failed: client contacted and issue resolved
- [ ] If expired: new payment link generated if needed
- [ ] Lead notes updated with payment status

### Stage 8: Booking Confirmation
- [ ] Payment status verified as "Completed"
- [ ] Payment amount confirmed correct
- [ ] Lead status updated to "Won"
- [ ] Final notes added to lead record
- [ ] Client contacted with confirmation
- [ ] Booking reference provided to client
- [ ] Confirmation documentation sent
- [ ] Balance payment calendar event created (if applicable)
- [ ] Pre-departure calendar event created
- [ ] Post-trip follow-up calendar event created
- [ ] All systems updated with booking details

---

## Reporting and Performance Tracking

### Key Metrics to Monitor

**Lead Conversion Rate**:
- Total leads received
- Leads converted to bookings
- Percentage conversion rate
- Target: >25% conversion

**Response Time**:
- Time from enquiry to first contact
- Target: <4 hours

**Quote Acceptance Rate**:
- Quotes provided
- Quotes accepted
- Percentage acceptance
- Target: >40% acceptance

**Payment Success Rate**:
- Payment links sent
- Successful payments
- Failed payments
- Expired links
- Target: >85% success

**Average Booking Value**:
- Total bookings revenue
- Number of bookings
- Average per booking

### Using Module Data for Reporting

**From Leads Module**:
- Export leads to CSV
- Filter by date range
- Count by status
- Analyze win/loss reasons

**From Payment Links Module**:
- Export payment data to CSV
- Filter by status
- Calculate success rates
- Identify payment issues

**From Custom Packages Module**:
- Identify most popular packages
- Analyze pricing effectiveness
- Review package performance

---

---

## Support and Escalation

**For Process Questions**:
- Consult this workflow guide
- Ask team lead or manager
- Review module-specific documentation

**For Technical Issues**:
- Refresh page and try again
- Check internet connection
- Try different browser
- Contact IT support

**For Payment Issues**:
- Contact Peach Payments support
- Provide Payment Link ID
- Explain the specific issue
- Have client details ready

**For Package/Pricing Issues**:
- Verify with package supplier directly
- Consult manager for pricing authority
- Check for updates or changes
- Document any discrepancies

---

## Quick Reference Summary

**The Complete Process**:
1. Enquiry → Lead (automatic)
2. Assign → Review lead and contact client
3. Verify → Find package, confirm pricing
4. Quote → Advise client, get acceptance
5. Capture → Record client information
6. Payment → Send payment link
7. Monitor → Track payment status
8. Confirm → Issue booking confirmation

**Key Modules Used**:
- Leads: Track enquiry through to conversion
- Custom Packages: Verify package details
- Payment Links: Monitor payment processing
- Contacts: Store client information
- Calendar: Schedule follow-ups

**Remember**:
- Update lead status at every stage
- Document everything in notes
- Verify pricing before quoting
- Monitor payments daily
- Communicate with client throughout
- Create calendar reminders for follow-ups

---

## Support

For additional assistance with the booking workflow or any specific module, contact your system administrator or team lead.

**Process Document Reference**: ZAP Travel Package Enquiry and Booking Process