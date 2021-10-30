### Testing

`npm run ci` command will start the dev server and run tests when `http://localhost:3333` responds with HTTP status code 200.

With the server already running, we can start tests with `npm run test`.

### Task 1
On [/bacon](http://localhost:3333/bacon) you should see a page with beautiful slices of fried bacon, that comes from external source.

Create bacon cloning logic and attach it to **Yeah, I want more bacon!** button.

#### Notes
To keep things simple, I decided to use javascript only to make a redirect (I wanted stay with the "button" instead of making it "a" element). The number of bacon is stored as the optional URL parameter. I could go with any light JS framework, but at this point I wanted to play with AdonisJS components before next tasks. I tried to keep the state in the backend, but it turned out that it would be too complex just for a single number value.

---

### Task 2
Take a look at [design file](./design.png) and recreate it. Use any way of writing styles you are comfortable with and pick `Roboto` as the font family.

By default Adonis support [PostCSS](https://docs.adonisjs.com/guides/assets-manager#setup-postcss), [SASS, Less and Stylus](https://docs.adonisjs.com/guides/assets-manager#setup-sass-less-and-stylus) you need to enable one of it, but it's just Webpack under the hood, so feel free to hook whatever you like the most.

#### Notes
I took the opportunity to learn tailwindcss.

#### Known issues
- Credit card number provider should be displayed based on CC number.

---

### Task 3
Provide simple JS validation for checkout form created earlier.

#### Notes
I decided to use alpinejs as the main framework because I never had the opportunity to work with it. I have mixed feelings about some of the decisions they have made, but it is making a job done after all.

State from adonisjs could be easily converted to alpinejs data object, but I did not want to remove it from the frontend entirely. I assume that the checkout element would be an addition to a larger application that heavily uses edge templates, so I tried to balance frontend and template state usage.

#### Known issues
- Phone number accepted format length is 9; mockup has an example with ten digits. I updated the placeholder and mask to 9 digits.
- Inputmask is having issues with autocomplete browsers functionality. There are a few possible workarounds, one of them is to make input read-only and enable it on focus. Because it is just an interview assignment, I decided not to spend any additional time fixing it.

---

### Task 4
Send form data to the `POST /order` endpoint and show success / error message based on API response.

Accepted data formats:
* Postal code: 00000
* Phone number: 000000000
* Credit card: 0000000000000000
* CVV: 000
* Exp. date: 00/00
