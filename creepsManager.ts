import BaseCreep = require('creeps_baseCreep');
import Harvester = require('creeps_harvester');

class CreepsManager {

    constructor() {
        this.initCreeps();
        this.creeps.forEach((creep) => {
            creep.doWork();
        });
    }

    private creeps: BaseCreep[] = [];

    private initCreeps() {
        var creepName: string;
        for (creepName in Memory.creeps) {
            var creep = Memory.creeps[creepName];
            switch (creep.type) {
                case 'harvester':
                    this.creeps.push(new Harvester(Game.creeps[creepName]));
                    break;
                default:
                    console.log('Unknown creep type: ' + creep.type);
            }
        }
    }

}

export = CreepsManager 