# Part 4: Applying advanced styling

**Applying placeholders with your own images**

1. To better organize our images, let's make a file called `images` in the root level of our application
2. Download the images: <link to zip>
3. Replace the profile picture `<img src="https://via.placeholder.com/150" />` with

   ```html
   <img src="images/profile-picture.jpg" />
   ```

4. Add some styling to the image

   ```css
   .profile-picture {
     border-radius: 50%;
     width: 150px;
     height: 150px;
     /* offset-x | offset-y | blur-radius | spread-radius | color */
     box-shadow: 0 4px 6px 0 rgba(34, 60, 80, 0.16);
     transition: all ease-in-out 0.2s;
   }

   .profile-picture:hover {
     /* offset-x | offset-y | blur-radius | spread-radius | color */
     box-shadow: 0 8px 12px 0 rgba(34, 60, 80, 0.16);
   }
   ```

   - `border-radius` sets the border radius of the image
   - `box-shadow` adds shadows to the image. Check [Mozilla web docs](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) for more details on the syntax
   - `transition`
     - `all` means we want to animate all aspects of the image
     - `ease-in-out` is a timing function that describes the speed of the animation. In this case we want the animation to run for `.2` seconds
   - `hover` sets properties for when we hover over the image, giving users a more visual feedback

       <img width="1277" alt="Screen_Shot_2020-08-06_at_6 57 13_PM" src="https://user-images.githubusercontent.com/38872354/91758181-6b804400-eb84-11ea-8111-f0931fba92f7.png">

5. Replace the project placeholders with the given images (or your own)

   ```html
   <h3 class="heading">Projects</h3>
   <div class="projects-grid">
     <img class="project-image" src="images/project-1.jpg" />
     <img class="project-image" src="images/project-2.jpg" />
     <img class="project-image" src="images/project-3.jpg" />
     <img class="project-image" src="images/project-4.jpg" />
   </div>
   ```

   <img width="1279" alt="Screen_Shot_2020-08-06_at_6 58 04_PM" src="https://user-images.githubusercontent.com/38872354/91758184-6cb17100-eb84-11ea-86fc-4e194d80fc96.png">

**Setting custom fonts**

1. We will be using Roboto Mono for headings and Noto Sans for body text, free for download at [https://fonts.google.com/](https://fonts.google.com/)
2. To use the fonts, add this snippet into the `head` section

   ```html
   <link
     href="https://fonts.googleapis.com/css?family=Noto+Sans|Roboto+Mono&display=swap"
     rel="stylesheet"
   />
   ```

3. Then we want to add these to the `styles.css` for the default body and heading fonts

   ```css
   body {
     font-family: 'Noto Sans', sans-serif;
   }

   h1,
   h2,
   h3,
   h4 {
     font-family: 'Roboto Mono', monospace;
   }
   ```

   Now let's refresh the page! Wow ✨

   <img width="1279" alt="Screen_Shot_2020-08-06_at_7 08 06_PM" src="https://user-images.githubusercontent.com/38872354/91758194-71762500-eb84-11ea-9499-633a204bc309.png">

4. Let's add some footer fixes

   ```html
   <div>
     <h3 class="heading">Contacc</h3>
     <div class="contact">
       <div class="links">
         <h4 **class="form-heading" **>Links</h4>
         <ul class="links-list">
           <!-- List content -->
         </ul>
       </div>

       <div>
         <form action="#">
           <label for="email">
             <h4 class="form-heading">Email</h4>
             <input type="email" id="email" placeholder="Enter your email" />
           </label>
           <label for="message">
             <h4 class="form-heading">Messages</h4>
             <textarea id="message">Your Message</textarea>
           </label>
           <div class="submit-button-wrapper">
             <input type="submit" valid="Send Message" />
           </div>
         </form>
       </div>
     </div>
   </div>
   ```

   ```css
   form input,
   textarea {
     padding: 5px;
     border-radius: 5px;
     width: 240px;
   }

   form {
     width: 250px;
     margin: 0 auto;
   }

   form input[type='submit'] {
     width: 250px;
   }

   .submit-button-wrapper {
     margin: 8px 0;
   }

   .form-heading {
     margin-bottom: 8px !important;
   }
   ```

   <img width="1271" alt="Screen_Shot_2020-08-06_at_7 33 09_PM" src="https://user-images.githubusercontent.com/38872354/91758195-720ebb80-eb84-11ea-9ffc-131dfef40b71.png">

**Change Background Colour**

Let's add a background color and some separation of content

```css
body {
  background-color: #e2f8ec;
}

.container > div {
  margin: 20px auto;
}

hr {
  border: 0;
  height: 1px;
  background-color: #f2fff8;
}
```

Then add this before and after the `about-grid`

```html
<hr />
<div class="about-grid">
  <!-- About content -->
</div>
<hr />
```

<img width="1277" alt="Screen_Shot_2020-08-06_at_7 35 03_PM" src="https://user-images.githubusercontent.com/38872354/91758198-72a75200-eb84-11ea-8f53-4decf2c4d7d4.png">

**Change text color**

```css
body {
  color: #333333;
}
```

`#333333` is a slightly lighter and more gentle shade of black that is easier on the eyes. You won't see a drastic change when you refresh the screen, but from a UX point-of-view, this does make the text easier to read.

‼️ **Challenge** ‼️

- Add effects for project thumbnails when the user hovers onto the pictures
- Suggestions & ideas to get started: [https://www.w3schools.com/howto/howto_css_image_overlay.asp](https://www.w3schools.com/howto/howto_css_image_overlay.asp), [https://codepen.io/nxworld/pen/ZYNOBZ](https://codepen.io/nxworld/pen/ZYNOBZ)
