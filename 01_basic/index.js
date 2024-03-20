require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const githubData = {
    "login": "ShubhGithub07",
    "id": 127323514,
    "node_id": "U_kgDOB5bNeg",
    "avatar_url": "https://avatars.githubusercontent.com/u/127323514?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/ShubhGithub07",
    "html_url": "https://github.com/ShubhGithub07",
    "followers_url": "https://api.github.com/users/ShubhGithub07/followers",
    "following_url": "https://api.github.com/users/ShubhGithub07/following{/other_user}",
    "gists_url": "https://api.github.com/users/ShubhGithub07/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/ShubhGithub07/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/ShubhGithub07/subscriptions",
    "organizations_url": "https://api.github.com/users/ShubhGithub07/orgs",
    "repos_url": "https://api.github.com/users/ShubhGithub07/repos",
    "events_url": "https://api.github.com/users/ShubhGithub07/events{/privacy}",
    "received_events_url": "https://api.github.com/users/ShubhGithub07/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Shubham Yadre",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 20,
    "public_gists": 0,
    "followers": 1,
    "following": 2,
    "created_at": "2023-03-08T14:52:25Z",
    "updated_at": "2024-01-28T17:23:42Z"
  }

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get('/github', (req,res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
