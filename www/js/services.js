angular.module('starter.services', [])

.factory('Chats', function () {
    // Might use a resource here that returns a JSON array
    var chats;
    // Some fake testing data
    /*var chats = [{
      id: 0,
      name: 'Ben Sparrow',
      lastText: 'You on your way?',
      face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
    }, {
      id: 1,
      name: 'Max Lynx',
      lastText: 'Hey, it\'s me',
      face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
    }, {
      id: 2,
      name: 'Andrew Jostlin',
      lastText: 'Did you get the ice cream?',
      face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
    }, {
      id: 3,
      name: 'Adam Bradleyson',
      lastText: 'I should buy a boat',
      face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
    }, {
      id: 4,
      name: 'Perry Governor',
      lastText: 'Look at my mukluks!',
      face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
    }];*/
    var chatsResult;
    return {
        all: function (cb) {
            console.log('fetching results');

            var Chats = Parse.Object.extend("Chats");
            var query = new Parse.Query(Chats);
            query.find({
                success: function (results) {
                    alert("Successfully retrieved " + results.length + " scores.");
                    chatsResult = results;
                    console.log(chatsResult);
                    cb(chatsResult);
                },
                error: function (error) {
                    alert("Error: " + error.code + " " + error.message);
                }
            });
        },
        remove: function (chat) {
            chats.splice(chats.indexOf(chat), 1);
        },
        get: function (chatId) {
            console.log(chatId);
            var chats = chatsResult;
            for (var i = 0; i < chats.length; i++) {
                if (chats[i].id === chatId) {
                    return chats[i];
                }
            }
            return null;
        }
    }
})

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function () {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var friends = [{
        id: 0,
        name: 'Ben Sparrow',
        notes: 'Enjoys drawing things',
        face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
        id: 1,
        name: 'Max Lynx',
        notes: 'Odd obsession with everything',
        face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
        id: 2,
        name: 'Andrew Jostlen',
        notes: 'Wears a sweet leather Jacket. I\'m a bit jealous',
        face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
        id: 3,
        name: 'Adam Bradleyson',
        notes: 'I think he needs to buy a boat',
        face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
        id: 4,
        name: 'Perry Governor',
        notes: 'Just the nicest guy',
        face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];


    return {
        all: function () {
            return friends;
        },
        get: function (friendId) {
            // Simple index lookup
            return friends[friendId];
        }
    }
})

.factory('CloudCode', function () {
    return {
        executeFunc: function (funcName, cb) {
            console.log('Calling ' + funcName + ' on cloud code');
            Parse.Cloud.run(funcName, {}, {
                success: function (result) {
                    console.log('got result: ' + result);
                    cb(result);
                },
                error: function (error) {
                    console.log(error);
                    cb(error);
                }
            });
        }
    }
});