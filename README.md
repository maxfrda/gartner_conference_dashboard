# Gartner Conference Dashboard

This application is meant to mirror Gartner's conference dashboard at https://www.gartner.com/en/conferences/calendar

It uses Ruby on Rails as the backend api and React.js for the front-end.

Currently, the functionality supports showing a list of conferences, viewing a conference, and adding a conference.

## Instructions:

Clone Repo
```
git clone git@github.com:maxfrda/gartner_conference_dashboard.git
```
swith to repo
```
cd gartner_conference_dashboard
```

install gems
```
bundle install
```

create, migrate, and populate database
```
rails db:create && rails db:migrate && rails db:seed
```

start rails server
```
rails s
```

switch to react app in new window
```
cd frontend
```

install packages
```
npm install
```

create .env
```
touch .env
```
```
add REACT_APP_API_BASE_URL=http://localhost:3000/api/v1 to .env
```
Start react server
```
npm start
```


You should see a list of conferences and have the ability to add them

![Gartner](https://github.com/user-attachments/assets/b9bec2f0-d6b0-4f1f-a658-533c80098296)
