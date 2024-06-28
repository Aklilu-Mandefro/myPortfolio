# ✍️ myPortfolio

myPortfolio is a personal website that can be used by any Digital Professionals including Developers and Designers. 

## Motivation behind this App
In today's digital age, establishing a strong online presence is crucial for professionals across various industries. A personal website serves as your digital storefront, offering a platform to showcase your skills, projects,blog posts, accomplishments, and more. And that why I built this open source app.

Whether you're a seasoned developer, a creative designer, a freelance writer, or any other digital professional, having your corner of the internet can significantly impact your professional and personal growth positively in several ways. So, **fork** this application, customize it and make it your digital home base — a place where you can curate your online presence, showcase your skills, projects, accomplishments, and tell your story in a way that's entirely unique to you. 
 

## Technologies used

- React(v18+) 
- Next.js(v13+)
- Bootstrap5
- CSS3
- HTML5
- MailChimp API
- Formspree API
- Google fonts

## Installation
1. Install [Node](https://nodejs.org/en/) and npm
2. Fork the project
3. Install packages 

```bash
npm install or yarn install or npm i
```
4. Start the development server

```bash
npm run dev or yarn dev
```
Then, navigate to `localhost:3000/`. to view it in the browser.
The src will automatically reload if you change any of the source files.

5. Build for production 

```bash
npm run build or yarn build
```

6. Run production mode

```bash
npm start or yarn start
```

## [Visit the App](https://myportfolio-et.vercel.app/) 
<br>

<a href="https://myportfolio-et.vercel.app/" target="_blank"><img src="https://i.imgur.com/u61T5tg.png" alt="The portfolio app homepage"> </a>

## Switch Between Light and Dark mode
   The default mode is light version. But, you can change it by navigating to the `src/pages/app.js/` directory.
   Then, you will find the dark and light sections from line 5 and 6 respectively. Simply comment out one to apply the other.
   
## Newsletter Form Configuration 
   Head over to [MailChimp](https://mailchimp.com) website, create an account and get your API URL and key. Once you are done, navigate to `src/data/app.json`. Open **app.json** file and paste your MailChimp API URL and key into **URL** and **key** sections at line 10 and 11 respectively. 
   
## Contact Form Configuration 
   Head over to [Formspree](https://formspree.io) website, create an account and get your API. Once you are done, navigate to `src/data/app.json`. Open **app.json** file and paste your formspree API into **formspreeURL** section at line 8. 

## Issues
   If you find any issues while installing or using the app, kindly open an [issue](https://github.com/Aklilu-Mandefro/myPortfolio/issues) with the tag
"enhancement".
   **Note:** Make sure you browse through the existing issues to check if the issue already exists.<br>
   
## Contribution
Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this app better, please fork the repo and
create a pull request. You can also simply open a [discussions](https://github.com/Aklilu-Mandefro/myPortfolio/discussions/)  or an [issue](https://github.com/Aklilu-Mandefro/myPortfolio/issues) with the tag
"enhancement".

## Credits for the images used in this app
 - [Unsplash](https://unsplash.com)
 - [Feeepik](https://feeepik.com)
- [Pexels](https://pexels.com)
- [Pixabay](https://pixabay.com)
- And Martha Tadesse, a friend of mine.

### Please give this repo a ⭐ if you found it helpful and share it with your friends.
