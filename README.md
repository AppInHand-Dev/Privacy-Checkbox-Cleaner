# Uncheck All - The Privacy Checkbox Cleaner Bookmarklet

Tired of manually unchecking hundreds of "legitimate interest" vendor checkboxes on cookie consent forms? This simple tool does it for you with a single click.

---

### The Problem

Many websites show you a wall of checkboxes for privacy settings, often without a "Reject All" button. They make it tedious to opt-out, hoping you'll just click "Accept All".

### The Solution

A simple one-click bookmarklet that instantly unchecks every checkbox on the page.

---

### 🚀 How to Install (The Modern Chrome & Firefox Method)

Modern browsers have strong security features that can prevent creating JavaScript-based bookmarks (bookmarklets) easily. This manual method uses the browser's Bookmark Manager to install it correctly.

**Step 1: Copy the Bookmarklet Code**

First, copy the entire line of code below to your clipboard. This is the heart of our tool.

(javascript:(function(){const checkboxes=document.querySelectorAll('input[type="checkbox"]');let count=0;checkboxes.forEach(checkbox=>{if(checkbox.checked){checkbox.checked=false;count++;}});alert(`${count} checkboxes have been unchecked.`);})())


**Step 2: Open the Bookmark Manager**

1.  In your browser, press `Ctrl+Shift+O` (or `Cmd+Shift+O` on Mac).
2.  This will open the "Bookmark Manager" in a new tab.

**Step 3: Create the New Bookmark**

1.  On the left side, make sure you have selected the **"Bookmarks Bar"** folder (or "Barra dei preferiti").
2.  Find an empty space on the right side, **right-click**, and select **"Add new bookmark"** (or "Aggiungi nuovo preferito").
3.  A dialog box will appear.
    *   In the **"Name"** field, type: `Uncheck All ☑️`
    *   In the **"URL"** field, **paste the code** you copied in Step 1.
4.  Click **"Save"**.

That's it! The "Uncheck All ☑️" button will now appear on your bookmarks bar, ready to use.

---

### How It Works (The Code)

This bookmarklet runs a tiny, safe piece of JavaScript on the current page to find and uncheck all checkboxes. The code is completely open-source.
