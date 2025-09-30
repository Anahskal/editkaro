# Editkaro.in – Social Media Marketing & Video Editing Agency Website

🔗 **Live Website**: [https://anahskal.github.io/editkaro/](https://username.github.io/editkaro/)  
📁 **GitHub Repository**: [https://github.com/anahskal/editkaro](https://github.com/username/editkaro)

---

## 🔹 Project Title

**Editkaro.in** – Social Media Marketing & Video Editing Agency Website

---

## 🔹 Objective

To design and develop a fully responsive, multi-page website for Editkaro.in that showcases its services, portfolio, team, and enables lead collection through email subscriptions and contact forms integrated with Google Sheets via Google Apps Script.

---

## 🔹 Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Backend (Form Handling)**: Google Apps Script + Google Sheets
- **Version Control**: Git & GitHub
- **Hosting**: GitHub Pages

---

## 🔹 Website Pages & Features

### 🏠 Home (`index.html`)
- Hero section introducing the brand
- Services grid (Short-form, Long-form, Ad editing)
- Email subscription form integrated with Google Sheets
- Portfolio preview section
- Clean, responsive layout

### 🎞️ Portfolio (`portfolio.html`)
- Video thumbnails displayed in a filterable grid
- Categories: Short Form, Long Form, Gaming, Football, eCommerce Ads
- Modal popup with embedded YouTube videos
- Dynamic filtering using JavaScript

### 👥 About (`about.html`)
- Company introduction
- Team section with 3 members (name, role, image)
- “Our Approach” outlining core values

### ✉️ Contact (`contact.html`)
- Contact form with fields: Name, Email, Phone, Message
- Form submission stores data in Google Sheets
- Real-time success and error feedback using JavaScript
- Fully accessible and mobile-friendly

---

## 🔹 Backend Integration

- **Google Apps Script** handles form submissions using `doPost()` method
- Submissions are saved to:
  - `Emails` sheet (for newsletter)
  - `Contacts` sheet (for contact form)
- Fetch API used to POST form data asynchronously
- Real-time feedback on submission success/failure

---

## 🔹 Deployment

- **GitHub Repository**: [https://github.com/anahskal/editkaro](https://github.com/anahskal/editkaro)
- **Live Site**: [https://anahskal.github.io/editkaro/](https://anahskal.github.io/editkaro/)
- Hosted using **GitHub Pages**

---

## 🔹 Challenges Faced

- Handling CORS and permissions in Google Apps Script
- Responsive video modal implementation for all devices
- Cross-device layout and styling adjustments
- Debugging Google Sheets integration without requiring authentication

---

## 🔹 Learnings & Takeaways

- Form handling and backend logic using Google Apps Script
- Real-world use of Flexbox and CSS Grid
- Working with async/await and fetch API in vanilla JavaScript
- Deploying production-ready static websites via GitHub Pages

---

## ✅ Project Status: `Completed & Deployed`

- [x] Responsive Design
- [x] Portfolio Filtering
- [x] Video Modal Popup
- [x] Email Subscription Integration
- [x] Contact Form Integration
- [x] Hosted on GitHub Pages

---

## 📦 How to Run Locally

```bash
git clone https://github.com/anahskal/editkaro.git
cd editkaro
# Open index.html in your browser
