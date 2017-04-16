---
# site organizational properties. don't change this
layout: project
featured: false
sort-order: 90

# modify these to be specific to your project
# mandatory
title: Translux LED Sign

# optional - if not used, comment out using '#' (i.e. date:)
hackers: [Emile, John Armstrong, Kevin Conner]
# date: 
# abstract: 
keywords: [Hardware, Open Source, Arduino, Particle.io]
thumbnail: mini_drone_race.png
link: https://github.com/rogue-hack-lab/translux

---

We hacked an arduino into a TransLux DataWall LED display to give it a new internet connected life. It used to hang in the window and inform people of upcoming events and about our hacker space however now it is used as an eye catcher at outreach events.

<!-- more -->

## v1

The first iteration of our design featured an [Arduino](http://arduino.cc) Leonardo board interfacing between a [RaspberryPi](http://RaspberryPi.org) and the [TransLux](http://http://www.trans-lux.com/) sign. By writing to serial from the RPI the message would be displayed on the display.

These are the serial commands that have been implemented:
```
?: help, prints a little usage message
r: read, responds with the current message being displayed by the sign
s: set line, use like 's2This is my new line two' will set line 2 (of 1 - 4) to 'This is my new line two'
```
A Meetup script would also fetch meetup events and public them to the display.

## v2

The second iteration of the sign switched to using a [Particle.io](http://particle.io) micro controller that will connect to wifi and accept published messaged through the particle cloud.

## Source
More info about this project and source code can be found in the [github project]({{ link }}).