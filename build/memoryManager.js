var MemoryManager = (function () {
    function MemoryManager() {
        this.updateCreepsInfo();
    }
    MemoryManager.prototype.updateCreepsInfo = function () {
        var creepName;
        for (creepName in Memory.creeps) {
            var creep = Memory.creeps[creepName];
            if (creepName in Game.creeps) {
                if (creep.spawning) {
                    creep.spawning = false;
                }
            }
            else {
                if (!creep.spawning) {
                    delete Memory.creeps[creepName];
                }
            }
        }
    };
    return MemoryManager;
})();
module.exports = MemoryManager;
