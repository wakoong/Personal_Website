# PUTMEINCOACH

[http://www.kamilgrzybek.com/design/grasp-explained/](http://www.kamilgrzybek.com/design/grasp-explained/)

**1. Firebase**

**Structure your database (JSON Tree) - Avoid nesting!!!**

: Make sure to spend enough time on designing your data structure so that your app can scale. A structured database will allow you to access data with ease.



 Data required on the outer-most level of the tree: **users, teams**

```json
{
  "coaches": {
    // username
    "coachid1": {
    	"name": "Woosik Koong",
      "email": "woosik.koong@gmail.com",
      "pw": "some password",
      "profileImg": "img",
      "teams": {
        "Woodside Priory HS": true, 
        "AAU": true
      } 
    }
    ...
  },
  "players": {
     // username
  	"player1": {
      "name": "Woosik Koong",
      "email": "woosik.koong@gmail.com",
      "pw": "some password",
      "profileImg": "img.jpg",
      "teams": {
        "Woodside Priory HS": true, 
        "AAU": true
      }
    }, 
    ...
  },
  "teams": {
    "Woodside Priory HS": {
      "coach": true, // ???
      "players": {
        "userid1": true,
        "userid2": true,
        "userid3": true,
        "userid4": true,
        ...
      },
      "myplays": {
        "play1": {
        	"name": "UCLA.mov",
          "positions": {
            "one": ["userid1"],
            "two": ["userid2"],
            "three": ["userid3"],
            "four": ["userid4"],
            "five": ["userid5", "userid6"],
          }
        },
        "Full court press": {
          
        }
      }
    },
    "AAU": {
      
    }
  },
}
```



**2. Authentication**

Retrieve the current user by setting a listener on the Auth object 

```swift
handle = Auth.auth().addStateDidChangeListener { (auth, user) } in 
	// ...
}

//OR

if Auth.auth().currentUser != nil {
  // User is signed in.
} else {
  // No user is signed in.
}
```

