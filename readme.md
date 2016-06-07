# Bitly Shortener

Bitly Shortener uses jQuery and Bitly's [/v3/shorten API](https://dev.bitly.com/links.html#v3_shorten) to shorten URLs in the HTML. 

## How to Use

### Download and move the plugin
1. Clone or download the repo
2. Add `bitly-shortener.js` to the root of your project

### Get Access Token
1. Get your [Bitly access token](https://bitly.com/a/oauth_apps).
	- **Note**: You will need a verified Bitly account inorder to recieve an access token.
2. Once you have an access token, enter the number in the `accessToken` variable in line 3 of the plugin. 

### Add the plugin and jQuery to your HTML
1. Add the jQuery 1.7 or later to the head of your HTML document: 
	- `<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.7/jquery.min.js"></script>`
2. Add the plugin just before the closing body tag or at the end of your HTML document:
	- `<script type="text/javascript" src="bitly-shortener.min.js"></script>`

### Add Classes to link tags
The plugin will look for the `long-url` link tag, process the `href` and produce the Bitly link in the `short-url` link tag. 
1. Add `class="long-url"` to the link tag of the URL you want to shorten.
	- Ex: `<a class="long-url" href="http://google.com">Link to be shortened</a>`
2. Add a link tag with the class `short-url` for the Bitly shortened URL
	- Ex: `<a class="short-url">Short Link</a>`
	- Note: No `href` attribute is needed since the plugin will generate that for you.

That's it! I made the plugin open for any translation 	

## Example
Add your access token to `bitly.shortener.js` and load the repo in your local enviro to see the plugin in action. 

You can also see the plugin in action in my [codepen](). 