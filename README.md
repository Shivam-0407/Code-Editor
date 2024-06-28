
# Code-Editor-Web-App ✨

A simple and powerful code editor built with React and PrismJS. This editor provides a minimalistic yet efficient environment for coding with syntax highlighting and other essential features.


# Installation
This repository contains a Vite-powered React application. Follow the instructions below to set up and run the app locally.

## Setup Instructions

1. **Clone the Repository**: 
   ```bash
   git clone https://github.com/Shivam-0407/Code-Editor.git
2. **Navigate to Project Directory** :
    ```bash
    cd Code-Editor
3. **Install Dependencies** :
    ```bash
    npm Install
4.  **Start the Development Server** :
    ```bash
    npm run dev
5. **Click on the link provided in your terminal for localhost**


## Demo

https://shivam-0407.github.io/Code-Editor/


## Features

1.Syntax Highlighting:Powered by PrismJS, supports multiple programming languages (e.g., JavaScript, HTML, CSS)

2.Real-time Code Formatting:See the results of your code in real-time as you type.Automatic formatting and beautification of code for better readability.

3.Clean and Intuitive UI:Simple and user-friendly interface designed for efficient coding.

4.As soon as the mobile screen dimensions are detected, a custom hook is triggered to notify you that this feature is available only for larger screens.


## Lessons Learned
This project is completely dependent on how one can use the idea of hooks provided by the React library. Few of the important hooks used in this project are - 

## useState() - 
The useState hook is used to manage the state of the code being edited. It initializes with a default code snippet and provides a way to update the code as the user types.

## useRef() - 
The useRef hook is used to create a reference to the <code> element. This reference is used to apply syntax highlighting to the code content.

## useEffect() - 
The useEffect hook is used to apply syntax highlighting whenever the code or language changes. It runs the Prism.js highlighting function on the referenced <code> element.


