This work uses the few Javascript function. Some of the functions and their functionality is explained bellow.

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Answer:
getElementById uses an ID to applay specfic interaction features 

2. How do you **create and insert a new element into the DOM**?
Answer: Using createElement() function we can add a new element in DOM. This allows to dynamically create a new HTML element and then to insert it we using the append function. One of the function is appendChild().

Example: const div = document.createElement("div")
          //div content create//
          document.name.appendChild(div);

3. What is **Event Bubbling** and how does it work?
Answer: It's a function that works when child element is clicked which means it will trigger the parent element to respond. In this process when child is triggered, it's prograted upwards to the parent of the particular child.

Example: <div id ="oject">
            <button>Option</button>
        </div>
        child.addEventListener('click',function(e){
            e.stopPropagation()
            console.log("Child Clicked")
        });

When the button Option is clicked then it will go to parent <div> and then trigger the id to work accroding to the js function.

4. What is **Event Delegation** in JavaScript? Why is it useful?
Answer: This function allows to handle an event without usng the eventListener to each and every element. It's useful as instead of repeatedly adding in all the elements we can just add it once in the parent element and call on the specific child elements that we want.

Example:  <div id ="oject">
            <button>Option</button>
           </div>
        const div = document.getElementsByTagName("div")[0]
        div.addEventListener("click", (event) => {
        if(event.target.tagName === 'BUTTON') {
        console.log("button was clicked")
      }
    });
5. What is the difference between **preventDefault() and stopPropagation()** methods?
Answer: The stopPropagation() function prevents further propagation of the current event in the capturing and bubbling phases and prevents the propagation of the same event from being called. 
The preventDefault() prevents the default action the browser makes on that event this prevents the browser from executing the default behavior of the selected element. This method can cancel the event only if the event is cancelable.

