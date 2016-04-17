angular
  .module('kilo.controllers')
  .controller('ChatsCtrl', ChatsCtrl);
 
function ChatsCtrl ($scope, $reactive) {
  
  $scope.helpers({
    chats: function () {
      return Chats.find();
    }
  });
  
  // $reactive(this).attach($scope);
  
  // this.showNewChatModal = showNewChatModal;
  this.remove = remove;
  
  // function showNewChatModal() {
  //   NewChat.showModal();
  // }
  
  function remove (chat) {
    Meteor.call('removeChat', chat._id);
  }
  
  // this.helpers({
  //   data() {
  //     return Chats.find();
  //   }
  // });
  
}