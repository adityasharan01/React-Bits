# This workflow will do a clean install of node dependencies, cache/restore them, build the source code and run tests across different versions of node
# For more information see: https://help.github.com/actions/language-and-framework-guides/using-nodejs-with-github-actions
```
name: Node.js CI   // Setting the name of workflow
//To every pull request or any push request to the repo run the workflow 
on:
  push:
    branches:
      -master
      -develop
  pull_request:
    branches:
      -master
      -develop

jobs:
  build:    // or test:

    runs-on: ubuntu-latest

    steps: // in the sep give each job a name.
    - uses: actions/checkout@v2     // Line 22 -26 is what needed for github actions to run
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v2
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'npm'
    //
    - name: Installing Node Packages
      run: npm install 
    - name: Running the Test Cases
      run: npm test
    - name: Building the application
    - run: npm run build --if-present
    env :   // If we have any environment variables to run then we will write it here
      CI:true
 ```
