# Technical decisions/Things to consider

1. The frontend is a CRA application with Typescript. I used a container/presentation pattern for the components because I think it makes the code cleaner and the components more reusable.

2. I decided to create a Node + Express API to "store" and send data to the frontend. This app uses a 3 layer architecture. I hardcoded the data just to make it simple and because I couldn't find a good API for cars to use. I was going to use Typescript here too but I run into some issues with the machine because I wasn't using my regular machine.

3. I created a utility function to fetch data and services to call that function. I also used a status with an enum instead of a boolean such as isLoading based on [this article](https://kentcdodds.com/blog/stop-using-isloading-booleans)

4. I used Downshift for the dropdown functionality because it has a lot of accessibility focus.

5. I didn't know what should I do once the search cars button was clicked so I just added a console log
