type ConfigKey = 'backendHost' | 'appVersion' | 'appTitle' | 'isLocal';


export declare function Configuration(name: ConfigKey): string;

declare module 'configuration' {
    function Configuration(name: ConfigKey): string
    export = Configuration
}

