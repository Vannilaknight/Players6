angular.module('app').value('p6Toastr', toastr);

angular.module('app').factory('Notifier', function(p6Toastr) {
  return {
    notify: function(msg) {
      p6Toastr.success(msg);
      console.log(msg);
    }
  }
})