class MemoryManager {

    constructor() {
        this.updateCreepsInfo();
    }

    private updateCreepsInfo() {
        var creepName: string;

        for (creepName in Memory.creeps) {
            var creep = Memory.creeps[creepName];
            if (creepName in Game.creeps) {
                if (creep.spawning) {
                    creep.spawning = false;
                }
            } else {
                if (!creep.spawning) {
                    delete Memory.creeps[creepName];
                }
            }
        }
    }

}

export = MemoryManager