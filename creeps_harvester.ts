import BaseCreep = require('creeps_baseCreep')

class Harvester extends BaseCreep {

    public doWork() {
        if (this.creep.energy < this.creep.energyCapacity) {
            this.harvestInNearestSource();
        } else {
            this.transferEnergyToNearestSpawn();
        }
    }

    private harvestInNearestSource() {
        var source: Source = this.creep.pos.findNearest(RoomObjTypes.Sources, {
            filter: (s: Source) => {
                return s.energy > 0;
            }
        });

        if (source) {
            this.creep.moveTo(source);
            this.creep.harvest(source);
        } else {
            console.log('Not founded sources!');
        }
    }

    private transferEnergyToNearestSpawn() {
        var spawn: Spawn = this.creep.pos.findNearest(RoomObjTypes.MySpawns);

        if (spawn) {
            this.creep.moveTo(spawn);
            this.creep.transferEnergy(spawn);
        }
    }

}

export = Harvester;