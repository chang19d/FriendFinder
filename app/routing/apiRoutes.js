let friendsData = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

    // Create New friends - takes in JSON input
    app.post("/api/friends", function(req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
        var newFriend = req.body;
        var friendsStats = [];
        var userStats = [];
        for(var i = 0; i < friendsData.friends.length; i++){
            friendsStats.push(friendsData.friends[i].scores);
        }
        console.log(newFriend);
        console.log("Array of all friends stats: " + friendsStats);
        friendsData.friends.push(newFriend);

        // console.log(friendsData.friends);
    
        // res.json(newFriend);

        var indexOfMatch = compatibility(newFriend);
        console.log(indexOfMatch);
        // console.log(friendsData.friends[indexOfMatch]);
        res.json(friendsData.friends[indexOfMatch]);
        
        function compatibility(user){
            var totalScores = [];
            var compScore = 0;
            var counter = 0;
            var matchIndex = 0;
            for(var i = 0; i < user.scores.length; i++){
                userStats.push(parseInt(user.scores[i]));
            }
            console.log("User stats: " + userStats);
            
            console.log(totalScores);
            console.log(userStats[0]);
            console.log(friendsStats[0][0]);
            for(var i = 0; i < friendsStats.length; i++){
                for(var j = 0; j < userStats.length; j++){
                    if(Number.isInteger(counter/10) && counter > 0){
                        totalScores.push(compScore);
                        compScore = 0;
                        counter = 0;
                    }
                    counter++;
                    var diff = Math.abs(friendsStats[i][j]-userStats[j]);
                    compScore = compScore + diff;
                }
            }
            totalScores.push(compScore);
            console.log(totalScores);
            var lowestScore = totalScores[0];
            // console.log(lowestScore);
            for(var i = 1; i < totalScores.length; i++){
                if(totalScores[i] < lowestScore){
                    lowestScore = totalScores[i];
                }
            }
            for(var i = 0; i < totalScores.length; i++){
                if(totalScores[i] == lowestScore){
                    matchIndex = i;
                }
            }
            // if(totalScores[1] < lowestScore){
            //     lowestScore = totalScores[1];
            // }
            // if(totalScores[2] < lowestScore){
            //     lowestScore = totalScores[1];
            // }
            // if(totalScores[3] < lowestScore){
            //     lowestScore = totalScores[1];
            // }
            // if(totalScores[4] < lowestScore){
            //     lowestScore = totalScores[1];
            // }
            // if(totalScores[5] < lowestScore){
            //     lowestScore = totalScores[1];
            // }
            // console.log(matchIndex);
            return matchIndex;
        }
    });
}