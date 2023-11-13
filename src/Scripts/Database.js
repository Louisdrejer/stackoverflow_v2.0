import Parse from 'parse';
//import Parse from 'parse/dist/parse.min.js';

Parse.initialize("hWQnJKPKIOnGgei27IK9spmvIK04hczDanxXJGO9", "lCFF7xGp3gx2JYlIhtN2YknAG2ZLWL7Kk5LCy2Ma");
Parse.serverURL = "https://parseapi.back4app.com/";



//------------------------Questions------------------------

export const postQuestion = async(data) => {
    let Question = new Parse.Object("Questions");

    Question.set("ID", data.ID)
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
        for (let i = 0; i < tags.length; i++) {
            query.contains(tags[i])
        }

        let queryResults = query.find();
        resolve(queryResults)
    });
};

export const getQuestionsByAuthor = async(name) => {
    return new Promise(function(resolve, reject) {
    const query = new Parse.Query('Questions');
    let test = ""

    //for testing
    query.equalTo('Author', name)
    let queryResults = query.find().then(results => {
        results.forEach(Question => {
            console.log(Question.get("Text"))
        })
    });

    resolve(queryResults)
    });
};


//------------------------Comments------------------------

export const postComment = async(data) => {
    let Comment = new Parse.Object("Comments");

    Comment.set("ID", data.ID)
    Comment.set("ResponseID", data.ResponseID) //ID of what the comment is sresponse to
    Comment.set("ResponseTo", data.ResponseTo) //questions or another comment
    Comment.set("Author", data.author)
    Comment.set("Text", data.text)
    Comment.set("Date", new Date())

}

export const getComments = async(response) => {
    const query = new Parse.Query('Comments');

    query.equalTo('ResponseID', response.id)
    query.equalTo('ResponseTo', response.responseTo)
    let queryResults = await query.get();

    return queryResults
}

