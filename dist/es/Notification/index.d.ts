declare function setNotificationConfig(options: any): void;
declare function notice(args: any): void;
declare const api: {
    open: typeof notice;
    close(key: any): void;
    config: typeof setNotificationConfig;
    destroy(): void;
};
export default api;
