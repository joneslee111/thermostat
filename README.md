<h1 align="center">Thermostat</h1>

<p align="center">
<img src="https://user-images.githubusercontent.com/21693444/111007677-554f0e00-8387-11eb-85b9-e993d6fe12b1.gif" width="700" height="350">
</p>

<h2 align="center">Table of contents</h2>

<p align="center">
<a href="#general-info">• General Info</a><br>
<a href="#technologies">• Technologies</a><br>
<a href="#specifications">• Specifications</a><br>
<a href="#user-stories">• User Stories</a><br>
<a href="#planning">• Planning</a><br>
<a href="#screenshots">• Screenshots</a><br>
<a href="#setup">• Setup</a><br>
</p>

 

<h2 align="center">General info</h2>
A challenge to build the business logic to model a simple thermostat, and learn to hook it up to a dynamic visual interface using jQuery. Additionally, to use JavaScript to fetch data sources and display those on the page. Jamine is used to help test-drive the project.

<h2 align="center">Technologies</h2>

Project is created with:
* JavaScript
* jQuery
* HTML
* CSS


<h2 align="center">Specifications</h2>

* Thermostat starts at 20 degrees
* You can increase the temperature with an up function
* You can decrease the temperature with a down function
* The minimum temperature is 10 degrees
* If power saving mode is on, the maximum temperature is 25 degrees
* If power saving mode is off, the maximum temperature is 32 degrees
* Power saving mode is on by default but it can also be turned off
* You can reset the temperature to 20 with a reset function
* You can ask about the thermostat's current energy usage: < 18 is low-usage, <= 25 is medium-usage, anything else is high-usage.
* Low-usage will be indicated with blue, medium-usage indicated with white, high-usage indicated with dark orange.

<h2 align="center">User Stories</h2>

```
As a user,
So that my life can be made easier,
I want the thermostat to default start at 20°.
```
```
As a user, 
So that I can be warmer,
I want to be able to increase the temperature.
```
```
As a user,
So that I can be cooler,
I want to be able to dcrease the temperature.
```
```
As a user,
So that I don't get to cold,
I want the minimum temperature to be 10°.
```
```
As a user,
So that I can save money,
I would like there to be a power saving mode.
```
```
As a user,
So that I can save money,
I would there to be a limit of 25° when PSM is switched on.
```
```
As a user,
So that I don't sizzle,
I would like there to be a limit of 32° when PSM is switched off.
```
```
As a user,
As I am lazy,
I would like there to be a reset button to the default temperature.
```
```
As a user,
So I can see my energy usage,
I would like to visually see when I am in low/medium/high usage mode.
```

<h2 align="center">Planning</h2>

<h2 align="center">Screenshots</h2>

<h3 align="center"> Default</h3>
<img width="1775" alt="Screenshot 2021-03-12 at 14 47 52" src="https://user-images.githubusercontent.com/21693444/110955968-0df25e80-8342-11eb-8720-cd484ff340eb.png">

<h3 align="center">Power Saving Mode Off && High Temp</h3>
<img width="1775" alt="Screenshot 2021-03-12 at 14 50 55" src="https://user-images.githubusercontent.com/21693444/110956318-69245100-8342-11eb-8882-d532bb3a22b1.png">

<h3 align="center"> Low Temp</h3>
<img width="1775" alt="Screenshot 2021-03-12 at 14 51 08" src="https://user-images.githubusercontent.com/21693444/110956374-7a6d5d80-8342-11eb-9339-39a2e97fd1d9.png">
	
<h2 align="center">Setup</h2>
To run this project, clone it locally using:

```
% cd ../localdir
% git clone https://github.com/joneslee111/thermostat.git
% open index.html
```
