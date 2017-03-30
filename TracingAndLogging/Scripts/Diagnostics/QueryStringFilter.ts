﻿import { ITraceEvent } from "./ITraceEvent";
import { ITraceSource } from "./ITraceSource";
import { ITraceFilter } from "./ITraceFilter";

export class QueryStringFilter implements ITraceFilter {
    private _queryStringName: string = "trace";
    public get QueryStringName(): string {
        return this._queryStringName;
    }

    public set QueryStringName(value: string) {
        this._queryStringName = value;
        this._initialized = false;
    }

    private _initialized: boolean = false;
    private Initialize(): void {
        if (!this._initialized) {
            this._shouldTrace = false;

            const kvps: string[] = location.search.substr(1).split("&");

            for (var i: number = 0; i < kvps.length; ++i) {
                const kvp: string[] = kvps[i].split("=", 2);
                if (kvp[0] === this.QueryStringName) {
                    this._shouldTrace = true;
                    break;
                }
            }

            this._initialized = true;
        }
    }

    private _shouldTrace: boolean = false;
    public ShouldTrace(traceSource: ITraceSource, traceEvent: ITraceEvent): boolean {
        this.Initialize();

        return this._shouldTrace;
    }
}