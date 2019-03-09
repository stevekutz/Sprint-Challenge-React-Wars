# Answers

1.  What is React JS and what problems does it try and solve?
Reat is User Interface Component Library that renders UI very efficiently using a 
virtual DOM(a virtual engine that represents what the DOM should look like). It solve problems 
associated with building user interfaces that have various strategies,tradeoffs, etc. by providing some 
simple fundamental objectives such as applying functional programming & using components(and re-using them 
when available)

2.  What does it mean to _think_ in react?
Thinking in React means making sure that you have a centralized way of managing state and that everything 
should be a component(some re-used) that has a specific role in the app and DRY is applied effectively.


3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
    A functional component is used to represent static elements(that can receive read-only props). It does not
    mututate or change props but can perform logic on what is receives to determine how the component is rendered.
    
    A stateful component manages data that can change/update and also can be 'passed down' to 
    functional components. The functional components can pass data up to state through event handlers.
    Classes are used for stateful components and these classes themselves can receive props.
    
4.  Describe state.
    State is current snapshot of the data being managed in an application. It should not be mututated itself and
    special care it taken to make sure that the application has access the the current state when data changes. 
    Using prevState is a good strategy because Apps the interact with an API or a web service need to accurately 
    provide current state.

5.  Describe props.
    Props are properties (like attributes) that can be assigned to components. These can be passed down to child
    components and if there are several layers of child components, we end can up doing something called
    'prop drilling'. There are often better ways to manage data than prop drilling but it has its place in some
    applications.   
