interface ButtonProps {
    side: number | string;
    secondary: boolean;
}
export declare const StyledButton: import("styled-components").StyledComponent<"button", any, ButtonProps, never>;
interface ButtonTextProps {
    prependIcon: boolean;
    appendIcon: boolean;
}
export declare const ButtonText: import("styled-components").StyledComponent<"span", any, ButtonTextProps, never>;
export declare const IconWrapper: import("styled-components").StyledComponent<"span", any, {}, never>;
export {};
