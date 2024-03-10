let cssNotizen = `
- hsl: hue, saturation, lightness
- p {width: 40ch;} ch: characters
- text-indent: 2en; add indent to the paragraph
- oblique is a stronger italic
- a:visited 
- a:hover and a:focus
- a:active(by mousing down)(the order of those 3 is important!)
- ol {list-style-type: lower-alpha; list-style-position: inside; list-style-image: url("");}
- shortcut: list-style: square url('') inside; (square is a backup for img)
- ::marker
- <li value="5"></li> value defines the order of the current list item
- float: left; floats an image/div to the left and the text will wrap around it
- clear: left;
- display: flow-root; makes the container of the float element resize according to the float element
- column-count: 4;
- column-width: 250px;
- shortcut: columns: 4 250px;
- column-rule: 2px solid black;
- white-space: nowrap; the text won't be broken by shrinking the page
- break-inside: avoid; avoid that a part of the bottom padding splitts off and appears on the top of next column
- break-before: column; make element appears on the top of the next column (not recommended by shrinking the page to small width)
- column-span: all; span sth accross all the columns
- html {scroll-behavior: smooth;}
- shorthand: flex-flow: row wrap;
- flex-basis: 100px; (works like a min-width, but allows item to shrink)
- shorthand: flex: 1 2 250px; (grow, shrink, basis)
- order: -1; (put the flex item at the start)
- order: 0; (default)
- order: 1; (put the flex item at the end)
- grid-auto-flow: row;
- grid-template-columns: repeat(4, 1fr);
- grid-auto-rows: minmax(100px, auto);
- grid-column-start: 1; grid-column-end: 4; (stretches a grid item accross 3 columns)
- shorthand: grid-column: 1/4; (the same with grid row)
- place-content: center center; (a shorthand for align-items and justify-content)
- grid-template-area: { "hd hd hd hd hd" "mn mn mn mn sb" "ft ft ft ft ft";}
- grid-area: ft;
- background-img: url("");
- background-repeat: no-repeat/repeat-x/repeat-y;
- background-size: cover; set the background to the center of an img
- text-shadow: 2px 2px 5px black; (x, y, blur, color)
- box-shadow: 2px 2px 5px -5px black; (x, y, blur, spread, color)
- background-position: top right;
- background-img: url() linear-gradient();
- background-size
- -webkit-background-clip: text; color: transparent; clip the background img to the foreground text
- -webkit- is a prefix for chrome, we can add another line of the same code without this prefix as a fallback, so that Firefox can support it, too
- scroll-margin-top: 8rem;
- border-collapse: collapse/ separated; sets whether table borders should be a single border or be separated (default);
- @media (prefers-color-scheme: dark) {
    :root {

    }
  }
  prefers-color-scheme: dark››› depends on which preference your computer have
- Methodology BEM: Block Element Modifier. Is a component-based approach to web development. The idea behind it is to divide the user interface into independent blocks. This makes interface development easy and fast even with a complex UI, and it allows reuse of existing code without copying and pasting
- modifiers: provide incremental changes to our more important semantic blocks.
- .btn--secondary {background: yellow;} ››› two dashes indicates a modifier
- <button class= "header__bth--secondary"> ››› two underscores indicate that item are dependent on the header(the major component)
- Reset:________________________________________
  *,
  *::after,
  *::before {margin: 0; padding: 0; box-sizing: border-box;}
  img {display: block; max-width: 100%; height: auto;}
  input, button, textarea, select {font: inherit;}
- variables________________________________________
  :root {
    /*FONTS*/
    /*COLORS*/
    /*BORDERS*/
  }
- utility classes _____________________________________________
  .offscreen {position: absolute; left: -9999px;}
  .nowrap {white-space: nowrap;}
  .center {text-align: center;}
- /*GENERAL STYLES*/
  /*||HEADER*/
- @keyframes showWelcome {
    0% {
      top: -20px;
      transform: skew(0deg, -5deg) scaleY(0);
    }
    80% {
      top: 30px;
      transform: skew(10deg, -5deg) scaleY(1.2);
    }
    100% {
      top: 20px;
      transform: skew(-10deg, -5deg) scaleY(1);
    }
  }
- .hero__h2 {
    animation: showWelcome 0.5s ease-in-out 1s forwards;
  } ››› forwards: keep the state as the animation ends
- .main__article {
    scroll-margin-top: 6.5rem;
  }

  .main__article: last-child {
    min-height: calc(100vh - 20rem); ››› gives the page just a little extra room to scroll
  }
- display: contents; ››› causes an element's children to appear as if they were direct children of the element's parent, ignoring the element itself. used to parent elements for css grid.
- dark Mode: ________________________________
- @media (prefers-color-scheme: dark) {
    :root {
      --BGCOLOR: #000;
      ...
    }
  }
`;
