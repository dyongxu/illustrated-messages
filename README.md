# Fiori Moments Illustrations

> See examples at https://pages.github.tools.sap/putinfoldername/fiori-moments/

## Getting started
All the code required is in the `dist` directory.

> We hope to make this available as an NPM package soon.

### Including illustrations
To allow for themeable illustrations, the SVG code must be placed in the HTML document. In order to optimize the illustration code, we have reusable patterns, i.e. the dots you see in the images, extracted into a separate SVG.

In your main page template, include a visually hidden container. Place the contents of both [`dist/sapIllus-Patterns.svg`](https://github.tools.sap/sap-design-ops/fiori-moments/blob/master/dist/sapIllus-Patterns.svg) and [`dist/sapIllus-Symbols.svg`](https://github.tools.sap/sap-design-ops/fiori-moments/blob/master/dist/sapIllus-Symbols.svg) inside.

```
<div style="max-width: 0; max-height: 0; overflow: hidden;">
 <!-- place full contents of sapIllus-Patterns.svg here ...  
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
   <defs>
    <pattern>
    </pattern>
   </defs>
  </svg>
 -->
 <!-- place full contents of sapIllus-Patterns.svg here ...
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
   <defs>
    <symbol>
    </symbol>
   </defs>
  </svg>
 -->
</div>
```

> Note: It is only necessary to include the symbols of the illustrations you are using in your application. If you want to construct your own symbols file you can find the individual SVGs in `src/svg` and modify the `svg` element to a `symbol` element.

It is possible to use the symbols as an external file but it requires polyfills to support IE11.
[See this wiki page  for more information](https://github.tools.sap/sap-design-ops/fiori-moments/wiki/Including-SVGs-Inline-vs.-External#external)

### Including CSS

There are two types of CSS in use for Fiori Moments, 1) the styles for the SVGs themselves and 2) the styles for placement and sizing of the illustrations inside containers.

**SVG CSS**
These styles minimally apply colors and patterns to the SVGs making them themeable. The styles at [`dist/sapIllus-Fills.css`](https://github.tools.sap/sap-design-ops/fiori-moments/blob/master/dist/sapIllus-Fills.css) can be included with a `style` block or a `link`.

```
<link rel="stylesheet" href="sapIllus-Fills.css" />
<!-- or -->
<style>
 /*
  place full contents of sapIllus-Fills.css here ...
  :root {
    --sapIllus_BrandColorPrimary: #0a6ed1;
  }
  .sapIllus_BrandColorPrimary {
    fill: var(--sapIllus_BrandColorPrimary);
  }
 */
</style>
```

**Moment CSS**
These styles apply layout and type sizes to the entire moment, meaning the Spots, Dialogs, and Scenes with their captions.

The styles at [`dist/sapIllus-Layout.css`](https://github.tools.sap/sap-design-ops/fiori-moments/blob/master/dist/sapIllus-Layout.css) can be included with a `style` block or a `link`.

```
<link rel="stylesheet" href="sapIllus-Layout.css" />
<!-- or -->
<style>
 /*
  place full contents of sapIllus-Layout.css here ...
  :root {
    --sapIllus_CaptionColor: #32363A;
  }
  .sapIllus {
    display: block;
    margin: 0;
    text-align: center;
  }
 */
</style>
```

Both of these files use CSS custom properties which will not be read by IE11. We recommend the CSSVars ponyfill.
[See this wiki page for more information](https://github.tools.sap/sap-design-ops/fiori-moments/wiki/Including-SVGs-Inline-vs.-External#inline)

### Using illustrations

The illustrations should be used only as part of a Moment.
[See examples and code on the website](https://pages.github.tools.sap/sap-design-ops/fiori-moments/library.html)

Illustration are included with a hash and id. Also find a list of ids on [the Use Cases wiki page](https://github.tools.sap/sap-design-ops/fiori-moments/wiki/Use-Cases).

**Spots**
```
<div class="sapIllus sapIllus_Spot">
 <svg class="sapIllus_Image" role="img">
  <use xlink:href="#sapIllus-Spot-NoNotifications"></use>
 </svg>
 ...
</div>
```

**Dialogs**
```
<div class="sapIllus sapIllus_Dialog">
 <svg class="sapIllus_Image" role="img">
  <use xlink:href="#sapIllus-Dialog-Success"></use>
</svg>
 ...
</div>
```

**Scenes**
```
<div class="sapIllus sapIllus_Scene">
 <svg class="sapIllus_Image" role="img">
  <use xlink:href="#sapIllus-Scene-NoSavedItems"></use>
 </svg>
 ...
</div>
```

**Spot Moment**

Put it all together and a full Spot Moment will look like this.

```
<figure class="sapIllus sapIllus_Spot">
  <svg class="sapIllus_Image" role="img">
    <use xlink:href="#sapIllus-Dialog-NoSearchResults"></use>
  </svg>
  <figcaption class="sapIllus_Caption">
    <h3 class="sapIllus_CaptionHeader">No results for those criteria.</h3>
    <p class="sapIllus_CaptionMessage">Maybe try another filter or a search term?</p>
  </figcaption>
</figure>
```

----

## Working with the project

> SAP employees should run the application *Privileges* prior to these install instructions.

### Install node
Visit https://nodejs.org/en/ to download and install the recommended version.

### Install yarn
Visit https://yarnpkg.com/lang/en/docs/install/#mac-stable to view various methods.
```
curl -o- -L https://yarnpkg.com/install.sh | bash
```

> You may receive an error about a pathing issue and not having a `.bash_profile` file. If so you can run `touch ~/.bash_profile` to create the file. Then run the installation again.


### Install Vuepress
Open a shell terminal to install Vuepress globally. Learn more at https://vuepress.vuejs.org
```
yarn global add vuepress # OR npm install -g vuepress
```

### Clone the repo
Navigate the location you wish to keep the project and checkout the repository. If you feel more comfortable you can use the [Github desktop application](https://desktop.github.com).
```
git clone https://github.tools.sap/sap-design-ops/fiori-moments.git
```

### Install dependencies
Navigate to the project and install dependencies.
```
cd fiori-moments
npm install
```

### Start the project
To run the project locally.
```
yarn docs:dev # OR npm run docs:dev
```
Once started, visit http://localhost:8080/sap-design-ops/fiori-moments/ to view the site.

### Deploy the project
With the `master` branch checked out and fully updated, deploy the site using the `gh-pages` branch.
```
npm run docs:deploy
```

> Never work directly in the Github pages branch.


----



## Feedback
This is a product in early development and we welcome feedback and input. Please contact [Cara Stallone](mailto:cara.stallone@sap.com) or [create an issue](https://github.tools.sap/sap-design-ops/fiori-moments/issues/new) to share your ideas.
