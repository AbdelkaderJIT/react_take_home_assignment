
# My Shop - Product Catalog – React.js (Frontend Only)

## Overview
This project is a React.js frontend application that displays a catalog of products (Clothes, Jewelry, Electronics).  
Users can **browse, sort, filter, and paginate** through the product catalog.  
The application consumes data from an **external API** and does not include any backend logic.  

---

## Features
- **Product listing** with images, titles, descriptions, and prices  
- **Filtering** by category (Clothes, Jewelry, Electronics)  
- **Sorting** by price (ascending & descending)  
- **Responsive design** for desktop and mobile  
- **Pagination** to navigate through products  
- **Unit tests** included for core components and logic  

---

## Design Decisions

- **Material UI** is used for a modern, responsive UI and consistent styling.
- **React Router** enables navigation between Shop and Favourite Products pages.
- **State Management:** Favourites are managed in the top-level `App.js` and passed as props for easy sharing between pages.
- **ProductCard Layout:** Cards use flexbox to keep price and details aligned at the bottom, ensuring a uniform grid.
- **Filtering & Sorting:** Category filter, price sort, and search bar are implemented as reusable components for modularity.
- **Pagination:** Products are paginated for performance and usability.

---

## API
The application fetches product data from:  
 **[Fake Store API](https://fakestoreapi.com/products)**  

## Tech Stack
- React.js (Frontend framework)
- React Hooks (useState, useEffect)
- CSS /Material UI ^7.3.2

## Fake Store API for product data
- React Testing Library for unit tests

## Installation & Setup
Clone the repository and install dependencies:

# Clone repo
git clone https://github.com/AbdelkaderJIT/react_take_home_assignment.git

# Go inside project folder
cd react_take_home_assignment

# Install dependencies
npm install

# Start development server
npm start

## Project Structure
├── public/              # Static files
├── src/
│   ├── components/      # UI components (ProductCard, Filter, SortControls, Pagination)
│   ├── pages/           # Pages (Shop, ProductList, etc.)
│   ├── App.js           # Main app entry
│   ├── index.js         # React DOM entry
│   └── App.test.js      # Unit test entry

## Future Improvements
- Add product detail page
- Add cart functionality
- Add authentification and SSO features
- Add payement methods
- Add Typescript to migrate all components for stronger type safety.
- Add Redux or zustand for more scalable state management.
- Add user-friendly error messages and loading indicators.
- Add Admin dashboard to manage products.

## License 
This project is for technical test purposes only.

Thank you, feel free to reach out if you have any questions or feedback!

