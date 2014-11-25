var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BaseCreep = require('creeps_baseCreep');
var Harvester = (function (_super) {
    __extends(Harvester, _super);
    function Harvester() {
        _super.apply(this, arguments);
    }
    Harvester.prototype.doWork = function () {
        if (this.creep.energy < this.creep.energyCapacity) {
            this.harvestInNearestSource();
        }
        else {
            this.transferEnergyToNearestSpawn();
        }
    };
    Harvester.prototype.harvestInNearestSource = function () {
        var source = this.creep.pos.findNearest(5 /* Sources */, {
            filter: function (s) {
                return s.energy > 0;
            }
        });
        if (source) {
            this.creep.moveTo(source);
            this.creep.harvest(source);
        }
        else {
            console.log('Not founded sources!');
        }
    };
    Harvester.prototype.transferEnergyToNearestSpawn = function () {
        var spawn = this.creep.pos.findNearest(12 /* MySpawns */);
        if (spawn) {
            this.creep.moveTo(spawn);
            this.creep.transferEnergy(spawn);
        }
    };
    return Harvester;
})(BaseCreep);
module.exports = Harvester;
