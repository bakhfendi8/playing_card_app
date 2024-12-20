# Card Distribution App 
Theme: Playing cards will be given out to `n(number)` people.

Purpose: Total `52 cards` containing `1-13` of each `Spade(S)`, `Heart(H)`, `Diamond(D)`, `Club(C)` will be
given to `n` people randomly.

## Tech Used
- Laravel 9.52.16 `{backend}`
- ReactJs `{frontend}`
- Tailwind CSS
- Axios for API calling

## Frontend and Backend folder explaination
### Backend folder
The app back-end is used as Laravel Framework. Though the back-end work is very minimum here. Still the framework is used to make it flexible for future improvement along with Routes, MVC capability & understanding presentation.

The algorithm to distribute `52` cards to `n` number of peoples are done in `app/Http/Controllers/CardController.php` file.

API settings in `routes/api.php`.

install the composer in the backend folder.
```
cd backend
composer install
```

### Frontend folder
Front-end is coded with `React.js`, `Tailwind CSS` is used as UI framework. `Axios` is used to call API from backend framework.

All `React.js` front-end code will be found in `frontend` directory.

Run below code in frontend folder.
```
cd frontend
npm install
```

## Run both in single command
Go to the root directory (root project folder) that already have `package.json`.

If you open the `package.json`, you will see below code

```
"scripts": {
    "start": "concurrently \"cd backend && php artisan serve\" \"cd frontend && npm start\""
  },

```
I am using `concurrently` package to allow you to run multiple commands in one terminal window.

Then, run this command to install and run this app.

```
npm install
npm start
```

Now you should be able to access the site based on your `apache` / `nginx` configuration.



