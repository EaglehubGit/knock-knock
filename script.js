// Project for codecademy - knock-knock - Git and GitHub

// Step 1: Collection of knock-knock jokes in Array
const knockKnockJokes = [
  {
    setup: "Knock, knock.",
    response: "Who's there?",
    punchline: "Hawaii.",
    punchlineResponse: "Hawaii who?",
    final: "I'm good. Hawaii you?",
    ASCIIart: "** %-) **"
  },
  {
    setup: "Knock, knock.",
    response: "Who's there?",
    punchline: "Figs.",
    punchlineResponse: "Figs who?",
    final: "Figs the doorbell, it's not working",
    ASCIIart: "** %-) **"
  },
  {
      setup: "Knock, knock.",
      response: "Who's there?",
      punchline: "Tank.",
      punchlineResponse: "Tank who?",
      final: "You're welcome",
      ASCIIart: "** %-) **"
    },
    {
      setup: "Knock, knock.",
      response: "Who's there?",
      punchline: "Lettuce.",
      punchlineResponse: "Lettuce who?",
      final: "Lettuce in, it's cold out here!",
      ASCIIart: "** %-) **"
    },
    {
      setup: "Knock, knock.",
      response: "Who's there?",
      punchline: "Boo.",
      punchlineResponse: "Boo who?",
      final: "Don't cry, it's just a joke!",
      ASCIIart: "** %-) **"
    },
    {
      setup: "Knock, knock.",
      response: "Who's there?",
      punchline: "Cow says.",
      punchlineResponse: "Cow says who?",
      final: "No, silly! Cow says 'moo!'",
      ASCIIart: "** %-) **"
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
            setTimeout(() => {
              console.log(joke.ASCIIart); // "ASCIIart"
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }
  
  // Step 3: Trigger the function
  sendKnockKnockJoke();
  