const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors module
const app = express();
const port = 8000

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());

const users = [
  {
    id: 0,
    username: 'Hans1234',
    email: 'Hans1235@hotmail.com',
    password: 'qwer1234',
    programmingLanguages: [
      { id: 0, languages: 'Python', skillLevel: 'Intermediate' },
      { id: 1, languages: 'Java', skillLevel: 'Beginner' },
    ],
    Question: [
      {
        id: 0,
        languages: 'Python',
        skillLevel: 'Intermediate',
        Text:
          'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. ',
        Answers: 4,
      },
      {
        id: 1,
        languages: 'Python',
        skillLevel: 'Intermediate',
        Text:
          'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. ',
        Answers: 5,
      },
      {
        id: 2,
        languages: 'Python',
        skillLevel: 'Intermediate',
        Text:
          'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. ',
        Answers: 6,
      },
      {
        id: 3,
        languages: 'Python',
        skillLevel: 'Intermediate',
        Text:
          'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. ',
        Answers: 2,
      },
      {
        id: 4,
        languages: 'Python',
        skillLevel: 'Intermediate',
        Text:
          'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. ',
        Answers: 5,
      },
    ],
  },
  {
    id: 1,
    username: 'Sven1234',
    email: 'sven1235@hotmail.com',
    password: 'asdf1234',
  },
];
// Get all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// Get programming languages for a specific user
app.get('/api/users/:userId/programmingLanguages', (req, res) => {
  const userId = parseInt(req.params.userId);
  const user = users.find((u) => u.id === userId);

  if (!user) {
    res.status(404).json({ error: 'User not found' });
  } else {
    res.json(user.programmingLanguages || []);
  }
});

// Get a specific programming language for a user
app.get('/api/users/:userId/programmingLanguages/:languageId', (req, res) => {
  const userId = parseInt(req.params.userId);
  const languageId = parseInt(req.params.languageId);
  const user = users.find((u) => u.id === userId);

  if (!user) {
    res.status(404).json({ error: 'User not found' });
  } else {
    const language = user.programmingLanguages.find((lang) => lang.id === languageId);

    if (!language) {
      res.status(404).json({ error: 'Programming language not found' });
    } else {
      res.json(language);
    }
  }
});

// Get the number of questions for a specific user
app.get('/api/users/:userId/questions/count', (req, res) => {
  const userId = parseInt(req.params.userId);
  const user = users.find((u) => u.id === userId);

  if (!user) {
    res.status(404).json({ error: 'User not found' });
  } else {
    const questionCount = user.Question ? user.Question.length : 0;
    res.json({ questionCount });
  }
});

app.post('/api/users/:userId/programmingLanguages', (req, res) => {
  const userId = parseInt(req.params.userId);
  const { languages, skillLevel } = req.body;

  const user = users.find((u) => u.id === userId);

  if (!user) {
    res.status(404).json({ error: 'User not found' });
  } else {
    const newLanguage = {
      id: user.programmingLanguages.length, // Generate a new ID (you might want to use a more robust method)
      languages,
      skillLevel,
    };

    user.programmingLanguages.push(newLanguage);

    res.json(newLanguage);
  }
});


app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});