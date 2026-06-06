---
title: Predictive Braking
---

**Predictive Braking** is a version of a positional [PID controller](https://index47.org/pid) that prevents overshoot by using **system identification** to empirically model how long it takes the robot to come to a stop.
It uses the **predicted braking distance** to anticipate positional error, **eliminating overshoot**, and **maximizing deceleration** by braking precisely when needed.
This works better than a traditional Derivative term because it more accurately models the robot's optimal deceleration and can be **automatically tuned**.
This system was developed by Jacob Ophoven and was put into [Pedro Pathing](https://index47.org/pp) 2.1.
Even better deceleration systems with more knowledge about FTC motors are coming soon.
Visit [Pedro Pathing](https://pedropathing.com/docs/pathing/reference/predictive) for more details.
