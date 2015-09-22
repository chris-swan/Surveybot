questionRoster.factory('QuestionsFactory', function QuestionsFactory() {
  var factory = {};
  factory.answers = [];

  factory.addAnswer = function() {
    var answer = {
      answerOne: factory.answerOne,
      answerTwo: factory.answerTwo,
      answerThree: factory.answerThree
    };

    factory.answers.push(answer);
    factory.answerOne = null;
    factory.answerTwo = null;
    factory.answerThree = null;
  };


  factory.deleteAnswer = function(answer) {
    var index = factory.answers.indexOf(answer);
    factory.answers.splice(index, 1);
  }

  return factory;
});
