interface WrapperProps {
    large?: boolean;
}
export declare const Wrapper: import("styled-components").StyledComponent<"div", any, WrapperProps, never>;
interface EmptyCircleProps {
    color: string;
    checked: boolean;
    highlighted: boolean;
    disabled: boolean;
}
export declare const EmptyCircle: import("styled-components").StyledComponent<"div", any, EmptyCircleProps, never>;
interface CircleProps extends EmptyCircleProps {
    large: boolean;
}
export declare const Circle: import("styled-components").StyledComponent<"div", any, CircleProps, never>;
export {};
