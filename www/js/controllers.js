angular.module('starter.controllers', [])

.controller('DashCtrl', function ($scope, CloudCode) {
    $scope.load = true;
    CloudCode.executeFunc('getUpdate', function (result) {
        $scope.$apply(function () {
            console.log(result);
            $scope.update = result;
            $scope.load = false;
        });
    });
})

.controller('ChatsCtrl', function ($scope, Chats) {
    Chats.all(function (chats) {
        $scope.chats = chats;
        console.log($scope.chats);
    });
    $scope.remove = function (chat) {
        Chats.remove(chat);
    }
})

.controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})

.controller('FriendsCtrl', function ($scope, Friends) {
    $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function ($scope, $stateParams, Friends) {
    $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function ($scope) {
    $scope.settings = {
        enableFriends: true
    };
});