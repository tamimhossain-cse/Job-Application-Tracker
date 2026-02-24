 ## Project Title: Job Application Tracker
This a simple job Application tracker web build using HTML, Tailwind CSS and JavaScript.DOM is the document object model which is mostly use in this web application.I create this project for the purpose Assignment as well as practice DOM manipulation, filtering logic, and dynamic UI updates.


## What is this project?

Job Application Tracker is a small project where users can track their job applications.  
You can mark jobs as Interview or Rejected, filter them by status, and remove jobs when needed.


**Technology Stack:**
- HTML
- CSS (Tailwind CSS)
- JavaScript (DOM)

##  What it does?
- Show available all job cards
- Allows marking jobs as Interview or Rejected
- Filtering jobs based on status
- Updates counts dynamically
- Shows empty state when no jobs exist
- Allows deleting job cards


## What I learned from this Project?
- DOM manipulation
- Event delegation
- Working with arrays (push, filter)
- Dynamic rendering
- Button toggle logic
- UI updates

## folder path
│
├── index.html
├── script.js
└── README.md

##  How to run?

1. Download or clone the project-
https://github.com/tamimhossain-cse/Job-Application-Tracker.git

2.Open index.html in your browser.
That's it — no setup needed.

## Question and answer
### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
- Answer:
- getElementById()- selects one unique element by its ID.
## EX: document.getElementById("interview-btn");

- getElementsByClassName() -selects multiple elements by class name and returns an HTMLCollection.
## Ex: document.getElementsByClassName("card");

- querySelector()- selects the first matching element using CSS selector.
## Ex: document.querySelector(".card");

- querySelectorAll()- selects all matching elements and returns a NodeList.
## Ex: document.querySelectorAll(".card");

### 2. How do you create and insert a new element into the DOM?
- Answer:
-  create by using createElement()
- Set content
- Append using appendChild() or append()

## Ex:
const div = document.createElement("div");
div.innerText =  "Hello Tamim Mahmud";
document.body.appendChild(div);


### 3. What is Event Bubbling? And how does it work?
Event Bubbling means when an event happens on a child element, it also moves upward to parent elements.That means event travels from inside to outside.

### 4. What is Event Delegation in JavaScript? Why is it useful?
Event Delegation means adding one event listener to a parent element instead of multiple child elements.


### 5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() stops the browser's default behavior
event.preventDefault();
stopPropagation() stops the event from bubbling up to parent elements.
event.stopPropagation();

