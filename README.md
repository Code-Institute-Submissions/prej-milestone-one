# The Monkees Band Website

Milestone Project One: User-Centric Frontend Development - Code Institute

This is the website for the rock band, The Monkees. The page highlights a few of the bands greatest hits, as well as information relating to the band members. As the band are still touring, it features a section for enquires about their availability.

A live version can be found on [Github Pages](https://prejudice182.github.io/prej-milestone-one/)

## UX

When I was laying out this project, I wanted to make it as simple as possible, so I chose a one page layout, with different sections for different elements.

- As a fan of the band, I want to be able to see pictures of the band and get more information about them.
- As a fan of the band, I would like to be able to listen to their songs and watch them perform.
- As a client, I would like to be able to hear what they sound like and check their availability.

I mocked up an early desktop-first layout using Balsamiq, which can be found [here](https://github.com/Prejudice182/prej-milestone-one/blob/master/assets/mockups/MilestoneProjectOne.png).

## Features

The page uses the Scrollspy feature from Bootstrap, to highlight which part of the page is active on the navbar. It also has jQuery function to enable tooltips, and to have smooth scrolling when an anchor is selected.

### Existing Features

- Carousel - allows fans to see pictures of the band, which they can scroll through.
- Information - shows fans what the bandmembers look like, and give them the option to find out more by clicking on their pictures.
- Songs - let fans and prospective clients hear what they sound like, by using the embedded player
- Video - highlights the latest music video the band has released, showing what they might be like playing live.
- Contact - lets clients get in touch with the band, by filling in a form with the relevant information.

### Features Left to Implement

- Calender showing availability
- Upcoming shows

## Technologies Used

- HTML5
    - Used for the structural elements of the site
- CSS3
    - Used to style the HTML elements
- [Bootstrap (4.3)](https://getbootstrap.com/)
    - Used to give access to a multitude of helper classes for CSS
- [jQuery (3.3.1)](https://jquery.com/)
    - Used for DOM manipulation

## Testing

For fans of the band, we provided a section where they can see a headshot of each bandmember and if they click that, they can read some tidbits about them. We also provided an audio and video sections, where a sample of the bands back catalogue is available to listen to or watch. Finally, a contact form was added, where clients can provide some information and a call back will be arranged with them.

If you submit the form without any fields filled in, it will indicate this to the user. If an invalid email address is detected, that too will throw a warning to the user, asking them to correct it. Finally, if no message is input, the form will ask that the field be filled out. If all fields are filled and valid, the form will go through.

Clicking the links in the footer will open them in a new tab/window depending on user preferences due to using the attribute `target="blank"`. The attribute `rel="noopener"` was added after reading the benefits of doing so [here](https://jakearchibald.com/2016/performance-benefits-of-rel-noopener/).

The links in the navbar will smoothly scroll down to the anchor the user has selected, with the return to top anchor doing the same in reverse. Also the current section is highlighted in the navbar by the Scrollspy effect.

The site was tested across 2 browsers, Google Chrome and Mozilla Firefox. I used the devtools in both browsers to check for compatibility issues on mobile devices. This lead to styling changes when using smaller devices as certain elements are too small or large to display correctly. I also checked the mobile view on my personal Android device, Motorola e5.

## Deployment

This site is hosted on Github Pages, deployed from the master branch. Any changes committed to this branch will update this site accordingly.

To clone this repository to run locally, you can run the following command:

```git clone https://github.com/Prejudice182/prej-milestone-one.git```

## Credits

### Content

- The band information was copied from [this site](https://www.fakepersongenerator.com/user-biography-generator)
- The smooth scroll function was copied from [W3Schools](https://www.w3schools.com/howto/howto_css_smooth_scroll.asp)
- The back to top function was copied from [this site](https://codepen.io/matthewcain/pen/ZepbeR)
- All other content was written by myself

### Media

- Some photos in this site were obtained from the [suggested repository](https://github.com/Code-Institute-Org/project-assets)
- Album art was taken from Wikipedia, and believed to qualify under fair use, due to nonprofit educational use
- Carousel images taken from Google Search, and believed to qualify under fair use, due to nonprofit educational use

### Acknowledgements

- I received inspiration for this site from visiting various band sites.