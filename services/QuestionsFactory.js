questionRoster.factory('QuestionsFactory', function QuestionsFactory() {
  var factory = {};
  factory.questions = [];

  factory.addAnswer = function() {
    var answer = { answer: factory.answerOne, answer: factory.answerTwo, answer: factory.answerThree}
    factory.questions.push(answer)
    factory.answerOne = null;
    factory.answerTwo = null;
    factory.answerThree = null;
  };

  factory.deleteAnswer = function(answer) {
    var index = factory.questions.indexOf(question);
    factory.questions.splice(index, 1);
  }

  return factory;
});
