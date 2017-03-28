import { ITraceSource } from "./ITraceSource";
import { TraceLevel } from "./TraceLevel";

export class Trace {
    private static _traceSources: Array<ITraceSource> = new Array<ITraceSource>();
    public static get TraceSources(): Array<ITraceSource> {
        return this._traceSources;
    }

    public static Info(message: string): void {
        this._traceSources.forEach((value: ITraceSource) => {
            value.Trace(TraceLevel.Info, message);
        });
    }

    public static Error(message: string): void {
        this._traceSources.forEach((value: ITraceSource) => {
            value.Trace(TraceLevel.Error, message);
        });
    }

    public static Verbose(message: string): void {
        this._traceSources.forEach((value: ITraceSource) => {
            value.Trace(TraceLevel.Verbose, message);
        });
    }

    public static Warning(message: string): void {
        this._traceSources.forEach((value: ITraceSource) => {
            value.Trace(TraceLevel.Warning, message);
        });
    }
}
