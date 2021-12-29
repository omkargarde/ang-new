import { Observable } from "rxjs";
import { LogEntry } from "./log.service";

export abstract class LogPublisher {
    location: string;
    abstract log(record: LogEntry):
    Observable<boolean>
    abstract clear(): Observable<boolean>;
}

export class LogConsole extends LogPublisher {
    log(record: LogEntry): Observable<boolean> {
        console.log(record.buildLogString());
        return ;
        throw new Error("Method not implemented.");
    }
    clear(): Observable<boolean> {
        console.clear();
        return ;
    }
    
    
    
}