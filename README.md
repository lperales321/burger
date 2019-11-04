# Eat-Da-Burger

Enter a burger name and click the Submit button.
The burger will be display on the left side with a Devour It button.
Click the Devour It button to move it to the right side.

# How it works
The table is prepopulated. It contains burger names and a devoured flag.

When a burger is submitted, it calls an insert into the table with devoured flag set to false.
When the Devour It button is clicked, it calls an update to the table and set the devoured flag to true.