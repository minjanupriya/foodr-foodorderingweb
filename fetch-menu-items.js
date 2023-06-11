// import { db } from './firebase-configure.js';
// import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";
// const getMenuItems = async () => {
//     const menuItemsCollectionRef = collection(db, 'menuItems');
//     const querySnapshot = await getDocs(menuItemsCollectionRef);

//     const menuItems = [];
//     querySnapshot.forEach((doc) => {
//         const menuItemData = doc.data();
//         menuItems.push(menuItemData);
//     });
//     console.log(menuItems);
//     return menuItems;
// };

// // Function to create HTML elements for each menu item
// const createMenuItemElement = (menuItem) => {
//     const foodItem = document.createElement('div');
//     foodItem.classList.add('row', 'foodItem');

//     const foodItemName = document.createElement('div');
//     foodItemName.classList.add('col-9', 'foodItemName');
//     const itemName = document.createElement('p');
//     itemName.textContent = menuItem.Name;
//     const vegIcon = document.createElement('span');
//     vegIcon.innerHTML = `<img class="vegIcon" src="./images/veg.webp" alt="veg-icon" />`;
//     foodItemName.appendChild(itemName);
//     foodItemName.appendChild(vegIcon);

//     const addCol = document.createElement('div');
//     addCol.classList.add('col-3', 'addCol');
//     const minusBtn = document.createElement('span');
//     minusBtn.classList.add('menuBtn', 'minus');
//     minusBtn.innerHTML = `<i class="fas fa-minus"></i>`;
//     const quantity = document.createElement('span');
//     quantity.classList.add('quantity');
//     quantity.textContent = '0';
//     const plusBtn = document.createElement('span');
//     plusBtn.classList.add('menuBtn', 'plus');
//     plusBtn.innerHTML = `<i class="fas fa-plus"></i>`;
//     addCol.appendChild(minusBtn);
//     addCol.appendChild(quantity);
//     addCol.appendChild(plusBtn);

//     foodItem.appendChild(foodItemName);
//     foodItem.appendChild(addCol);

//     return foodItem;
// };

// // Function to render menu items in the HTML body
// const renderMenuItems = (menuItems) => {
//     const menuContainer = document.getElementById('menuItemsContainer');

//     // Clear previous menu items
//     menuContainer.innerHTML = '';

//     // Create and append HTML elements for each menu item
//     menuItems.forEach((menuItem) => {
//         const menuItemElement = createMenuItemElement(menuItem);
//         menuContainer.appendChild(menuItemElement);
//     });
// };

// // Call getMenuItems and render the menu items in the HTML body
// getMenuItems()
//     .then((menuItems) => {
//         renderMenuItems(menuItems);
//     })
//     .catch((error) => {
//         console.error('Error retrieving menuItems:', error);
//     });
