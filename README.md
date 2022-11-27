
# School of Code Bootcamper Organiser

This App enables School of Code Bootcampers to organise, reference, comment and rate subjects taught on the bootcamp on a daily and weekly basis. The App also features a weekend todo list where students can move daily subjects to the weekend list for further study.
## Team Members 

This App was created during the project week by the following Bootcampers:

- Carlos Alford  https://github.com/web-shuriken
- Conor Goddard  https://github.com/ConorG1247
- Lee Conroy  https://github.com/leeconroy77
- Yasar Gulzar  https://github.com/Yasar000


## Demo



![bandicam 2022-06-29 11-56-37-202](https://user-images.githubusercontent.com/90255369/176423074-ae9437b8-225b-4250-a065-f0a370a462f0.gif)
## Day 1

At the start of the first day we were put into our group for the week long project. After a brief introdution, we started the process of planning our App. The brief was to create an App that fellow bootcampers would find useful while completing the course. 

We all felt that an organiser of some description would be something we would all use so we set about brainstorming ideas using the Disney Ideation process.

Once we had completed that process and decided what our MVP would be and what features we would like to include, we then designed the app using low and high fidelity wireframes. 

The next step was to take the design and then break it down into the components we would use in React. This process enabled us to plan a detailed component file tree, from which we were able to produce detailed and specific tickets for the team to work on for the rest of the week.

The final part of the day was spent discussing and planning how the information in the backend would be structured in order to serve the frontend.
## Day 2

We decided to spilt the teams in half and pair-programme, with one pair working on the frontend and one on the backend. Both teams spent the day working on the various tickets in order to produce our MVP. 

The frontend team spent most of the day working on the main components in React, following the component plan in order to ensure that the props were being handed down correctly. Basic CSS was also carried out and structured around the components.

The backend team constructed all of the 'dummy data' which was required to pass to the subject items and the resource list. Once this was completed the team concentrated on building the server with node and setting up the various routes in Express.
## Day 3

Day 3 was spent working in our pairs again with the aim of getting the MVP finished by the end of the day. 

The frontend continued working on the various components and functions in order to populate the daily buttons and detail the subject items and resources list. The CSS was mostly completed.

The backend team spent the day finishing off the routes and providing some additional 'dummy data' for the resource list. 

By the end of day 3, we had completed the MVP and spend some time discussing which stretch goals we would try and achieve by the end of the final coding day tomorrow.
## Day 4

Having discussed the evening before what stretch goals we would like to achieve, we spent the fourth day all working together on some extra features.

It was decided that we would introduce a star rating to each individual subject and these would be calculated into an average and displayed on the daily button. It was also decided that two buttons should be added to the subject list item, in order to indicate that the task had been completed and also to move the subject to a seperate weekend todo list.


## Day 5

We spent a brief period in the morning finishing off some last details before we spent a couple of hours throughly practising our presentaion.

We finally presented our App in the afternoon to a panel of judges.
## Tech Stack

**Client:** HTML, CSS, Javascript, React.

**Server:** Node, Express, PostgreSQL.


## Installation

Install frontend with npm

```bash
  git clone https://github.com/SchoolOfCode/w9_frontend-project-conor-lee-yasar-carlos
  cd my-app
  npm install
```
    
Install backend with npm

```bash
  git clone https://github.com/SchoolOfCode/w9_backend-project-conor-lee-yasar-carlos
  npm install
```
## Deployment


To deploy this project in the frontend folder run

```bash
  npm start
```
To deploy this project in the backend folder run

```bash
  npm run dev
```


## Running Tests

To run tests, run the following command

```bash
  npm run test
```


## API Reference


#### Get item
_Returns all the days for the specified week number._


    `api/v1/<user_id>/<week_number>`





#### Post item
_Add a comment to a task by its ID._

    `api/v1/<user_id>/<week_number>/<day_number>/comment/<task_id>`





#### Patch item

_update task unique comment_

     `api/v1/<user_id>/<week_number>/<day_number>/comment/<task_id>`

  _update task meta_

     `api/v1/<user_id>/<week_number>/<day_number>/task/<task_id>`

  _update resource meta_

     `api/v1/<user_id>/<week_number>/<day_number>/resource/<resource_id>`


## License

[MIT](https://choosealicense.com/licenses/mit/) @Lee Conroy 2022
