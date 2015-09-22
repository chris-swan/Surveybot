questionRoster.controller('QuestionsCtrl', function QuestionCtrl($scope, QuestionsFactory) {
  //Create an array of questions
  $scope.questions = QuestionsFactory.questions;
  $scope.QuestionsFactory = QuestionsFactory;
});
