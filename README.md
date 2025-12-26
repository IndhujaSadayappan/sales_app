# sales_app
React_Native_Assessment
# React Native Expo 

A modern mobile e-commerce application built with **React Native** and **Expo**, featuring a clean UI, authentication flow, and multiple home screen sections including flash sales with countdown timers.

---

## Features

- Authentication (Login / Logout)
- Home Screen with:
  - Header with user greeting & icons
  - Order Status buttons
  - Stories section
  - New Items section
  - Flash Sale section with live countdown timer
  - Just For You product recommendations
- Persistent login using AsyncStorage
- Smooth scrolling using FlatList


---

## Tech Stack

- **React Native**
- **Expo**
- **React Navigation**
- **AsyncStorage**
- **Expo Vector Icons**
- **JavaScript (ES6+)**

---

## Project Structure

```text
src/
 ├── components/
 │   └── home/
 │       ├── Header.js
 │       ├── OrderStatusButtons.js
 │       ├── StoriesSection.js
 │       ├── NewItemsSection.js
 │       ├── FlashSaleSection.js
 │       ├── CountdownTimer.js
 │       └── JustForYouSection.js
 │
 ├── context/
 │   └── AuthContext.js
 │
 ├── navigation/
 │   └── AppNavigator.js
 │
 ├── screens/
 │   ├── HomeScreen.js
 │   └── LoginScreen.js
 │
 └── utils/
     └── validation.js

App.js
README.md
---

## Requirements

- Node.js >= 16
- npm
- Expo CLI
- Expo Go (for mobile testing)

---

## Installation & Running the App

```bash
# Clone the repository
git clone https://github.com/IndhujaSadayappan/sales_app.git

# Navigate to project directory
cd sales_app

# Install dependencies
npm install

# Start the Expo development server
npx expo start



