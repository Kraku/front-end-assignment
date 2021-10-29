### Task 1
On [/bacon](http://localhost:3333/bacon) you should see a page with beautiful slices of fried bacon, that comes from external source.

Create bacon cloning logic and attach it to **Yeah, I want more bacon!** button.

#### Notes
To keep things simple, I decided to use javascript only to make a redirect (to stay with the "button" instead of making it "a" element). The number of bacon is stored as the optional URL parameter. I could go here with Alpinejs or any other JS framework, but I wanted to play with AdonisJS components before more complex tasks. I tried to keep the state in the backend, but it turned out that it would be too complex for storing a single number value. I found out Alpine has no simple local state management solution; it's more like render and forget.

### Task 2
Take a look at [design file](./design.png) and recreate it. Use any way of writing styles you are comfortable with and pick `Roboto` as the font family.

By default Adonis support [PostCSS](https://docs.adonisjs.com/guides/assets-manager#setup-postcss), [SASS, Less and Stylus](https://docs.adonisjs.com/guides/assets-manager#setup-sass-less-and-stylus) you need to enable one of it, but it's just Webpack under the hood, so feel free to hook whatever you like the most.

### Task 3
Provide simple JS validation for checkout form created earlier.

### Task 4
Send form data to the `POST /order` endpoint and show success / error message based on API response.

Accepted data formats:
* Postal code: 00000
* Phone number: 000000000
* Credit card: 0000000000000000
* CVV: 000
* Exp. date: 00/00
