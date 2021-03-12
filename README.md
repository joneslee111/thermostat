# Thermostat

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Specifications](#specifications)
* [User Stories](#user-stories)
* [Planning](#planning)
* [Screenshots](#screenshots)
* [Setup](#setup)
 

## General info
A challenge to build the business logic to model a simple thermostat, and learn to hook it up to a dynamic visual interface using jQuery. Additionally, to use JavaScript to fetch data sources and display those on the page. Jamine is used to help test-drive the project.

## Technologies
Project is created with:
* JavaScript 
* jQuery 
* HTML
* CSS

## Specifications

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

## User Stories
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

## Planning

## Screenshots

#### Default
<img width="1775" alt="Screenshot 2021-03-12 at 14 47 52" src="https://user-images.githubusercontent.com/21693444/110955968-0df25e80-8342-11eb-8720-cd484ff340eb.png">

#### Power Saving Mode Off && High Temp
<img width="1775" alt="Screenshot 2021-03-12 at 14 50 55" src="https://user-images.githubusercontent.com/21693444/110956318-69245100-8342-11eb-8882-d532bb3a22b1.png">

#### Low Temp
<img width="1775" alt="Screenshot 2021-03-12 at 14 51 08" src="https://user-images.githubusercontent.com/21693444/110956374-7a6d5d80-8342-11eb-9339-39a2e97fd1d9.png">
	
## Setup
To run this project, fork it and then clone it locally using:

```
% cd ../localdir
% git clone https://github.com/joneslee111/thermostat.git
% open index.html
```
