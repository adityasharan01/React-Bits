# 💡 CSS Tips 💡
## 1.)Whenever you're displaying an image on the website, use the object-fit property with the value of cover so the image will scale and fit as per the specified image width and height dimension.This will make your images look better rather than squizzed or cropped even If all the actual image sizes are not of the same width and height.
```
img {
width: 140px;
height: 140px;
object-fit: cover;
margin: 0.5rem;
border-radius: 10px;
}
```

## 2.) Add a smooth scrolling effect to your webpage using just a single line of CSS 💡 Just add the following CSS to achieve a smooth scrolling effect.
```
html { scroll-behavior: smooth; }
```

## 3.)  CSS has added a new pseudo class function using which we can write the same CSS for multiple selectors in a shorter way.So instead of writing like this:
```
.faq a:link,
.list a:link,
.items a:link {
color: #000;
}

we can use it in the following way:

:is(.faq,.list,.items) a:link {
color: #000;
}
```

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

I could set the height as a fixed value, something like height: 800px with overflow-y: scroll but then making the layout responsive will become a nightmare.

So, the question arises? 🤔. How can we apply the overflow-y: scroll attribute to a div with a height of 100 percent?

The solution 🧪 here is to use position: relative for the main section container and position: absolute for the sidebar and content bar, with overflow-y: scroll.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


Do you know that In JavaScript there is a very powerful and useful API that is useful in a variety of situations like:

👉 Start or stop animation on scroll
👉 Lazy load images on scroll
👉 Automatically play or pause videos on scroll
👉 Identify when something is getting displayed or hidden from the viewport

The API is known as Intersection Observer API.

It's a very easy-to-use and much a powerful API.

It's a preferred way nowadays to display animation on page scroll.

It's also well supported in all browsers.
Link : https://levelup.gitconnected.com/what-is-so-special-about-intersection-observer-api-in-javascript-f2430a159fa7?source=friends_link&sk=08728e24f8b95d10d5215abde47a587e
