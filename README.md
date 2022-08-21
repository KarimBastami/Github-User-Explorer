# Github-User-Explorer
This is a user finder app that uses React and the Github Restful API to efficiently search and display relevant information for a Github user's profile. Github's native search requires multiple
steps for profile selection and viewing repositories, this application is a simple solution to address this inconvenience.

## Main Features
- Responsive home page with a search bar
- The top 30 users matching the search criteria are displayed
- Selection of a user will redirect to a profile page (still within the app)
- Relevant information is provided which include but is not limited to:

  - Profile picture
  - Name & Login handle
  - Hireability status
  - Bio
  - Location & Personal website & Contact information
  - Number of followers & Number of people they are following
  - Number of public repositories
  - Names and redirection links to the latest 5 repositories that include badges for:
  
    - Number of watchers
    - Number of star gazers
    - Number of forks
    - Number of open issue requests
   
   
## How To Run
- Make sure Nodejs and NPM are installed on your device
- Open your terminal
- Navigate to the folder containing the package.json file
- Run the following commands

```
npm install

npm start
```

## Dependencies & Technologies Used
- Reactjs
- React-Router-Dom
- Github Rest API
- HTML/CSS
- Tailwind-CSS
- DaisyUI
- React-icons

