# Technical decisions/Things to consider

1. The frontend is a CRA application with Typescript. I used a container/presentation pattern for the components because I think it makes the code cleaner and the components more reusable.

2. I decided to create a Node + Express API to "store" and send data to the frontend. This app uses a 3 layer architecture. I hardcoded the data just to make it simple and because I couldn't find a good API for cars to use. I was going to use Typescript here too but I run into some issues with the machine because I wasn't using my regular machine.

3. I created a utility function to fetch data and services to call that function. I also used a status with an enum instead of a boolean such as isLoading based on [this article](https://kentcdodds.com/blog/stop-using-isloading-booleans)

4. I used Downshift for the dropdown functionality because it has a lot of accessibility focus.

5. I didn't know what should I do once the search cars button was clicked so I just added a console log

6. I used a compound component for the form because it gives much more flexibility and makes the form + other components(inputs, labels, etc) more reusable. With this approach, you can create different forms while changing the order, the structure, everything. Without this approach you would end up using conditionals and other things for every change that's being asked for the form. For example, let's say the PO wants to have a form with one input and one button. You can create a form with those components but then he wants to add a dropdown, only for one form, not for every form. In this case we'd start to pass props and create conditions to hide or show the components. But, with the compound component pattern you can create each form differently. One form can have a title, input and button; another form can have a label, a dropdown and a button, etc and you don't need any conditionals/props.
