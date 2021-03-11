'use strict';

class Thermostat{
    constructor() {
        this.MINIMUM_TEMPERATURE = 10;
        this.temperature = 20;
        this.powerSavingMode = true;
        this.MAX_LIMIT_PSM_ON = 25;
        this.MAX_LIMIT_PSM_OFF = 32;
    }
    getCurrentTemperature() {
        return this.temperature;
    }
    up() {
        if (this.isMaximumTemperature()) {
            return;
        }
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
    isMaximumTemperature() {
        if (this.isPowerSavingmodeOn() === false) {
            return this.temperature === this.MAX_LIMIT_PSM_OFF;
        }
        return this.temperature === this.MAX_LIMIT_PSM_ON;
    }
};