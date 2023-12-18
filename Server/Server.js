const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors module
const app = express();
const port = 8000

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());
const pages= [
  {
      "id": 0,
      "name": "Questions"
  },
  {
      "id": 1,
      "name": "Answers"
  },
  {
      "id": 2,
      "name": "Search"
  },
  {
      "id": 3,
      "name": "Profile"
  }
]
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
      }
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
app.get('/api/pages', (req, res) => {
  res.json(pages);
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username && u.password === password);

  if (user) {
    const { id, username, email, password } = user;
    res.json({ id, username, email,password });
  } else {
    res.status(401).json({ error: 'Invalid username or password' });
  }
});

  app.post('/api/users', async (req, res) => {
    console.log(req);
    try {
      const profileId = parseInt(req.body.profileId); // Get the user ID from the request body
      console.log(profileId)
      if (!profileId) {
        res.status(400).json({ error: 'Invalid user ID' });
        return;
      }

      const userWithId = users.find((userData) => userData.id === profileId);

      if (!userWithId) {
        res.status(404).json({ error: 'User not found' });
      } else {
        res.json([userWithId]); // Return an array with the matched user
      }
    } catch (error) {
      console.error('Error processing request:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
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
//app.get('/api/users/:userId/questions/count', (req, res) => {
//  const userId = parseInt(req.params.userId);
//  const user = users.find((u) => u.id === userId);
//  if (!user) {
//    res.status(404).json({ error: 'User not found' });
//  } else {
//    const questionCount = user.Question ? user.Question.length : 0;
//    res.json({ questionCount });
//  }
//});


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