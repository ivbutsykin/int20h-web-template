<div align="center">
  <a href="https://github.com/ivbutsykin/int20h-web-template">
    <!-- <img src="images/logo.png" alt="Logo" width="80" height="80"> -->
  </a>

<h3 align="center">Hackathon Hero Toolkit</h3>

  <p align="center">
    Empowering innovation with a comprehensive codebase for rapid development
  </p>
</div>

## About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

Modern web template with React, Material UI, React Query, React Router, Formik with Yup validation, Zustand for state management, and i18n for internationalization.

### Built With

- ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
- ![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)
- ![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)
- ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

## Prerequisites

- Node.js v20 and later
  ```sh
  nvm install 20
  nvm use 20
  ```

- degit
  ```sh
  npm install -g degit
  ```

## Installation

1. Download the repository
   ```sh
   degit git@github.com:ivbutsykin/int20h-web-template.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

## Usage

1. You can easily remove the example components by using the following commands
```sh
cd src/components/molecules/ ; rm -rf * ; touch .gitkeep ; cd ../../../
cd src/components/organisms/ ; rm -rf * ; touch .gitkeep ; cd ../../../
cd src/constants ; rm validation.js ; cd ../../
```

2. To remove rest of the example code find and replace code in the following files

- `src/components/templates/HomeTemplate/HomeTemplate.jsx`
```jsx
import { Box } from "@mui/material";

function HomeTemplate({ usersData, isGetUsersLoading, onUserSubmit }) {
  return (
    <Box />
  );
}

export default HomeTemplate;
```

- `src/components/pages/HomePage/HomePage.jsx`
```jsx
import HomeTemplate from "../../templates/HomeTemplate/HomeTemplate";

function HomePage() {
  return (
    <HomeTemplate />
  );
}

export default HomePage;
```

- `src/constants/api.js`
```js
export const BASE_URL = "";
```

- `src/locales/en.json`
```json
{}
```

- `src/locales/uk.json`
```json
{}
```

3. Run the development server
   ```sh
   npm run dev
   ```