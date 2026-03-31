const quizData = [
  {
    index: "start",
    question: "Do you feel bad at work?",
    options: [
      { label: "Yes", next: "bad-yes" },
      { label: "No", next: "bad-no" },
    ],
  },
  {
    index: "bad-yes",
    question: "Does anyone at work make your day hard and tiring?",
    options: [
      { label: "Yes", next: "hard-yes" },
      { label: "No", next: "bad-no" },
    ],
  },
  {
    index: "hard-yes",
    question: "Is the struggle caused by the manager or a coworker?",
    options: [
      { label: "Manager", next: "manager-safety" },
      { label: "Co-worker", next: "coworker-manager-know" },
    ],
  },
  {
    index: "manager-safety",
    question: "Do you fear for your life or safety?",
    options: [
      { label: "Yes", next: "collect-proof" },
      {
        label: "No",
        next: "situations",
      },
    ],
  },
  {
    index: "collect-proof",
    question: "Collecting proof is very important to get help. Do you have proof?",
    options: [
      { label: "Yes", next: "submit-proof" },
      {
        label: "No",
        next: "how-to-collect-proof",
      },
    ],
  },
  {
    index: "coworker-manager-know",
    question: "Does the manager know about the problem?",
    options: [
      { label: "Yes", next: "situations" },
      {
        label: "No",
        next: "situations",
      },
    ],
  },
  {
    index: "situations",
    type: "select",
    question: "Did they face one or more of these situations?",
    options: [
      { label: "I don't get paid every month", next: "have-proof" },
      { label: "My passport/phone was taken away", next: "have-proof" },
      { label: "I was hit", next: "other-have-proof" },
      { label: "Speak badly to you", next: "have-proof" },
      { label: "Nothing like this happened to you", next: "help-others" },
    ],
    multiple: true,
    selected: [],
  },
  {
    index: "have-proof",
    question: "Do you have proof?",
    options: [
      { label: "Yes", next: "submit-proof" },
      {
        label: "No",
        next: "how-to-collect-proof",
      },
    ],
  },
  {
    index: "bad-no",
    question: "Do you know someone who is struggling at work?",
    options: [
      { label: "Yes", next: "other-struggle-cause" },
      { label: "No", next: "about-us" },
    ],
  },
  {
    index: "other-struggle-cause",
    question: "Is the struggle caused by the manager or a coworker?",
    options: [
      { label: "Manager", next: "other-manager-safety" },
      { label: "Co-worker", next: "coworker-manager-know" },
    ],
  },
  {
    index: "other-manager-safety",
    question: "Do you fear for their life or safety?",
    options: [
      { label: "Yes", next: "other-manager-collect-proof" },
      {
        label: "No",
        next: "other-coworker-situations",
      },
    ],
  },
  {
    index: "other-manager-collect-proof",
    question: "Collecting proof is very important to get help. Do you have proof?",
    options: [
      { label: "Yes", next: "submit-proof" },
      {
        label: "No",
        next: "how-to-collect-proof",
      },
    ],
  },
  {
    index: "other-coworker-manager-know",
    question: "Does the manager know about the problem?",
    options: [
      { label: "Yes", next: "other-coworker-situations" },
      {
        label: "No",
        next: "other-coworker-situations",
      },
    ],
  },
  {
    index: "other-coworker-situations",
    type: "select",
    question: "Did they face one or more of these situations?",
    options: [
      { label: "They do not get paid every month", next: "other-have-proof" },
      {
        label: "Their passport/phone was taken away",
        next: "other-have-proof",
      },
      { label: "They were hit", next: "other-have-proof" },
      { label: "Speak badly to them", next: "other-have-proof" },
      { label: "Nothing like this happened", next: "help-others" },
    ],
    multiple: true,
    selected: [],
  },
  {
    index: "other-have-proof",
    question: "Do you have proof?",
    options: [
      { label: "Yes", next: "submit-proof" },
      { label: "No", next: "how-to-collect-proof" },
    ],
  },
  {
    index: "submit-proof",
    question: "You are directed to the proof submission page.",
    link: "/submit",
  },
  {
    index: "how-to-collect-proof",
    question:
      "You are directed to a page with clear information on what is good proof and how to start collecting.",
    link: "/proof-tips",
  },
  {
    index: "help-others",
    question:
      "If you know someone who faces this kind of situation, click here to know how you can help.",
    link: "/help-others",
  },
  {
    index: "about-us",
    question: "Learn more about what we do. Maybe you can help.",
    link: "/about-us",
  },
];

export default quizData;
