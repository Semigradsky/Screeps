var Harvester = require('creeps_harvester');
var CreepsManager = (function () {
    function CreepsManager() {
        this.creeps = [];
        this.initCreeps();
        this.creeps.forEach(function (creep) {
            creep.doWork();
        });
    }
    CreepsManager.prototype.initCreeps = function () {
        var creepName;
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
    };
    return CreepsManager;
})();
module.exports = CreepsManager;
