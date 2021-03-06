#   PROJECT UV!

## Simply UV
An interactive web page to allow the user to input there current location and check the maximum Ultra Violet level for that location (at solar noon).
Along with the maximum expected UV for there chosen location there is also a simple guide to the amount of SPF that should be applied.

## Deployment Link

This link will allow you to run the page on your chosen platform;
https://bullseyebill.github.io/suntan_safety/

## Running the site

As you load the main page you will see that we have an input box for you to type in your current location or even to check a remote location
(if you are checking  the UV for somewhere else)
The text box will remind you that it does require you to 'Please enter a location'

Upon completing this task you will be given a confirmation of your location and also the Maximum UV expected at that location.

## The UX Process

My initial design and thought process was to bring to attention the lack of general public knowledge, especially in the UK on how damaging 
Ultra Violet light can be to the skin.
Having had an operation myself to remove  UV damaged skin on my face I have always been aware of the risks of sunlight.
To this end I discovered that the UK is poorly represented with very little 'easy to access' data on sun protection.
During my research I looked at several sources of information such as;

https://www.who.int/uv/faq/protect/en/

https://www.cancer.org/healthy/be-safe-in-sun/uv-protection.html

https://www.nhs.uk/live-well/healthy-body/sunscreen-and-sun-safety/

https://www.epa.gov/sunsafety/uv-index-scale-0

As you click through the links what you will see is that most sites are very factual and quite scientific in their
information, and none of them actually allow you to find out what the level is going to be where you are (or going)
There is also a lot of information from commercial sites who are mostly promoting their own products.
The only really true way to check the UV is via some weather sites but again the data is buried under sveral pages!

## Simplicity - Simply UV

So folllowing along with designing a simple to use tool the name "Simply UV" was created and then I ran several modals
to understand the best way for a user to retrieve the key information that they required.

### Design

The following images will give you an idea on how I developed my thoughts on page layout - I like using the whiteboards
as I enjoy the flexibility and the fact that they are always visible alongside my desk!

![IMG_1920](https://user-images.githubusercontent.com/38462360/63028442-bad6d200-bea6-11e9-998a-ebfac59ff119.JPG)
![IMG_1973](https://user-images.githubusercontent.com/38462360/63028443-bad6d200-bea6-11e9-9a8c-771d020744df.JPG)
![IMG_2137](https://user-images.githubusercontent.com/38462360/63028445-bad6d200-bea6-11e9-83dd-b6266ebb9928.jpg)

## Tech Used

I relied upon the wealth of resources that are available to the developer, these included my subscription to "Web Designer"
a monthly magazine with great articles on a variety of development tools etc.
My site also uses what I would call the basic mainstays of web development;

https://fonts.google.com/

https://www.bootstrapcdn.com/

https://cdnjs.com/libraries

https://ajax.googleapis.com/ajax/libs/d3js/5.9.0/d3.min.js

### Main API's

https://cloud.google.com/maps-platform/

https://www.openuv.io/

## Testing

Several platforms where accessed during the site development including, but not restricted to;

https://validator.w3.org/

https://www.freeformatter.com/html-validator.html

### How I tested various parts of my site

Using AWS I ran several unique repositories which contained elements of the sites build, this allowed me to test each section prior to building them into the main script

![aws_1](https://user-images.githubusercontent.com/38462360/63030109-b19b3480-bea9-11e9-8ac6-5753b72bea27.png)
![aws_2](https://user-images.githubusercontent.com/38462360/63030110-b19b3480-bea9-11e9-958a-363916b1c652.png)
![aws_6](https://user-images.githubusercontent.com/38462360/63030111-b19b3480-bea9-11e9-9886-344b7f44f4a9.png)
![aws_5](https://user-images.githubusercontent.com/38462360/63030112-b233cb00-bea9-11e9-9c61-2adb326a9980.png)
![aws_4](https://user-images.githubusercontent.com/38462360/63030113-b233cb00-bea9-11e9-98df-fb2a25b004ff.png)
![aws_3](https://user-images.githubusercontent.com/38462360/63030114-b233cb00-bea9-11e9-9025-8f56fd177250.png)


Also using console.log I was able to check that I was retrieving the correct information in JSON, such as Location - from maps
(lat/lng) Then having passed this to the second API I could retrieve the UV data

![console_1](https://user-images.githubusercontent.com/38462360/63032422-aea24300-bead-11e9-8529-6dab39809ba2.png)
![console_2](https://user-images.githubusercontent.com/38462360/63032423-af3ad980-bead-11e9-941a-1e53149b4ede.png)
![console_3](https://user-images.githubusercontent.com/38462360/63032424-af3ad980-bead-11e9-9f27-1140e2765481.png)

Several runs at location data retrieval;

![console_4](https://user-images.githubusercontent.com/38462360/63032428-af3ad980-bead-11e9-96c3-c2543fb0ebd9.png)

Most of the code was developed on Visual Studio Code


## Future Developments

I had already during the project started to trial having an animated sun (svg) as the point at which the UV data would be presented.
Initial trials where good but whilst working on the 'mobile first' approach I had several challenges to get the svg to scale!
Here's a link to the animation...

https://bullseyebill.github.io/ani_sun/

This is something I feel would enhance the UX with Simply UV along with several other minor changes including more details on best SPF etc - watch this space!


## Credits

I'll start with Jesse James Garret;

http://www.jjg.net/about/ (although his page is somewhat interesting!)

Web Designer magazine  - for periodical inspiration

Code pen again for a great resource of ideas

https://codepen.io/

My mentors and....

My wife for her patience...


     
     
     
     
    
