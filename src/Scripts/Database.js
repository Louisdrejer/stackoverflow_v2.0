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
  
    return results.map((question) => ({
      Author: question.get('Author'),
      SkillLevel: question.get('SkillLevel'),
    }));
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

export const getQuestionsByTag = async(tags) => {
    return new Promise(function(resolve, reject) {
        const query = new Parse.Query('Questions');
        console.log("hey")
        for (let i = 0; i < tags.length; i++) {
            query.contains(tags[i])
        }

        let result = []
        let queryResults = query.find().then(results => {
            results.map(Question => {
                let tmp = {
                    Author: Question.get("Author"),
                    Title: Question.get("Title"),
                    Text: Question.get("Text"),
                    Date: Question.get("Date"),
                    Tags: Question.get("Tags")
                }
                result.push(tmp)
            })
        });
        console.log(result)

        resolve(queryResults)
    });
};
/**
export const getQuestionsByAuthor = async (name) => {
    return new Promise(function (resolve, reject) {
        const query = new Parse.Query('Questions');
        query.ascending("createdAt");

        let result = []
        query.equalTo('Author', name)
        let queryResults = query.find().then(results => {
            results.map(Question => {
                //return Question.get("Title") + " - " + Question.get("Author")
                let tmp = {
                    Author: Question.get("Author"),
                    Title: Question.get("Title"),
                    Text: Question.get("Text"),
                    Date: Question.get("Date"),
                    Tags: Question.get("Tags")
                }
                result.push(tmp)
            })
        });
        console.log(result)

        resolve(result)
    });
};  */

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
  


  export const getQuestionsByTags = async (...tags) => {
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
  }));
};

  export const getNewestQuestions = async () => {
    const query = new Parse.Query('Questions');
    query.descending('createdAt');
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

  export const deleteQuestionById = async (objectId) => {
    const query = new Parse.Query('Questions');
    
    try {
      const questionToDelete = await query.get(objectId);
      
      // Log the question to be deleted for debugging
      console.log("Deleting question:", questionToDelete);
  
      // Use destroy to delete the object
      await questionToDelete.destroy();
  
      console.log("Question deleted successfully");
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
    query.descending('createdAt');
    query.equalTo('ResponseID', responseId)

    // let result = []
    // let queryResults = query.find().then(results => {
    //     results.map(Question => {
    //         //return Question.get("Title") + " - " + Question.get("Author")
    //         let tmp = {
    //             Author: Question.get("Author"),
    //             Text: Question.get("Text"),
    //             Date: Question.get("Date"),
    //             ResponseID: Question.get("ResponseID"),
    //             Likes: Question.get("Likes"),
    //             DisLikes: comment.get('Dislikes'),
    //         }
    //         result.push(tmp)
    //     })
    // });
    // console.log(result)

    // return queryResults
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
    query.descending('createdAt');
    query.equalTo('Author', name);
    console.log("hey")
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
  
  export const getNumberOfCommentsByAuthor = async (name) => {
    const query = new Parse.Query('Comments');
    query.equalTo('Author', name);
    const count = await query.count();

    return count;
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

export const getNewestCommentsById = async (responseId) => {
    const query = new Parse.Query('Comments');
    query.descending('createdAt');
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