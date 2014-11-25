var BaseCreep = (function () {
    function BaseCreep(creep) {
        this.creep = creep;
    }
    BaseCreep.prototype.doWork = function () {
    };
    return BaseCreep;
})();
module.exports = BaseCreep;
