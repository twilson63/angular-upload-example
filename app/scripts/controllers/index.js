app.controller('Index', function($scope, upload) {
  // $('#logo').bind('change', function(e){
  //   var threeMeg = 3 * 1024 * 1024;
  //   console.log(e.target.files[0].size < threeMeg);
  // });
  $scope.upload = function() {
    $scope.status = 'Uploading...';
    upload.submit('logoForm', function(content) {
      $('#images').prepend('<img src="/' + content + '">');
      $scope.status = 'Completed';
      // $scope.$apply(function() {
      //   
      // });
    });
  }
});