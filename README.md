# Counting Calculator

By: Stella Marie

Demo project using React and Redux.

View on [Github Pages]()

## Technologies Used

- React 18
- Redux Toolkit
- Styled Components

## Description

This Counting Calculator is a remake of [Counting Calculator](https://github.com/SmKou/counting-calculator) based on the Redux Toolkit sample project, Counter, in [Redux Toolkit Quick Start Guide](https://redux-toolkit.js.org/tutorials/quick-start). Unlike a counter, the counting calculator allows for custom values to be entered, both for the starting count, as well as for the step, the difference used to increment the current count. This calculator supports incrementing and decrementing positive integers starting from zero, reseting the count and step, and starting with previous count values.

## Complete Setup

If you would like to install the Redux Toolkit template project, use the package manager to create a react app with the redux template.

```bash
npx create-react-app app-name --template redux
```

If using vite, I am not sure you can use the redux toolkit template.

**Using vite**
```bash
npm create vite@latest project_name --template react
npm i
npm i @reduxjs/toolkit
```

### Your Setup
-   Clone or fork project: ```git clone your_repo_url.git```
-   Add upstream to receive updates: ```git  remote add upstream this_repo_url.git```
-   Remote the upstream: ```git remote rm upstream```

**Note:** There will not likely be any updates to this repo or project. Any future iterations will link back to this repo, not vice versa.

### Github Pages
```bash
git add .
git commit -m "Save final changes"
git push origin main
git checkout -b gh-pages
git push origin gh-pages
```

**To update Github Pages**
```bash
git add .
git commit -m "Save changes in main"
git push origin main
git checkout gh-pages
git merge main
git push origin gh-pages
```

**How to render from dist/**
1. Remove dist/ from .gitignore
2. ```bash
    git add dist
    git commit -m "Initial dist subtree commit"
    git subtree push --prefix dist origin gh-pages
    ```

## Known Bugs

- No support for keyboard input

## License

Refer [Redux Toolkit Quick Start Guide](https://redux-toolkit.js.org/tutorials/quick-start) for original project and template.

[MIT](https://choosealicense.com/licenses/mit/)

Copyright © 2023 SmKou