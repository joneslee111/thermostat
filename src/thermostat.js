'use strict';

class Thermostat{
    constructor() {
        this.MINIMUM_TEMPERATURE = 10;
        this.temperature = 20;
        this.powerSavingMode = true;
    }
    getCurrentTemperature() {
        return this.temperature;
    }
    up() {
        this.temperature += 1
    }
    down() {
        if (this.isMinimumTemperature()) {
            return;
        }
        this.temperature -= 1
    }
    isMinimumTemperature() {
        return this.tempeature === this.MINIMUM_TEMPERATURE;
    }
    isPowerSavingmodeOn() {
        return this.powerSavingMode === true;
    }
    switchPowerSavingModeOff() {
        this.powerSavingMode = false;
    }
    switchPowerSavingModeOn() {
        this.powerSavingMode = true;
    }
};