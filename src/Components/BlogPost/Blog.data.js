const Blog = [
  {
    title: "An Interactive Guide to CSS Grid",
    link: "https://www.joshwcomeau.com/css/interactive-guide-to-grid/",
    context:
      "CSS Grid is an incredibly powerful tool for building layouts on the web, but like all powerful tools, there's a significant learning curve. In this tutorial, we'll build a mental model for how CSS Grid works and how we can use it effectively. I'll share the biggest 💡 lightbulb moments I've had in my own learning journey.",
    btn: "Read More",
    img: require("../../assets/images/icons/arrow.svg").default,
  },

  {
    title: "Understanding the JavaScript Modulo Operator",
    link: "https://www.joshwcomeau.com/javascript/modulo-operator/",
    context:
      "One of the most commonly-misunderstood operators is Modulo (%). In this tutorial, we'll unpack exactly what this little bugger does, and learn how it can help us solve practical problems.",
    btn: "Read More",
    img: require("../../assets/images/icons/arrow.svg").default,
  },

  {
    title: "Making Sense of React Server Components",
    link: "https://www.joshwcomeau.com/react/server-components/",
    context:
      "This year, the React team unveiled something they've been quietly researching for years: an official way to run React components exclusively on the server. This is a significant paradigm shift, and it's caused a whole lot of confusion in the React community. In this tutorial, we'll explore this new world, and build an intuition for how it works, and how we can take advantage of it.",
    btn: "Read More",
    img: require("../../assets/images/icons/arrow.svg").default,
  },

  {
    title: "Animated Pride Flags",
    link: "https://www.joshwcomeau.com/animation/pride-flags/",
    context:
      "Happy Pride month! In this tutorial, I'll share a handful of my favourite animation tricks. You'll learn how to build an animated wavy pride flag using CSS keyframes and linear gradients. We'll also see how to make it dynamic using React. 🏳️‍🌈",
    btn: "Read More",
    img: require("../../assets/images/icons/arrow.svg").default,
  },

  {
    title: "The “const” Deception",
    link: "https://www.joshwcomeau.com/javascript/the-const-deception/",
    subtitle:
      "Exploring the difference between assignment and mutation in JavaScript",
    context:
      "The “const” keyword in JavaScript is used to create constants, variables that can't change. Curiously, though, we do seem to be able to edit objects and arrays that are created using “const”. In this tutorial, we're going to dig into the incredibly-important distinction between “assignment” and “mutation” in JavaScript.",
    btn: "Read More",
    img: require("../../assets/images/icons/arrow.svg").default,
  },

  {
    title: "The End of Front-End Development",
    link: "https://www.joshwcomeau.com/blog/the-end-of-frontend-development/",
    context:
      "Large language models like GPT-4 are becoming increasingly capable, at an alarming rate. Within a couple of years, we won't need developers any more! …Or at least, that's the narrative going viral on Twitter. I'm much more optimistic about what these AI advancements mean for the future of software development.",
    btn: "Read More",
    img: require("../../assets/images/icons/arrow.svg").default,
  },

  {
    title: "Common Beginner Mistakes with React",
    link: "https://www.joshwcomeau.com/react/common-beginner-mistakes/",
    subtitle: "Pitfalls, gotchas, and footguns, oh my!",
    context:
      "I used to teach React at a local coding bootcamp, and I noticed that students kept getting tripped up by the same handful of things. In this article, we're going to go through 9 of the most dastardly gotchas. I'll show you how to solve these common problems, so you can avoid a lot of potential frustration!",
    btn: "Read More",
    img: require("../../assets/images/icons/arrow.svg").default,
  },

  {
    title: "Data Binding in React",
    link: "https://www.joshwcomeau.com/react/data-binding/",
    context:
      "As developers, we don't like working with forms, but they're a critical part of most web applications! In this tutorial, you'll learn exactly how to wire up all of the different form controls in React. Never forget how to data-bind a checkbox or radio button again!",
    btn: "Read More",
    img: require("../../assets/images/icons/arrow.svg").default,
  },

  {
    title: "Color Formats in CSS",
    link: "https://www.joshwcomeau.com/css/color-formats/",
    context:
      "CSS gives us so many options when it comes to expressing color—we can use hex codes, rgb, hsl, and more. Which option should we choose? This turns out to be a surprisingly important decision! In this article, we'll take a tour of color formats in CSS, and see which option will serve us best.",
    btn: "Read More",
    img: require("../../assets/images/icons/arrow.svg").default,
  },

  {
    title: "An Interactive Guide to Flexbox",
    link: "https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/",
    context:
      "When we truly learn the secrets of the Flexbox layout mode, we can build absolutely incredible things. Fluid layouts that stretch and shrink without arbitrary breakpoints. In this action-packed interactive tutorial, we'll pop the hood on the Flexbox algorithm and learn how to do remarkable things with it. ✨",
    btn: "Read More",
    img: require("../../assets/images/icons/arrow.svg").default,
  },

  {
    title: "A World-Class Code Playground with Sandpack",
    link: "https://www.joshwcomeau.com/react/next-level-playground/",
    context:
      "No developer blog or technical documentation site is complete without an interactive code playground. The CodeSandbox team recently released a wonderful tool called Sandpack, to help us create these live-updating code editors. In this tutorial, I'll show you how I use it on this blog.",
    btn: "Read More",
    img: require("../../assets/images/icons/arrow.svg").default,
  },

  {
    title: "Understanding useMemo and useCallback",
    link: "https://www.joshwcomeau.com/react/usememo-and-usecallback/",
    subtitle: "A roadtrip through two of React's most notorious hooks",
    context:
      "What's the deal with these two hooks?! Lots of devs find them confusing, for a whole host of reasons. In this tutorial, we'll dig deep and understand what they do, why they're useful, and how to get the most out of them.",
    btn: "Read More",
    img: require("../../assets/images/icons/arrow.svg").default,
  },

  {
    title: "Why React Re-Renders",
    link: "https://www.joshwcomeau.com/react/why-react-re-renders/",
    context:
      "In React, we don't update the DOM directly, we tell React what we want the DOM to look like, and React tackles the rest. But how exactly does it do this? In this tutorial, we'll unpack exactly when and why React re-renders, and how we can use this information to optimize the performance of our React apps.",
    btn: "Read More",
    img: require("../../assets/images/icons/arrow.svg").default,
  },

  {
    title: "Statements Vs. Expressions",
    link: "https://www.joshwcomeau.com/javascript/statements-vs-expressions/",
    context:
      "One of the most foundational things to understand about JavaScript is that programs are made up of statements, and statements have slots for expressions. In this blog post, we'll dig into how these two structures work, and see how building an intuition about this can help us solve practical problems.",
    btn: "Read More",
    img: require("../../assets/images/icons/arrow.svg").default,
  },

  {
    title: "My Wonderful HTML Email Workflow",
    link: "https://www.joshwcomeau.com/javascript/statements-vs-expressions/",
    subtitle: "A potent combination of MDX and MJML",
    context:
      "If you've ever had the misfortune of being tasked with building a template for HTML emails, you know it's tricky business! In this blog post, I share the approach I took to build responsive, client-friendly emails without a single <table> tag.",
    btn: "Read More",
    img: require("../../assets/images/icons/arrow.svg").default,
  },

  {
    title: "The Surprising Truth About Pixels and Accessibility",
    link: "https://www.joshwcomeau.com/react/wonderful-emails-with-mjml-and-mdx/",
    context:
      "“Should I use pixels or rems?”. In this comprehensive blog post, we'll answer this question once and for all. You'll learn about the accessibility implications, and how to determine the best unit to use in any scenario.",
    btn: "Read More",
    img: require("../../assets/images/icons/arrow.svg").default,
  },

  {
    title: "You Don’t Need a UI Framework",
    link: "https://www.smashingmagazine.com/2022/05/you-dont-need-ui-framework/",
    context:
      "As developers, it can be tempting to grab a pre-styled UI framework like Material UI or Bootstrap. Seems like a great way to outsource design and save a bunch of time, right? In my experience, this is an unrealistic expectation, and things don’t quite work out that way.",
    btn: "Read More",
    img: require("../../assets/images/icons/arrow.svg").default,
  },

  {
    title: "The Front-End Developer's Guide to the Terminal",
    link: "https://www.joshwcomeau.com/javascript/terminal-for-js-devs/",
    context:
      "If you want to learn a modern JavaScript framework like React or Angular, you better be familiar with the terminal! So many frameworks and tools assume that you're proficient with it, without ever explaining it. This blog post is your missing manual, covering all of the most important fundamentals.",
    btn: "Read More",
    img: require("../../assets/images/icons/arrow.svg").default,
  },

  {
    title: "Understanding Layout Algorithms",
    link: "https://www.joshwcomeau.com/css/understanding-layout-algorithms/",
    subtitle: "The mental model shift that makes CSS more intuitive",
    context:
      "As front-end developers, we often learn CSS by focusing on individual properties. Instead, we should focus on how the language uses those properties to calculate layouts. In this blog post, we'll pop the hood on CSS and see how the language is structured, and how to learn it effectively.",
    btn: "Read More",
    img: require("../../assets/images/icons/arrow.svg").default,
  },

  {
    title: "Delightful React File/Directory Structure",
    link: "https://www.joshwcomeau.com/react/file-structure/",
    context:
      "How should we structure components and other files in our React apps? I've iterated my way to a solution I'm really happy with. In this blog post, I'll share how it works, what the tradeoffs are, and how I mitigate them.",
    btn: "Read More",
    img: require("../../assets/images/icons/arrow.svg").default,
  },
];

export default Blog;
