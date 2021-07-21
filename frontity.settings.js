const settings = {
  "name": "verlion",
  "state": {
    "frontity": {
      "url": "https://eyeofecho.com/",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "portfolio",
              "/portfolio/"
            ],
            [
              "Travel",
              "/category/travel/"
            ],
            [
              "Japan",
              "/tag/japan/"
            ],
            [
              "About Us",
              "/about-us/"
            ]
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": true
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://eyeofecho.com/",
          "postTypes": [
            {
              "type": "portfolio", // type slug
              "endpoint": "portfolio",
              "archive": "/portfolio"
            }
          ],
        },


      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings