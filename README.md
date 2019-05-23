# NC State Brand Utility Bar

**IMPORTANT NOTE:** This fork of the utility bar is for minor edits for compatibility for use in a ServiceNow service portal. In pretty much every other use case, you should use the [master branch from UComm](https://github.com/ncstate/utility-bar).

-----

The NC State brand utility bar offers a simple way to connect our thousands of websites and let Web users know where they are at all times. Details and requirements regarding usage of the utility bar on official NC State sites can be found at [brand.ncsu.edu/downloads#utility-bar](https://brand.ncsu.edu/downloads#utility-bar).

## Development

The utility bar is packaged using [Laravel Mix](https://github.com/JeffreyWay/laravel-mix). The packaged assets can be found in the `dist` directory.

- Run `npm install` to install dependencies.
- Run `npm run dev` to package the bar in development. You can also `npm run watch`.
- When packaging for production, run `npm run production`.

## Usage

The utility bar is injected into a page by including `dist/ub-php.js`.

```html
<script src="ub-php.js"></script>
```

## Options

Options can be passed as a query string.

```html
<script src="ub-php.js?color=black&showBrick=1"></script>
```

| Attribute              | Description                                                                                                                                                                         | Default         |
|------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
| color                  | Controls the color scheme of the bar. Options are `gray`, `black`, or `red`.                                                                                                        | `gray`          |
| maxWidth               | Makes the bar's container fluid up to the given maximum width. If no value is given, then the bar will align its contents to the default Bootstrap container sizes and breakpoints. | *null*          |
| googleCustomSearchCode | A Google Custom Search Engine key                                                                                                                                                   | *null*          |
| placeholder            | Custom placeholder text for the search input                                                                                                                                        | search ncsu.edu |
| showBrick              | Turns the home button into the 2x2 NC State Brick. Options are `1` for enabled and `0` for disabled.                                                                                | `0`             |