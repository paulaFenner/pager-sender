# Code review: Send to Pager

**Code by: Paula**
**Reviewer: Ajo**

## Highlights

1. All requirements met
2. Good code structure, nicely indented, easy to read
3. HTML
   - Doctype, lang attribute, viewport meta tag, charset
   - Semantic tags: "main" and "section"
4. JavaScript
   - Const for variables
   - Splitting code into several functions; 1 function does 1 job
5. CSS
   - Great use of grid to create keypad layout
   - Shorthand for margin and padding
6. Stretch goals!
   - Time delay when sending the number to the pager
   - Sound effect
   - Limiting display and alerting the user
   - PWA with favicons and sitemanifest!

## Suggestions for improvement

1. CSS

- [ ] Use classes for styling; generic classes and modifier classes
- [ ] Hover effects on all clickable elements
- [ ] Fixed height on screens

2. JS

- [ ] Clear phone display when the number is displayed on the pager

## A refactoring exercise

Refactor the dialing function in two steps
Step 1: take the code we already have and make it simpler
Step 2: with the refactored code as our starting point, use the JS data attribute\* to make it even better

\*You'll be properly introduced to the data attribute in module 5 so consider this a sneak peek :)
