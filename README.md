# React UI Components

This project demonstrates the creation of interactive UI components using React. It includes a `PopoverButton` and a `ContextMenu`, each designed to handle user interactions with nested menus. The solution aims to match the reference video as closely as possible.

## Project Overview

### Components

#### PopoverButton

- **Description**: A button that toggles a popover menu when clicked. The popover contains nested dropdown menus that appear on hover.
- **Features**:
  - Main popover menu with multi-level nested menus.
  - Recursive rendering to handle multiple nested levels.
  - State management to control visibility and depth of nested menus.

#### ContextMenu

- **Description**: A context menu that appears on right-click. It also features a nested menu that shows on hover.
- **Features**:
  - Custom context menu triggered by right-click.
  - Hoverable nested menus.
  - Visibility control based on user interactions.

## Features

- **Interactive UI**: Both components offer dynamic interactions such as hover and click events.
- **Extendable Code**: The codebase is structured to be easily extendable and modifiable.

## Assumptions

- **Framework**: React is chosen for its component-based architecture, which is suitable for this task.
- **Styling**: Basic styling is applied using Tailwind and CSS. Custom styles can be adjusted in `App.css` or component-specific CSS files.
- **Behavior Matching**: The implementation is designed to align closely with the behavior shown in the reference video.

## Getting Started

To get started with this project, follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org/) must be installed on your machine.

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/your-repository.git
   cd your-repository
2. Install dependencies:
   ```sh
   npm install

## Running the Project
    To start the development server:
    npm start

## File Structure

- `App.js`: Integrates the `PopoverButton` and `ContextMenu` components.
- `ContextMenu.js`: Defines the `ContextMenu` component.
- `PopoverButton.js`: Defines the `PopoverButton` component.
- `App.css`: Contains styles for the application.

## Demonstration

### Implementation Demo

https://github.com/user-attachments/assets/570b483f-d347-440c-8c14-d340a80bff5f

### Reference Video

https://github.com/user-attachments/assets/bd0cbb26-47b4-4a62-ba2e-4ffd3c8649d3



