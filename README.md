# The Car Store

> Harsimar Singh

-----------------------------------------------------------

* The live streaming of [project](https://harsimarsingh8.github.io/The-Car-Store/index.html).
* Project can be viewed at my [Github Repository](https://github.com/harsimarsingh8/The-Car-Store).

------------------------------------------------------------
# About

In this project I made a mobile first, responsive contact form for the people who want to book a car and hook it up to a firebase backend to store submissions in a firebase database. Data submitted by user shows up in Real time.

# Why this Project?

>A basic understanding of Firebase and it's services like Database Management and using it's cloud services to store the website data online.

# How To See the Stored Data

        * Log in!
        * Create an project
        * Go to Console
        * Go to database
        * Go to data
        * Click the collection named messages with auto-generated ID 
        * Data stored is represented in form of JSON

# Prerequisite

### Usually user faces a error while submitting the form of permission

>It might be because of the database in a project in the Firebase Console is not readable/writeable by authenticated users. So,there are different methods to give permission according to the kind of security rules user want to set for the customers.
* Go to Firebase>Console>Project>Database>Rules and add the follwing lines according to type security perimeters you want to set

1. Allow unauthenticated access to your database:
```
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```
2. Allow only authenticated access to your database:
```
{
  "rules": {
    ".read": "auth != null",
    ".write": "auth != null"
  }
}
```
