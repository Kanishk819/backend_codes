// console.log("Kanishk Shukla");

require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('Hello Twitter!')
})

app.get('/login',(req,res) => {
    res.send('<h1>Kanishk Shukla</h1>')
})
//No hot reload like react which injects edited files at runtime so we can use nodemon 

const githubData = {
  "login": "Kanishk819",
  "id": 109857164,
  "node_id": "U_kgDOBoxJjA",
  "avatar_url": "https://avatars.githubusercontent.com/u/109857164?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Kanishk819",
  "html_url": "https://github.com/Kanishk819",
  "followers_url": "https://api.github.com/users/Kanishk819/followers",
  "following_url": "https://api.github.com/users/Kanishk819/following{/other_user}",
  "gists_url": "https://api.github.com/users/Kanishk819/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Kanishk819/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Kanishk819/subscriptions",
  "organizations_url": "https://api.github.com/users/Kanishk819/orgs",
  "repos_url": "https://api.github.com/users/Kanishk819/repos",
  "events_url": "https://api.github.com/users/Kanishk819/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Kanishk819/received_events",
  "type": "User",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 10,
  "public_gists": 0,
  "followers": 2,
  "following": 1,
  "created_at": "2022-07-23T12:01:38Z",
  "updated_at": "2024-03-05T07:15:23Z"
}


app.get('/github',(req,res) => {
  res.json(githubData);
})



/** Backend ko production mein deploy karte samay saare codes ko deploy nahi kiya jaata kyuki sensitive data bhi ho sakta hai isliye dotenv exact output production mein leke jaayega*/
/** .env file mein PORT define karke production ready bana do  */
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})