# Part 3: Adding CSS & implementing responsive web design

1. Create a file called `styles.css` in the same directory as `index.html`
2. Add the following line **before** the enclosing `</head>` tag in `index.html`

```html
<link rel="stylesheet" href="styles.css" />
```

**Element Selector**

If we add this into `styles.css`, all of the text inside the enclosing `p` elements will be italicized

```css
p {
  font-style: italic;
}
```

- `p` is the selector - this is the element we want to stylize
- each of the lines within the curly brackets `{ }` is a particular style that will be applied to the element selected (`p` in this case)

<img width="735" alt="Screen_Shot_2020-08-06_at_4 41 28_PM" src="https://user-images.githubusercontent.com/38872354/91757845-dda45900-eb83-11ea-9b74-ddf3db460fbb.png">

While adding a CSS selector will select all HTML elements with a selected attribute, this may not be what we want. We will instead give the `p` element a specific identity that we can style. We will do this by adding a `class` attribute.

**Class Selector**

Classes define particular styles for all elements that share the same class name.

```css
.cool-class {
  font-weight: bold;
  color: green;
}
```

Corresponding HTML code if we wanted to use this class in HTML

```css
<h1 class="cool-class">Hemlo frens</h1>
```

<img width="420" alt="Screen_Shot_2020-08-06_at_4 42 30_PM" src="https://user-images.githubusercontent.com/38872354/91757850-de3cef80-eb83-11ea-9122-10013450f356.png">

**ID Selector**

Similar to class selectors, we can set an ID to an HTML element using the id attribute. How this is declared in CSS:

```css
#cool-id {
  color: blue;
}
```

Using this id in an HTML element

```css
<p id="cool-id">much amaze</p>
```

😎 **_Pro tip_**

You might think that ID and class do the exact same thing - you're not wrong! They just have different usages

- ID: for unique instances of an element (e.g. one unique button style that is different from the others)
- class: for repetitive cases (e.g. items listed in bullet points under the same list)

**CSS Grid**

CSS grid is used to structure your webpage into columns and rows

- first we define how the rows and columns are structured in terms of percentages
- for each element we then decide on which cell to put it in

This is important, because we need to make sure that our content is responsive across different screen sizese

Example of 2 x 3 table

|———|———|———|

|———|———|———|

|———|———|———|

To make this table, we do the following

```css
.grid-table {
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: auto auto auto;
}
```

- `display: grid` tells the browser that this is a grid container
- `grid-template-rows` and `grid-template-columns` set the dimensions for rows and columns respectively
- `auto` width/column means our grid is flexible - this grid could end up looking very asymmetric depending on the content

HTML

```css
<div class="grid-table">
<div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
<div>5</div>
<div>6</div>
</div>
```

😎 **_Pro tip_**

You can use percentages/pixels instead of auto, e.g.:

- 50% 50%
- 300px 300px
- 4rem 4rem

**Mobile Responsiveness**

A three-column display on a normal desktop screen may not necessarily look good in a mobile display. When building your site, it's important to design for cases where the user is not viewing your site from a desktop browser, but from their mobile device instead.

**Media Queries**

A media query is a block of CSS code that only runs if a given condition `@media (<condition>)` is met

Example

```css
.grid {
  display: grid;
  grid-template-columns: 100%;
}

@media (min-width: 600px) {
  // breakpoint 1: run this code if the minimum width of screen is 600px
  .grid {
    grid-template-columns: 50% 50%;
  }
}

@media (min-width: 900px) {
  // breakpoint 2: run this code if the screen is at least 900px wide
  .grid {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
```

- `grid-template-column` sets either one column of `100%`, two columns of `50% 50%`, or three columns of `1fr 1fr 1fr` (three equal-sized columns)
- `display: grid` and `grid-template-columns: 100%` applies to both media queries, so we don't need to add them again

### Positioning our portfolio

1. We want to add some margins around the content of our portfolio to give it more space to "breathe". We'll create a `container` class

```html
<body>
  <div class="container">
    <!-- all of our existing content goes here -->
  </div>
</body>
```

```css
.container {
  max-width: 840px;
  margin: 0 auto;
}
```

<img width="1278" alt="Screen_Shot_2020-08-06_at_4 45 57_PM" src="https://user-images.githubusercontent.com/38872354/91757853-ded58600-eb83-11ea-9b9e-4f951d069902.png">

- `margin: 0 auto;` means no margin for top-bottom, and auto margins for left-right

2. Now we'd like to center-align our intro headline

- Let's make a new class called `intro`

```html
<div class="intro">
  <!-- content goes here -->
</div>
```

```css
.intro {
  text-align: center;
}
```

<img width="1278" alt="Screen_Shot_2020-08-06_at_5 02 06_PM" src="https://user-images.githubusercontent.com/38872354/91757856-df6e1c80-eb83-11ea-90d6-ea06d639c2b5.png">

3. Let's arrange the about portionto have two columns with the first half on the left and second half on the right

```html
<div class="about-grid">
  <div class="about-section">
    <h3>I love nwPlus. Very amaze.</h3>
  </div>
  <div class="about-section">
    <h3>Some of my interests include:</h3>
    <ul class="about-list">
      <li>Doggos</li>
      <li>Dogspotting</li>
      <li>Smol puppers</li>
    </ul>
  </div>
</div>
```

```css
.about-grid {
  display: grid;
  grid-template-columns: 50% 50%;
}

.about-section {
  text-align: center;
  text-decoration: none;
}

.about-list {
  list-style: none;
  padding: 0;
}
```

<img width="1272" alt="Screen_Shot_2020-08-06_at_5 19 18_PM" src="https://user-images.githubusercontent.com/38872354/91757857-df6e1c80-eb83-11ea-8db2-b1f189f8dcdb.png">
<img width="1280" alt="Screen_Shot_2020-08-06_at_5 20 33_PM" src="https://user-images.githubusercontent.com/38872354/91757858-e006b300-eb83-11ea-9603-b5be3cb6d866.png">

4. To simulate a mobile screen, we can do cmd+(or ctrl)shift+m. Notice how the content looks very disproportional, like a zoomed-out version of the desktop site

<img width="458" alt="Screen_Shot_2020-08-06_at_5 21 43_PM" src="https://user-images.githubusercontent.com/38872354/91757859-e006b300-eb83-11ea-90c8-ca9f2a68f7ac.png">
<img width="446" alt="Screen_Shot_2020-08-06_at_5 24 53_PM" src="https://user-images.githubusercontent.com/38872354/91757862-e09f4980-eb83-11ea-9fb7-f4836dc2ae75.png">

- we can make our site more responsive by instructing our browser to show the webpage in mobile size
- Let's add this `meta` tag before the closing `head` tag

```html
<head>
  <!-- existing content in the <head> element -->
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
```

- `meta` allows you to control the dimensions and scaling of a page
- `width=device-width` sets the width of page to follow the screen-width of the device
- `initial-scale=1.0` sets the initial zoom level when the page is first loaded

<img width="455" alt="Screen_Shot_2020-08-06_at_5 35 41_PM" src="https://user-images.githubusercontent.com/38872354/91757863-e137e000-eb83-11ea-8cce-9ffd46e54a2f.png">

5. Another thing we'd like to do is have the about sections one below another on mobile devices. Let's write a media query for that, defining the breakpoint as `480px`

```css
@media (max-width: 480px) {
  .about-grid {
    grid-template-columns: 100%;
  }
}
```

<img width="353" alt="Screen_Shot_2020-08-06_at_5 39 27_PM" src="https://user-images.githubusercontent.com/38872354/91757864-e137e000-eb83-11ea-9e58-c2107c1ea234.png">
<img width="685" alt="Screen_Shot_2020-08-06_at_5 40 09_PM" src="https://user-images.githubusercontent.com/38872354/91757866-e1d07680-eb83-11ea-8957-76e425b34d52.png">

6. Let's make similar changes to the projects section - 2x2 on desktop, 4x1 on mobile

```html
<div>
  <h3 class="heading">My Pawjects</h3>
  <div class="projects-grid">
    <img class="project-image" src="https://via.placeholder.com/300" />
    <img class="project-image" src="https://via.placeholder.com/300" />
    <img class="project-image" src="https://via.placeholder.com/300" />
    <img class="project-image" src="https://via.placeholder.com/300" />
  </div>
</div>
```

```css
.heading {
  text-align: center;
}

.projects-grid {
  display: grid;
  grid-template-columns: 50% 50%;
}

.project-image {
  justify-self: center;
  padding: 4%;
}
@media (max-width: 650px) {
  .projects-grid {
    grid-template-columns: 100%;
  }
}
```

<img width="1270" alt="Screen_Shot_2020-08-06_at_5 47 29_PM" src="https://user-images.githubusercontent.com/38872354/91757867-e1d07680-eb83-11ea-860f-0bc4b9f6b03d.png">
<img width="336" alt="Screen_Shot_2020-08-06_at_5 47 49_PM" src="https://user-images.githubusercontent.com/38872354/91757869-e2690d00-eb83-11ea-91f0-162f72af5888.png">

7. Let's split the contact section as well, by 30-70

```html
<div>
  <h3 class="heading">Contacc me</h3>
  <div class="contact">
    <div class="links">
      <h4>Links</h4>
      <ul class="links-list">
        <!-- List items -->
      </ul>
    </div>
    <div>
      <!-- Contact form -->
    </div>
  </div>
</div>
```

```css
.contact {
  display: grid;
  grid-template-columns: 30% 70%;
}

.links {
  justify-self: center;
}

.links-list {
  list-style: none;
  padding: 0;
}

@media (max-width: 650px) {
  .links-and-contact {
    grid-template-columns: 100%;
  }
}
```

<img width="750" alt="Screen_Shot_2020-08-06_at_6 15 16_PM" src="https://user-images.githubusercontent.com/38872354/91758139-5b686480-eb84-11ea-9a36-ddd89bb93bd2.png">

‼️ **Challenge** ‼️
