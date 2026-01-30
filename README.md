# Uncheck All - The Privacy Checkbox Cleaner Bookmarklet

Tired of manually unchecking hundreds of "legitimate interest" vendor checkboxes on cookie consent forms? This simple tool does it for you with a single click.

---

### The Problem

Many websites show you a wall of checkboxes for privacy settings, often without a "Reject All" button. They make it tedious to opt-out, hoping you'll just click "Accept All".

### The Solution

A simple one-click bookmarklet that instantly unchecks every checkbox on the page.

---

### 🚀 How to Install

**1. Show your Bookmarks Bar:**
   - In most browsers, press `Ctrl+Shift+B` (or `Cmd+Shift+B` on Mac).

**2. Drag this link to your Bookmarks Bar:**

[Uncheck All ☑️](javascript:(function(){const checkboxes=document.querySelectorAll('input[type="checkbox"]');let count=0;checkboxes.forEach(checkbox=>{if(checkbox.checked){checkbox.checked=false;count++;}});alert(`${count} checkboxes have been unchecked.`);})())

That's it! Now, when you're on a page with annoying checkboxes, just click "Uncheck All ☑️" in your bookmarks bar.

---

### How It Works (The Code)

This bookmarklet runs a tiny, safe piece of JavaScript on the current page to find and uncheck all checkboxes. The code is completely open-source.
