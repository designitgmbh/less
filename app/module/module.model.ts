import { JsonObject, JsonMember } from 'typedjson/js';

export abstract class Module {
    protected name: string;

    public passed: boolean = false;
}