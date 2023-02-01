# Welcome

## Quick Link

https://tudordev.notion.site/tudordev/c9ea155e498e474c9a7c09d76701dd1a?v=13c6d78a86b84bb0b986201e39a6aaae

Are you sick of creating react components for each svg file you use?

You have come to the **right** place :)

This site is made to solve this issue.

The project is a basic NextJS app, using yarn.

Run yarn, then yarn dev to start.

Now, on [localhost:3000](localhost:3000 "localhost:3000"), you will see the project.

When writing this readme, the styling is nothing amazing, but it will get better.

Click on "Choose Files", add some svgs, press "Convert to components", then some buttons will appear, one for each svg that you have added. Clicking them will generate a react + typescript component containing your svg.

#### For any suggestions or issues please open an issue.
#### *This Project Is Still Wip, So There May Be Bugs***

# Features

## Props
Generated components accept these props: 
1. width
2. height
3. stroke
4. className
5. style

All these props are optional and are added to the first svg element.

## Property fixing
When editing an svg, properties like stroke-width are valid. In react components, this is not the case, so all these instances are automatically fixed.

This means: stroke-width -> strokeWidth.

## Style fixing
When editing an svg, properties like 
style="fill:#f2a50f;fill-opacity:1;fill-rule:evenodd;stroke:none"are valid. In react components, this is not the case, so the style tag is automatically changed to respect react css properties.
This means: style="fill:#f2a50f;fill-opacity:1;fill-rule:evenodd;stroke:none" -> 
style={{ fill: "#f2a50f", fillOpacity: "1", fillRule: "evenodd", stroke: "none" }}

## You can now change Component's names!
