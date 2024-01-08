import Parse from 'parse';
//import Parse from 'parse/dist/parse.min.js';

Parse.initialize("bCTTcIHsTeO3FRZjfUWQw8BoWEYUSICpeWbm48xy", "WWyJLRsOVJ9do5ixaS8i1e1ye5qHtZksn21zNiTi");
Parse.serverURL = "https://parseapi.back4app.com/";


//------------------------User------------------------

export const createUser = async (username, email, password, confirmPassword) => {
  if (password !== confirmPassword) {
    throw new Error('Passwords do not match');
  }

  try {
    // Create a new Parse User
    const user = new Parse.User();

    user.set('username', username);
    user.set('email', email);
    user.set('password', password);

    const SkillLevels = [
      { LANGUAGE: 'PYTHON', SKILLLEVEL: 'BEGINNER' },
      { LANGUAGE: 'JAVA', SKILLLEVEL: 'BEGINNER' },
      { LANGUAGE: 'JAVASCRIPT', SKILLLEVEL: 'BEGINNER' }
    ];

    user.set('Skill', SkillLevels);

    // Sign up the user
    await user.signUp();

    console.log('User created successfully');
  } catch (error) {
    console.error('Error creating user:', error.message);
  }
};


  export const getSkillLevelByAuthor = async (name) => {
    const query = new Parse.Query('User');
    query.equalTo('Author', name);
    console.log("hey")
    const results = await query.find();
    console.log(results)
    return results.map((question) => ({
      Author: question.get('Author'),
      SkillLevel: question.get('SkillLevel'),
    }));
  };

  export const getSkillLevelByAuthor2 = async (name) => {
    const query = new Parse.Query('User');
    query.equalTo('username', name);
    console.log("hey")
    const results = await query.find();
    console.log(results)
    return results.map((skillLevel) => ({
      SkillLevel: skillLevel.get('Skill'),
    }));
  };

// Import other necessary modules if needed

export const updateSkillLevel = async (username, skillLevel) => {
  try {
    const query = new Parse.Query('User');
    query.equalTo('username', username);

    const user = await query.first(); 

    if (user) {
      user.set('Skill', skillLevel);
      await user.save();
    }
  } catch (error) {
    console.error('Error updating skill level:', error.message);
  }
};


  //https://www.back4app.com/docs/react/working-with-users/get-current-user-react
  export const getCurrentUser = async function () {
    const currentUser = await Parse.User.current();
    return currentUser.get('username');
  };

//------------------------Questions------------------------

export const postQuestion = async(data) => {
    let Question = new Parse.Object("Questions");
    console.log("hey")
    //Question.set("ID", data.ID)
    Question.set("Title", data.title)
    Question.set("Author", data.author)
    Question.set("Text", data.text)
    Question.set("Date", new Date())
    Question.set("Tags", data.tags)

    await Question.save();
}

export const getQuestionsByAuthor = async (name) => {
    const query = new Parse.Query('Questions');
    query.descending('createdAt');
    query.equalTo('Author', name);
    console.log("hey")
    const results = await query.find();
  
    return results.map((question) => ({
      Author: question.get('Author'),
      Title: question.get('Title'),
      Text: question.get('Text'),
      Date: question.get('Date'),
      Tags: question.get('Tags'),
      objectId: question.id
    }));
  };

  export const getNumberOfQuestionsByAuthor = async (name) => {
      const query = new Parse.Query('Questions');
      query.equalTo('Author', name);
      const count = await query.count();
  
      return count;
  };
  
  export const getQuestionsByTags = async (tags) => {
    const query = new Parse.Query('Questions');
    query.descending('createdAt');
    query.containedIn('Tags', tags);
    const results = await query.find();
    console.log(tags)
    console.log("hey")
    console.log(results)
    return results.map((question) => ({
      Author: question.get('Author'),
      Title: question.get('Title'),
      Text: question.get('Text'),
      Date: question.get('Date'),
      Tags: question.get('Tags'),
      objectId: question.id
    }
  ));
};

export const getQuestionsByTags2 = async (tags) => {
  const query = new Parse.Query('Questions');
  query.descending('createdAt');
  query.containsAll('Tags', tags);
  const results = await query.find();
  console.log(tags)
  console.log("hey")
  console.log(results)
  return results.map((question) => ({
    Author: question.get('Author'),
    Title: question.get('Title'),
    Text: question.get('Text'),
    Date: question.get('Date'),
    Tags: question.get('Tags'),
    objectId: question.id
  }
));
};

  export const getNewestQuestions = async () => {
    const query = new Parse.Query('Questions');
    query.descending('createdAt');
    console.log("hey")
    const results = await query.find();
  
    return results.map((question) => ({
      Author: question.get('Author'),
      Email: question.get('Email'),
      Title: question.get('Title'),
      Text: question.get('Text'),
      Date: question.get('Date'),
      Tags: question.get('Tags'),
      objectId: question.id
    }));
  };

  export const deleteQuestionById = async (objectId) => {
    const questionQuery = new Parse.Query('Questions');
    
    try {
      // Get the question to be deleted
      const questionToDelete = await questionQuery.get(objectId);
  
      // Delete the question
      await questionToDelete.destroy();
  
      // Delete all comments with the same ResponseID (questionId)
      const relatedCommentsQuery = new Parse.Query('Comments');
      relatedCommentsQuery.equalTo('ResponseID', objectId); // Using objectId directly
      const relatedComments = await relatedCommentsQuery.find();
      await Parse.Object.destroyAll(relatedComments);
  
      console.log("Question and related comments deleted successfully");
    } catch (error) {
      console.error("Error deleting question:", error);
      throw error;
    }
  };
  
  
//------------------------Comments------------------------

export const postComment = async(data) => {
    let Comment = new Parse.Object("Comments");
    console.log("hey")
    Comment.set("ResponseID", data.ResponseID)
    Comment.set("Author", data.author)
    Comment.set("Text", data.text)
    Comment.set("Date", new Date())

    await Comment.save();
}

export const getCommentsById = async (responseId) => {
    const query = new Parse.Query('Comments');

    //get comments responding to selected question
    query.equalTo('ResponseID', responseId)
    query.descending('createdAt');

    try {
        const results = await query.find(); 
        return results.map(comment => ({
          Author: comment.get("Author"),
          Text: comment.get("Text"),
          Date: comment.get("Date"),
          ResponseID: comment.get("ResponseID"),
          Likes: comment.get("Likes"),
          DisLikes: comment.get('Dislikes'),
        }));
      } catch (error) {
        console.error('Error fetching comments:', error);
        return []; 
      }
  };


export const getCommentsByAuthor = async (name) => {
    const query = new Parse.Query('Comments');
    query.equalTo('Author', name);
    query.descending('createdAt');

    //get comments
    const results = await query.find();
    console.log(results)
  
    // Retrieve question information for each comment
    const commentsWithQuestionInfo = await Promise.all(results.map(async (comment) => {
      const questionId = comment.get('ResponseID');
      const questionQuery = new Parse.Query('Questions');
      const question = await questionQuery.get(questionId);
  
      return {
        Author: comment.get('Author'),
        Text: comment.get('Text'),
        Date: comment.get('Date'),
        DisLike: comment.get('Dislikes'),
        Like: comment.get('Likes'),
        objectId: comment.id,
        QuestionTitle: question.get('Title'),
        QuestionTags: question.get('Tags'),
      };
    }));
  
    return commentsWithQuestionInfo;
  };
  

export const deleteCommitsById = async (objectId) => {
  const query = new Parse.Query('Comments');
  
  try {
    const commentToDelete = await query.get(objectId);
    
    // Log the question to be deleted for debugging
    console.log("Deleting question:", commentToDelete);

    // Use destroy to delete the object
    await commentToDelete.destroy();

    console.log("Question deleted successfully");
  } catch (error) {
    console.error("Error deleting question:", error);
    throw error;
  }
};
  
  export const getNumberOfCommentsByAuthor = async (name) => {
    const query = new Parse.Query('Comments');
    query.equalTo('Author', name);
    const count = await query.count();

    return count;
};

export const getNumberOfCommentsByResponseID = async (responseID) => {
  const query = new Parse.Query('Comments');
  query.equalTo('ResponseID', responseID);
  const count = await query.count();

  return count;
};
export const getNewestCommentsById = async (responseId) => {
  const query = new Parse.Query('Comments');
  query.descending('Likes');
  query.equalTo('ResponseID', responseId)
  console.log("hey")
  const results = await query.find();

  return results.map(comment => ({
    Author: comment.get('Author'),
    Text: comment.get('Text'),
    Date: comment.get('Date'),
    objectId: comment.id,
    Likes: comment.get("Likes"),
    DisLikes: comment.get('Dislikes'),
  }));
};


export const updateLikesAndDislikes = async (objectId, likeClicked, dislikeClicked) => {
  const query = new Parse.Query('Comments');
  try {
    const commentToUpdate = await query.get(objectId);

    if (likeClicked) {
      commentToUpdate.increment('Likes');
    } else {
      commentToUpdate.increment('Likes', -1);
    }

    if (dislikeClicked) {
      commentToUpdate.increment('Dislikes');
    } else {
      commentToUpdate.increment('Dislikes', -1);
    }

    await commentToUpdate.save();

    console.log("Likes and Dislikes updated successfully");
  } catch (error) {
    console.error("Error updating Likes and Dislikes:", error);
    throw error;
  }
};

export const updateLikeDislikeDB = async (objectId, type, increment) => {
    try {
        const query = new Parse.Query('Comments');
        const commentToUpdate = await query.get(objectId);

        if (increment) {
            commentToUpdate.increment(type, 1);
        }
        else {
            commentToUpdate.increment(type, -1);
        }
        await commentToUpdate.save();
    } catch (error) {
        console.error('Error updating dislikes in the database:', error.message);
    }
}


//------------------------Profile------------------------
export const getLikesAndComments = async(user) => {
  const query = new Parse.Query('Comments');
  query.equalTo('Author', user)

  return query.find().then(results => {
      let count = results.length;

      const sum = results.reduce((accumulator, currentValue) => {
          return accumulator + currentValue.get("Likes");
      }, 0);

      return {"Count": count, "Sum": sum}
  })
}

