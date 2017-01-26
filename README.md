# A(nother) Smart Mirror

Ruby version 2.3.3
Rails version 5.0.1
React for front-end

Database (postgres) included for stretch goals

MVP goals: 

-geolocation functionality for localized weather
-displays:
    -Weather
    -Time
-CSS positioning via flexboxes


Stretch goals:

-show 3 or 5 day forecast for weather
-show latest emails or news
-add touch functionality for:
  
    -expanding weather information
    -cycling through saved cities for times
    -expanding email integration
    -expanding news integration
    -media player controls (Spotify?)
-deploy on heroku so multiple browsers can simply go to the website and show a Smart Mirror display
    -most likely will need to integrate a check for flexbox compatibility with the browser (Modernizr?)

APIs used: 

Google Maps Api for reverse geocoding (human readable location from coordinates)
OpenWeatherMap for weather

Fonts used:

-Weather Icons is a font used to show the current weather as, well, an icon. It was created by Erik Flowers, at https://github.com/erikflowers/weather-iconsw 