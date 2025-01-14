// Project for codecademy - knock-knock - Git and GitHub

// Step 1: Collection of knock-knock jokes in Array
const knockKnockJokes = [
    {
      setup: "Knock, knock.",
      response: "Who's there?",
      punchline: "Tank.",
      punchlineResponse: "Tank who?",
      final: "You're welcome"
    },
    {
      setup: "Knock, knock.",
      response: "Who's there?",
      punchline: "Lettuce.",
      punchlineResponse: "Lettuce who?",
      final: "Lettuce in, it's cold out here!"
    },
    {
      setup: "Knock, knock.",
      response: "Who's there?",
      punchline: "Boo.",
      punchlineResponse: "Boo who?",
      final: "Don't cry, it's just a joke!"
    },
    {
      setup: "Knock, knock.",
      response: "Who's there?",
      punchline: "Cow says.",
      punchlineResponse: "Cow says who?",
      final: "No, silly! Cow says 'moo!'"
    }
  ];
  
  // Step 2: Function to send a knock-knock joke
  function sendKnockKnockJoke() {
    // Pick a random joke
    const joke = knockKnockJokes[Math.floor(Math.random() * knockKnockJokes.length)];
  
    // Simulate sending messages
    console.log(joke.setup); // "Knock, knock."
    setTimeout(() => {
      console.log(joke.response); // "Who's there?"
      setTimeout(() => {
        console.log(joke.punchline); // "Lettuce."
        setTimeout(() => {
          console.log(joke.punchlineResponse); // "Lettuce who?"
          setTimeout(() => {
            console.log(joke.final); // "Lettuce in, it's cold out here!"
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }
  
  // Step 3: Trigger the function
  sendKnockKnockJoke();
  