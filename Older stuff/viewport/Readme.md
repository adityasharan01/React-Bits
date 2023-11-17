

# The question was quoted as “If user scroll and see any property and stays there for more than 5 sec then call API and store that property”.

## By reading the problem statement, I figured two sub-problems and decided to break them into two parts.

## A way to check if the element is within the viewport.
## A way to make the API call only after the user stops scrolling and waits for some time (5 secs in this case), if the user scrolls before that then we should revoke the call.
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .wrapper{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
        }

        .blocks{
            flex: 1 300px;
            height: 300px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin: 5px;
            background: red;
            font-size: 40px;
            color: #fff;
        }
    </style>
</head>
<body>
    <div class="wrapper">
        <div class="blocks">1</div>
        <div class="blocks">2</div>
        <div class="blocks">3</div>
        <div class="blocks">4</div>
        <div class="blocks">5</div>
        <div class="blocks">6</div>
        <div class="blocks">7</div>
        <div class="blocks">8</div>
        <div class="blocks">9</div>
        <div class="blocks">10</div>
        <div class="blocks">11</div>
        <div class="blocks">12</div>
        <div class="blocks">13</div>
        <div class="blocks">14</div>
        <div class="blocks">15</div>
        <div class="blocks">16</div>
        <div class="blocks">17</div>
        <div class="blocks">18</div>
        <div class="blocks">19</div>
        <div class="blocks">20</div>
        <div class="blocks">21</div>
        <div class="blocks">22</div>
        <div class="blocks">23</div>
        <div class="blocks">24</div>
        <div class="blocks">25</div>
        <div class="blocks">26</div>
        <div class="blocks">27</div>
    </div>

    <script>
        // Helper function to check if element is in viewport
        const isInViewport = function (elem) {
            const bounding = elem.getBoundingClientRect();
            return (
                bounding.top >= 0 &&
                bounding.left >= 0 &&
                bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        };

        // Debounce a function call
        const debounce = (func, delay) => {
            let inDebounce;
            return function() {
                const context = this;
                const args = arguments;
                clearTimeout(inDebounce);
                inDebounce = setTimeout(() => func.apply(context, args), delay);
            };
        };

        // Function which will make the API call
        const getBlocks = function () {
            blocks.forEach((block) => {
                if (isInViewport(block)) {
                    console.log(block.innerText);
                }
            });

            console.log(" ");
        }

        // Get all the products
        const blocks = document.querySelectorAll('.blocks');

        // Assign the event listener
        window.addEventListener('scroll', debounce(getBlocks, 1000), false);
    </script>
</body>
</html>

```
