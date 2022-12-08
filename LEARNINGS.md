# Learnings - Relief Careers App

![Alt Text](https://i.ibb.co/smMhSsS/routing-demo.gif)


  <p align="center">
    This is a react app that allows users to search for jobs in the humanitarian field
    <br />
    <br />
  </p>

## Team #4 Members
1. Chris Ferenci
2. Rohan Ramani
3. Kendra Moore
4. Romit Barua

## The Goal
We initially proposed a web application to display international jobs and careers available in the humanitarian and relief industry. Further, we wanted to include information regarding recent and ongoing disasters to allow users to find jobs related to specific countries and disasters. Our final platform includes a landing page and job board to allow users to view different types of jobs across countries. We were able to accomplish our final goal. 

* [X] Build a Front End Applicaion
* [X] Use an External API
* [X] Work as a team 


## Features 
Our platform currently has two distinct pages, the home page and the job board. 

The job board is divided into three distinct sections: the top navigation pane, the sidebar, and the main job cards. Users may browse the different jobs using the job cards. These cards hold key information including the job title, the location, and a short job description. Further, the job cards have an Apply button and a Learn More button that routes users to the United Nations Relief program website where they can get more information and apply to the roles. As previously mentioned, the jobs are categorized by their country. Users can use the sidebar to select their country of interest. Once a country is selected, only jobs in the selected country will appear in the main job board. The top navigation bar includes the name of the platform, a link to allow the user to return to the homepage & a search bar. This search bar can be used to further filter down the list of jobs based on keywords. The search bar currently does a case-insensitive match against job titles.   

## Learnings
Throughout this project we learned a number of lessons in terms of the challenges working as a team on a single web platform, correctly determining the scope of a project and utilizing an external API.

One challenge that we had to overcome was having four people work on a single platform simultaneously. Given that we started from scratch, many times we found that multiple people were working on the same components. Although everyone had their own branches to add features and make changes, to prevent code conflicts, we often had to take turns and wait for others to finish up with their work before implementing additional changes.

Another difficult task was correctly determining the scope of the project. With a platform like this, there are an endless number of features that can be added to better improve the UI and general functionality. Given time constraints driven by other class finals and projects, we often had to forego some of the cooler but more elaborate features due to time and complexity to implement.

Finally, the majority of our group had little prior experience working with APIs. We faced some difficulties getting the job description on the job card. The job description is not included in the information return from the API. To get the job description, we have to make a nested API call.

## Technologies Used 
1. [React-Icons](https://react-icons.github.io/react-icons/)
2. [React-Router-Dom](https://reactrouter.com/en/main)
3. [ReliefWeb API](https://reliefweb.int/help/api)

## Getting Started

To get a local copy up and running follow these simple steps.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/UCB-INFO-FRONTEND-WEBARCH/final-project-chris-ferenci.git

2. cd into project
3. Install packages
   ```sh
   npm install
   ```
4. Start project
    ```sh
    npm start
    ```
