# FriendFinder
A simple dating app. This full-stack site will take in results from your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

##App Overview
1. **server.js:** JS file to handle initializing an express server and require routes from htmlRoutes.js and apiRoutes.js

1. **friends.js:** JS file used to hold data for potential matches. Data is stored in an array of objects.

1. **apiRoutes.js:** JS file that gets data from our api, and posts to it. The post function contains the logic for comparing matches to user scores, and returning who is the best match given the smallest difference in scores.

1. **htmlRoutes.js:** JS file that handles which html pages are displayed for different routes.

1. **home.html:** Landing page of the website, utilizing basic bootstrap. 

1. **survey.html:** Survey page that posts the user's form submission to the friends API and returns information on the best match in a boostrap modal.