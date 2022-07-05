# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.


1. What is `this` in JavaScript?

  Your answer: 'this' in JavaScript is what is used to call on values in a class in different parts of the function. 

  Researched answer: For every object that is created, 'this' will reference the current code block that 'this' is in. For example, if I was making an object for a variable of someone's pets. The type of pet would be an object. When the type of pet is called upon, then the object would be reflected. That part of the code would start with defining the variable and the object  
  const pet = (
    type: "cat"
      console.log(I have a {this.type})
  )
  When the function is invoked,"I have a cat" will be returned. Calling on that object by using 'this' will make it simpler to call on other objects if there are more added. 



2. What is React? Why would you use it?

  Your answer: React is a functionality application that is used when building websites. React is used to create dynamic features on the webpage without having to constantly refresh the page to see the features update.

  Researched answer: React is a library built of components, that are joined together to form applications and are packaged in a way that is easily accessible and recallable. Using React is beneficial for making the user interface of webpages, mobile apps dynamic. There is no need to refresh the page in order to see new data or a certain functionality of the page. React also allows developers to keep the code succinct and packaged while also being easily accessible and recallable. For example, double tapping on a picture on Instagram and having the heart pop up without the page refreshing is Instagram utilzing React. 



3. Which lifecycle method is required in a React class component?

  Your answer: The lifecycle method that is required in a React class component is render() and return().

  Researched answer: The lifecycle method that is required in a React class component is the render() method. Render() is the constant throughout the Mounting and Updating phases and gets all of the code set up to provide a return. It does not interact directly with the browser, it does examine this.props or this.state and it also organizes the functionality of React so the components still behave correctly and there is an expecation of the outputted behavior. Render() does not modify the component state ensuring the same result is returned each time it is invoked. 



4. What is JSX? What is one syntax difference between HTML and JSX?

  Your answer: JSX is the language that is used in React that talks to React while in the html tags and in a javascript file. There is a commonality among the JavaScript and HTML languages while in React.One syntax difference between HTML and JSX is using {} versus <>.

  Researched answer: JSX is one of the building blocks of React Components. JSX allows React to display more indepth errors when checking the console. Using the curly braces for any JS expression or declared variable to define the expression or variable as JSX will work in React. JSX can be used in conditional statements, variables, functions, etc...Utilizing the curly braces to specify a JSX value is imperative for getting the most out of React. 



5. What is yarn? What file(s) are modified in a React application when you run yarn?

  Your answer: Yarn runs a package full of complimentary files specific to run certain commands. For example, 'yarn jest' would run a test file for JavaScript would test a code in a javascript file. The files that are being modified in a React Application are the App.js, any component files that are built and the App.css files are being modified. 

  Researched answer: Yarn is a package manager for JavaScript that contains code being shared from other developers aka a package. Any problems or errors that are reported are fixed and redisseminated to the community so yarn stays up to date. In a React App, the App.js file which stores the succinct JavaScript code from all the components is the file that is being modified. The App.js file is the gathering place for all of the files as long as they are imported into that file. If there is any code in the App.css file, that will also be updated only IF it is imported into the App.js file. 



6. STRETCH: What is an anonymous function in JavaScript?

  Your answer: An anonymous function is at the beginning of the function letting the rest of the function know that there will be a value defined. However, the function needs to have more logic and defined parameters in order to have an output that runs the function correctly. 

  Researched answer: An anonymous function in JavaScript is a function that does not have a name but is assigned to a variable. Assigning the anonymous function a variable makes it so the function is able to be used later. Anonymous functions can also be used as arguments to other functions. 

  //


## Looking Ahead: Terms for Next Week

1. Conditional rendering: Once the correct information is in the correct place then the information can be displayed to the user. 

2. Object-oriented programming: Programming system to deal with the complexity of running large software systems. Categorizing everything into objects allows for compartmentalization to take place.  With the lack of compartmentalization, maintainance can be difficult due to small changes having large effects because of everything being dependent on one another.

3. Ruby: Dynamic, general-purposed, easily dicipherable object oriented programming language with built in methods.

4. Ruby blocks: Synonymous to anonymous functions like JavaScript.Code that is passed to a method. 

5. Ruby hashes: A container similar to an array but the data is stored in key:value pairs and is referenced via their key instead of their index. 
