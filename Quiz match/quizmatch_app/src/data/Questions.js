const QUESTIONS = [
	{
		question: 'What is ReactJS?',
		options: [
			'A database',
			'A JavaScript library for building user interfaces',
			'A CSS framework',
			'A backend language',
		],
		correctOption: 'A JavaScript library for building user interfaces',
	},
	{
		question: 'Who developed ReactJS?',
		options: ['Google', 'Microsoft', 'Facebook', 'Twitter'],
		correctOption: 'Facebook',
	},
	{
		question: 'What is the command to create a new React app?',
		options: [
			'npx create-react-app myApp',
			'npm install react',
			'react new app',
			'node start-react',
		],
		correctOption: 'npx create-react-app myApp',
	},
	{
		question: 'What does JSX stand for?',
		options: [
			'JavaScript Extension',
			'Java Standard XML',
			'JavaScript XML',
			'Java Syntax Exchange',
		],
		correctOption: 'JavaScript XML',
	},
	{
		question: 'Which method is used to render React content?',
		options: [
			'ReactDOM.display()',
			'React.show()',
			'ReactDOM.render()',
			'React.view()',
		],
		correctOption: 'ReactDOM.render()',
	},
	{
		question: 'How do you write a React component using a function?',
		options: [
			'function MyComponent() {}',
			'component MyComponent() {}',
			'class MyComponent() {}',
			'render MyComponent() {}',
		],
		correctOption: 'function MyComponent() {}',
	},
	{
		question:
			'Which hook is used to manage state in a functional component?',
		options: ['useEffect', 'useRef', 'useState', 'useMemo'],
		correctOption: 'useState',
	},
	{
		question: 'What is the correct syntax to pass a prop in React?',
		options: [
			"<MyComponent prop='value' />",
			"{MyComponent(prop='value')}",
			"[MyComponent prop='value']",
			"<MyComponent.prop = 'value' />",
		],
		correctOption: "<MyComponent prop='value' />",
	},
	{
		question: 'Which of these is used to add styles in React inline?',
		options: [
			"style='color: red'",
			"style={{color: 'red'}}",
			"styles='color: red'",
			"css={{color: 'red'}}",
		],
		correctOption: "style={{color: 'red'}}",
	},
	{
		question: 'What is the default port number React app runs on?',
		options: ['3000', '8080', '8000', '5000'],
		correctOption: '3000',
	},

	{
    question: 'What is the purpose of the useEffect hook in React?',
    options: [
      'To directly manipulate the DOM',
      'To fetch data and handle side effects in functional components',
      'To update state variables',
      'To define class components',
    ],
    correctOption: 'To fetch data and handle side effects in functional components',
  },
  {
    question: 'Which of the following best describes the virtual DOM?',
    options: [
      'A direct representation of the actual DOM',
      'A lightweight copy of the real DOM used for performance optimization',
      'A browser API for rendering UI',
      'A state management tool',
    ],
    correctOption: 'A lightweight copy of the real DOM used for performance optimization',
  },
  {
    question: 'What happens when you call setState in a React component?',
    options: [
      'It immediately changes the state',
      'It queues a state update and triggers a re-render',
      'It mutates the existing state object',
      'It updates the Redux store',
    ],
    correctOption: 'It queues a state update and triggers a re-render',
  },
  {
    question: 'What is the primary purpose of keys in React lists?',
    options: [
      'To style elements uniquely',
      'To uniquely identify elements and optimize rendering',
      'To bind event handlers',
      'To filter data',
    ],
    correctOption: 'To uniquely identify elements and optimize rendering',
  },
  {
    question: 'What will happen if you update state directly without using setState in a class component?',
    options: [
      'The component will re-render normally',
      'You’ll get a compilation error',
      'React will detect and correct it automatically',
      'The component will not re-render and state change may not persist',
    ],
    correctOption: 'The component will not re-render and state change may not persist',
  },
  {
    question: 'Which hook would you use to preserve values between renders without causing a re-render?',
    options: [
      'useState',
      'useEffect',
      'useRef',
      'useMemo',
    ],
    correctOption: 'useRef',
  },
  {
    question: 'What does the "lifting state up" pattern in React mean?',
    options: [
      'Passing state from child to parent components',
      'Creating global state accessible to all components',
      'Moving shared state to the closest common ancestor component',
      'Using Redux for state management',
    ],
    correctOption: 'Moving shared state to the closest common ancestor component',
  },
  {
    question: 'Which method is used to pass data from a parent component to a child component?',
    options: [
      'Using useState',
      'Using useEffect',
      'Using props',
      'Using context',
    ],
    correctOption: 'Using props',
  },
  {
    question: 'Why should you avoid mutating state directly in React?',
    options: [
      'It’s faster to create a new object',
      'It breaks React’s optimization and can lead to unpredictable behavior',
      'It creates memory leaks',
      'It causes syntax errors',
    ],
    correctOption: 'It breaks React’s optimization and can lead to unpredictable behavior',
  },
  {
    question: 'What is JSX?',
    options: [
      'A new JavaScript syntax',
      'An XML/HTML-like syntax used by React to describe UI elements',
      'A CSS preprocessor',
      'A testing library for React',
    ],
    correctOption: 'An XML/HTML-like syntax used by React to describe UI elements',
  },
];

export default QUESTIONS;