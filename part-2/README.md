# Part 2: Designing & building a wireframe

![portfolio](https://user-images.githubusercontent.com/38872354/91757580-6b337900-eb83-11ea-857b-2c35b0dca80c.jpg)

Let's start with a mockup of how we are going to compartmentalize our page into sections. We roughly have these sections:

- Intro
  - Profile picture
  - Name
  - Title burb
- About
  - Who I am
  - My interests
- Projects
- Contact
  - Links
  - Contact form

**Intro**

The intro contains an image (profile picture), heading (name), and subheading (title blurb)

We can start with the following code snippet (going in between `<body> </body>`) containing these nested elements:

```html
<div>
  <img src="https://via.placeholder.com/150" />
  <h1>Hello! My name is Jenny</h1>
  <h3>I'm a 4th year BUCS student at UBC</h3>
</div>
```

<img width="991" alt="Screen_Shot_2020-07-19_at_2 32 45_PM" src="https://user-images.githubusercontent.com/38872354/91757583-6c64a600-eb83-11ea-89f2-2a0bf56886b5.png">

**About**

The About section has a text snippet and a subheading followed by a list. Write the following under the ending `</div>` for the Intro section (replacing content inside the square brackets with whatever applies to you)

```html
<div>
  <div>
    <p>[short snippet about my background and aspirations]</p>
  </div>
  <div>
    <p>[interest heading]</p>
    <ul>
      <li>[do thing 1]</li>
      <li>[do thing 2]</li>
      <li>[do thing 3]</li>
    </ul>
  </div>
</div>
```

For instance, for me, I would put:

```html
<div>
  <div>
    <p>I love nwPlus. Very amaze.</p>
  </div>
  <div>
    <p>Some of my interests include:</p>
    <ul>
      <li>Doggos</li>
      <li>Dogspotting</li>
      <li>Smol puppers</li>
    </ul>
  </div>
</div>
```

How this code looks like when you reload your tab on Chrome displaying `index.html`

<img width="642" alt="Screen_Shot_2020-08-06_at_4 39 35_PM" src="https://user-images.githubusercontent.com/38872354/91757586-6c64a600-eb83-11ea-9247-102c29a79533.png">

**Projects**

The projects section will contain four projects. You'll notice in our wireframe that we're planning on arranging then in a 2x2 grid. We'll be able to do that with CSS later on, but for now, let's add the following snippet

```html
<div>
  <h3>My Projects</h3>
  <img src="https://via.placeholder.com/300" />
  <img src="https://via.placeholder.com/300" />
  <img src="https://via.placeholder.com/300" />
  <img src="https://via.placeholder.com/300" />
</div>
```

How this looks like when you reload your `index.html` tab

<img width="1275" alt="Screen_Shot_2020-07-19_at_2 34 17_PM" src="https://user-images.githubusercontent.com/38872354/91757585-6c64a600-eb83-11ea-90ed-4f05c08e78a4.png">

**Contact**

The contact section contains links of where people can learn more about you or contact you (for example, GitHub, LinkedIn, email, or anything else you feel is relevant).

Place this section after the enclosing `</div>` tag of the Projects section. Note that you should replace the text enclosed by the square brackets inside the `href` attribute with your own information.

```html
<div>
  <h3>Links</h3>
  <ul>
    <li>
      <a href="https://github.com/[user]">Github</a>
    </li>
    <li>
      <a href="https://linkedin.com/in/[user]">Linkedin</a>
    </li>
    <li>
      <a href="mailto:[email@example.com]">Email</a>
    </li>
  </ul>
</div>
```

For instance, I would put:

```html
<div>
  <h3>Contacc me</h3>
  <p>My Links</p>
  <ul>
    <li>
      <a href="https://github.com/panjenny0">GitHub</a>
    </li>
    <li>
      <a href="https://linkedin.com/in/pan-jenny">LinkedIn</a>
    </li>
    <li>
      <a href="mailto:panjenny0@gmail.com">Email</a>
    </li>
  </ul>
</div>
```

We will also add a contact form with input fields.

- for a real website, this will allow people to send you a message
- for the purpose of this workshop, we will only create the front-end, since we do not have a back-end that will handle sending the message for us.

Add this code snippet underneath the `</ul>` element from above

```html
<div>
  <form action="#">
    <label for="email">
      Email: <input type="email" id="email" placeholder="Enter your email" />
    </label>
    <label for="message">
      Message: <textarea id="message">Your Message</textarea>
    </label>
    <input type="submit" valid="Send Message" />
  </form>
</div>
```

After the above is added, this is what our Contact section will look like

<img width="804" alt="Screen_Shot_2020-08-06_at_4 40 52_PM" src="https://user-images.githubusercontent.com/38872354/91757587-6cfd3c80-eb83-11ea-828a-3e06a98ad170.png">

‼️ **Challenge**‼️
