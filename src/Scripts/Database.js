import Parse from 'parse';
//import Parse from 'parse/dist/parse.min.js';

//Parse.initialize("hWQnJKPKIOnGgei27IK9spmvIK04hczDanxXJGO9", "lCFF7xGp3gx2JYlIhtN2YknAG2ZLWL7Kk5LCy2Ma");
Parse.initialize("bCTTcIHsTeO3FRZjfUWQw8BoWEYUSICpeWbm48xy", "WWyJLRsOVJ9do5ixaS8i1e1ye5qHtZksn21zNiTi");
Parse.serverURL = "https://parseapi.back4app.com/";



//------------------------Questions------------------------

export const postQuestion = async(data) => {
    console.log("SENDING POST QUESTION REQUEST")

    let Question = new Parse.Object("Questions");
    Question.set("Title", data.title)
    Question.set("Author", data.author)
    Question.set("Text", data.text)
    Question.set("Tags", data.tags)

    await Question.save();
}

export const getQuestionsByTag = async(tags) => {
    console.log("SENDING GET QUESTIONS BY TAG REQUEST")

    return new Promise(function(resolve, reject) {
        const query = new Parse.Query('Questions');

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

        resolve(queryResults)
    });
};

export const getQuestionsByAuthor = async(name) => {
    console.log("SENDING GET QUESTIONS BY AUTHOR REQUEST")

    return new Promise(function(resolve, reject) {
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

    resolve(result)
    });
};


//------------------------Comments------------------------

export const postComment = async(data) => {
    console.log("SENDING POST COMMENT REQUEST")

    let Comment = new Parse.Object("Comments");

    Comment.set("ID", data.ID)
    Comment.set("ResponseID", data.ResponseID)
    Comment.set("ResponseTo", data.ResponseTo)
    Comment.set("Author", data.author)
    Comment.set("Text", data.text)
    Comment.set("Date", new Date())

    await Comment.save();
}

export const getComments = async(response) => {
    console.log("SENDING GET COMMENTS REQUEST")

    const query = new Parse.Query('Comments');
    query.equalTo('ResponseID', response.id)
    query.equalTo('ResponseTo', response.responseTo)


    let result = []
    let queryResults = query.find().then(results => {
        results.map(Question => {
            //return Question.get("Title") + " - " + Question.get("Author")
            let tmp = {
                Author: Question.get("Author"),
                Text: Question.get("Text"),
                Date: Question.get("Date"),
                ResponseID: Question.get("ResponseID"),
                Likes: Question.get("Likes")
            }
            result.push(tmp)
        })
    });

    return queryResults
}

