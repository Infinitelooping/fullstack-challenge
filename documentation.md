When thinking about the ways to tackle this project, I decided to start in the backend by creating the express endpoint I needed to get all the associated deals and create the different table models first.

This was due to at my current company I have been head down doing backend DB queries and API calls so it felt like a natural place to start. It went very smooth outside getting seed data. That ate more time than I would've liked, but once I got what I needed we were ready to move on to the frontend. Additionally, knowing what data to expect coming from the backend really helps when making the framework of the view/UI and having the right values in the right places.

I learned react.js in my bootcamp and used it primarily for 4/6 months of the course, but haven't had a chance to use it in my new role where I have been using the cakePHP. CakePHP uses a lot of conventions to bring data from the backend into the frontend, while with react I needed to do some research on the fly to use Axios. I definitely needed to warm back up and catch myself up on the react syntax. Something I'm confident a quick crash course in react again would quickly get me back to speed. Either way, I was able to get the data running  to the frontend after realizing I needed to add the port I was using since the backend and frontend were using different ports.

Components are great, and I wish CakePHP had something for built out that compared. The biggest challenge here was warming up to using useState and useEffect again. Such powerful tools to allow the page to only re-render the specifically changed elements.

I ran out of time, but if I had 30 more minutes I would've nailed down the style to not be monochromatic, and would've also added the total value at the top. I ended with having the totals for each deal stage at the top of the columns, but just didnt get that last step of adding them all up together.

The challenge was great, and in of itself was a great way to see the power of react again. Thanks!

Instructions to run the project:
    The ID for the organization is hardcoded so that we get the first and only organization in the database. It is set to 1. So as long as the database is currently indexed to 1, it should be good to go!

    I did add in Axios and Bulma via NPM, so also make sure to install the dependencies