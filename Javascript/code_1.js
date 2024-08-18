"use strict";

/*
                                                Node.js vs Browser
    Browser and Node.js use Javascript as programming language. 
    * In browser, we are interacting with DOM, or other web platform APIs like cookies.
    * Node.js don't have the document, window and other objects that are provided by browser.
    * Browser, do have APIs like node js, like filesystem access functionality
    * In node.js we can control the enviroment,unless you are building open source application that anyone can deploy anywhere.
    * Browser enviroment don't give luxury to choose browser to its users. 
    * Node.js supports both EJ module and commonjs.

*/

/*
    Rendering in React is the process of translating the JSX (or JavaScript) code into HTML that can be displayed in the browser. When you initially render a component, React takes the JSX code and converts it into the corresponding DOM elements.

    Re-rendering occurs whenever there's a change in the state or props of a component. React monitors these changes and, when detected, triggers a re-render. During a re-render, React compares the new JSX output with the previous one using a process called "reconciliation." It then updates only the parts of the DOM that have changed, making the update process efficient.
    This approach is central to React's performance optimization, as it avoids unnecessary updates to parts of the UI that haven't changed.
*/

/*
The useEffect hook in React is indeed designed to handle side effects, which are operations that occur as a result of state changes, prop updates, or other external factors that affect the component. These side effects could be anything that happens "outside" of React’s rendering flow, such as:

Fetching data from an API: When the component renders or updates, you might need to fetch data from an external source and update the component with that data.
Manually updating the DOM: Sometimes, you might need to manipulate the DOM directly, such as integrating with third-party libraries or adjusting elements outside of React’s controlled scope.
Setting up subscriptions: You might set up event listeners, subscribe to data streams, or establish a connection to a WebSocket, and you want to ensure those subscriptions are set up and torn down properly.
Timers: You might want to start a timer or an interval when the component mounts and clear it when the component unmounts.
Here’s a more detailed example:

javascript
Copy code
import React, { useState, useEffect } from 'react';

function DataFetchingComponent() {
  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Fetch data from an API when the component mounts
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));

    // This cleanup function runs when the component unmounts
    return () => {
      console.log('Cleanup on unmount');
    };
  }, []); // Empty array ensures this runs only once after the initial render

  useEffect(() => {
    // This effect runs whenever 'count' changes
    document.title = `You clicked ${count} times`;

    return () => {
      // Cleanup function to reset document title when the effect is about to run again or the component unmounts
      document.title = 'React App';
    };
  }, [count]); // This effect depends on 'count'

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <div>{data ? `Data: ${JSON.stringify(data)}` : 'Loading data...'}</div>
    </div>
  );
}
Key Points:
Side effects are operations that impact something outside of the React component (like an API call or DOM manipulation).
useEffect is a way to run these side effects in a controlled manner, depending on when and how you want them to trigger (e.g., on mount, on update, on unmount).
The dependency array allows you to control when the effect runs, making sure the side effect only happens when the specified values change.
In summary, useEffect is not just a tool for running code on component mount or update—it's a way to manage all sorts of side effects that result from changes in state, props, or other external conditions.


*/

console.table([ 3+3, 9+10,10-2 ]);
