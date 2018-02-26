var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("ClassB", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ClassB = /** @class */ (function () {
        function ClassB() {
        }
        return ClassB;
    }());
    exports.ClassB = ClassB;
});
define("ClassA", ["require", "exports", "ClassB"], function (require, exports, ClassB_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ClassA = /** @class */ (function (_super) {
        __extends(ClassA, _super);
        function ClassA() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ClassA.prototype.hello = function () {
            console.log('I am ClassA');
        };
        return ClassA;
    }(ClassB_1.ClassB));
    exports.ClassA = ClassA;
});
