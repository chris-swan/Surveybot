questionRoster.controller('QuestionsCtrl', function QuestionCtrl($scope, QuestionsFactory) {
  //Create an array of questions
  $scope.answers = QuestionsFactory.answers;
  $scope.QuestionsFactory = QuestionsFactory;
});
