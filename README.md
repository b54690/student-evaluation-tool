Project description
===

Evaluation Tool for Teachers
--

For my final personal assignment at the Codaisseur Academy I was tasked with building an evaluation tool 
for the teachers at the academy using:

- React / Redux for front end
- Styling: CSS, Material-ui
- TypeScript / TypeORM / Postgres in the back-end. 

I has 4 days in which to complete the project. 

User Stories
--

- As a Teacher I can sign into the tool with my email and password to start using it
- As a Teacher, after I signed in, I see a (list of) current classes, identifiable by their Batch number (e.g. Batch #1), start date, and end date.
- As a Teacher, I can create a new class by giving it a Batch number, start date, and end date.
- As a Teacher I can add, edit, remove students in a class. To add a student I need to provide: 1) their full name, 2) (a link to) their profile picture.
- As a Teacher, I can click on a class, after which I see a grid of all the students by their name and photo, and the last colour code given to them. As a Teacher, when I click on a photo or name, I can click on GREEN, YELLOW, or RED, fill in the date (defaults to today), and a remark. When I click “Save” it saves my evaluation, and takes me back to the student overview, when I click “Save and Next” it saves and shows me the next student.
- As a Teacher, when I look at a student’s page, I can only fill in one evaluation per student per day. I can edit my own evaluations.
- ALGORITHM PART! As a Teacher, from the class view I can click a button “ASK A QUESTION”. It shows me the name and picture of a random student to ask a question. Not entirely random though: RED students get ~53% of the questions YELLOW students ~28%, and GREEN students ~19%.

Installation Instructions
--

1. Install the dependencies:

- In each project directory run yarn

2. Run the back-end side of the app:

- Start the yarn watch TypeScript compiler: tsc -w
- Connect to Postgres with TypeORM: yarn start

3. Run the front-end side of the app:

- In the ‘client’ directory run yarn start
