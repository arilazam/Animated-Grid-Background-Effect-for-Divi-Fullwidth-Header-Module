# Animated-Grid-Background-Effect-for-Divi-Fullwidth-Header-Module
I will show how to implement the animated grid background effect again for the Fullwidth Header module. View the demo and let’s implement it step by step, as usually.

To implement this effect we’ll have to assign an id to the Fullwidth Header and apply neccessary settings, then insert the canvas inside the Fullwidth Header section and then apply the animated grid effect using Javascript. The canvas positioning will need a small adjustment and will use CSS for that.

Step 1:
Enable the Divi Builder for your post, then go to Divi Post Settings and set the Page Layout to “Full Width” and Post Title to “Hide”, then add the Fullwidth Header module in a fullwidth section having 0 padding.

Step 2:
The most important settings for this effect are the fullscreen mode, you need to enable it in the Fullwidth Header Module Settings, and the background color. The rest of the settings are totally up to you. Personally, I like blue and yellow colors, so, I’ve chosen dark blue color for the background and yellow for the grid ( grid color is set in the JS code below ).

Step 3:
Add the *grid_bg_effect_container* id to Fullwidth Header Module Settings -> Custom CSS -> CSS ID field. If you already have an id assigned to the Fullwidth Header module then you shouldn’t add another one because an element must have only one id assigned to it, in such a case you will have to find the grid_bg_effect_container id in the JS and CSS snippets below and replace each and every instance of it with your id.

Step 4:
This is the JS code snippet for the animated grid background effect. You can set the grid row and column numbers, size of squares, make grid color static or animated, change speed of animation, etc (see highlighted and commented lines in the code below).

*Animated Grid Background Effect.js* 

Copy the JS code snippet and add it into the Divi -> Theme Options -> Integration -> Add code to the < body > field.

Step 5:
The canvas positioning needs to be adjusted so that it doesn’t push the Fullwidth Header contents and fits the screen, for this we’ll use the following CSS snippet:

*Animated Grid Background Effect.css*

We can also make the header content background semi-transparent and add some padding to it to make the content more readable:

*Header contents background.css*

Copy the CSS snippets above and add them into the Divi -> Theme Options -> General -> Custom CSS field.


That’s all, enjoy the effect. 
