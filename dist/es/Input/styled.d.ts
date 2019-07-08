interface FieldProps {
    mask: string;
    formatCharacters: {};
    onProcessInputEvent(e: any): void;
    large: any;
    iconBefore: any;
    iconAfter: any;
    centered?: boolean;
}
export declare const Field: import("styled-components").StyledComponent<"input", any, FieldProps, never>;
interface IconWrapperProps {
    iconBefore?: boolean;
    iconAfter?: boolean;
}
export declare const IconWrapper: import("styled-components").StyledComponent<"div", any, IconWrapperProps, never>;
interface WrapperProps {
    filling: boolean;
    status: any;
    disabled: boolean;
    className: any;
    style: any;
    boundless?: boolean;
    focused?: boolean;
}
export declare const Wrapper: import("styled-components").StyledComponent<"div", any, WrapperProps, never>;
export declare const Inner: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const FieldWrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
interface AddonProps {
    leftGutter?: boolean;
    rightGutter?: boolean;
}
export declare const Addon: import("styled-components").StyledComponent<"div", any, AddonProps, never>;
export {};
