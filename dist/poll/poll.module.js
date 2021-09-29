"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PollModule = void 0;
const common_1 = require("@nestjs/common");
const poll_service_1 = require("./poll.service");
const poll_resolver_1 = require("./poll.resolver");
const poll_entity_1 = require("./entities/poll.entity");
const poll_option_entity_1 = require("./entities/poll-option.entity");
const typeorm_1 = require("@nestjs/typeorm");
let PollModule = class PollModule {
};
PollModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([poll_entity_1.Poll, poll_option_entity_1.PollOption])
        ],
        exports: [
            typeorm_1.TypeOrmModule
        ],
        providers: [poll_resolver_1.PollResolver, poll_service_1.PollService]
    })
], PollModule);
exports.PollModule = PollModule;
//# sourceMappingURL=poll.module.js.map