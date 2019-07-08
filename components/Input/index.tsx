import React from 'react';
import MaskedInput from '../MaskedInput';
import {
    Field,
    IconWrapper,
    Wrapper,
    Inner,
    FieldWrapper,
    Addon,
} from './styled';

export interface Props {
    type: string
    value: string
    autoComplete: boolean
    maxLength: number
    id: string
    name: string
    tabIndex: number
    pattern: string
    formNoValidate: boolean
    title: string
    placeholder: string
    disabled: boolean
    status: 'default' | 'success' | 'error'
    icon: React.ReactNode
    iconPosition: 'before' | 'after'
    boundless: boolean
    centered: boolean
    leftAddons: React.ReactNode
    rightAddons: React.ReactNode
    largeFont: boolean
    mask: string
    maskFormatCharacters: {
        validate(): void
        transform(): void
    }
    onFocus(event: React.SyntheticEvent): void
    onBlur(event: React.SyntheticEvent): void
    onChange(value: string): void
    onClick(event: React.SyntheticEvent): void
    onKeyDown(event: React.SyntheticEvent): void
    onKeyUp(event: React.SyntheticEvent): void
    onPaste(event: React.SyntheticEvent): void
    onTouchStart(event: React.SyntheticEvent): void
    onTouchEnd(event: React.SyntheticEvent): void
    onTouchMove(event: React.SyntheticEvent): void
    onTouchCancel(event: React.SyntheticEvent): void
    onProcessMaskInputEvent(event: React.ChangeEvent<HTMLInputElement>): void
    style: { [key: string]: any }
    className: string | undefined
    'data-testid': string
}

/**
 * @develop
 */
export default class Input extends React.Component<Props> {
    static defaultProps = {
        formNoValidate: false,
        value: undefined,
        autoComplete: false,
        maxLength: undefined,
        id: undefined,
        name: undefined,
        tabIndex: undefined,
        pattern: undefined,
        title: undefined,
        placeholder: undefined,
        disabled: undefined,
        status: undefined,
        type: 'text',
        icon: null,
        iconPosition: 'before',
        boundless: false,
        centered: false,
        leftAddons: null,
        rightAddons: null,
        largeFont: false,
        mask: undefined,
        maskFormatCharacters: undefined,
        onFocus: undefined,
        onBlur: undefined,
        onChange: undefined,
        onClick: undefined,
        onKeyDown: undefined,
        onKeyUp: undefined,
        onPaste: undefined,
        onTouchStart: undefined,
        onTouchEnd: undefined,
        onTouchMove: undefined,
        onTouchCancel: undefined,
        onProcessMaskInputEvent: undefined,
        style: undefined,
        className: undefined,
        'data-testid': undefined,
    };

    state = {
        isFocused: false,
    };

    root = React.createRef<MaskedInput & HTMLInputElement>();

    onFocus = (event: React.SyntheticEvent) => {
        const { onFocus } = this.props;
        this.setState({ isFocused: true });
        if (onFocus) {
            onFocus(event);
        }
    };

    onBlur = (event: React.SyntheticEvent) => {
        const { onBlur } = this.props;
        this.setState({ isFocused: false });
        if (onBlur) {
            onBlur(event);
        }
    };

    onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.changeValue(event.target.value);
    };

    onClick = (event: React.SyntheticEvent) => {
        const { onClick } = this.props;
        if (onClick) {
            onClick(event);
        }
    };

    onKeyDown = (event: React.SyntheticEvent) => {
        const { onKeyDown } = this.props;
        if (onKeyDown) {
            onKeyDown(event);
        }
    };

    onKeyUp = (event: React.SyntheticEvent) => {
        const { onKeyUp } = this.props;
        if (onKeyUp) {
            onKeyUp(event);
        }
    };

    onPaste = (event: React.SyntheticEvent) => {
        const { onPaste } = this.props;
        if (onPaste) {
            onPaste(event);
        }
    };

    onTouchStart = (event: React.SyntheticEvent) => {
        const { onTouchStart } = this.props;
        if (onTouchStart) {
            onTouchStart(event);
        }
    };

    onTouchEnd = (event: React.SyntheticEvent) => {
        const { onTouchEnd } = this.props;
        if (onTouchEnd) {
            onTouchEnd(event);
        }
    };

    onTouchMove = (event: React.SyntheticEvent) => {
        const { onTouchMove } = this.props;
        if (onTouchMove) {
            onTouchMove(event);
        }
    };

    onTouchCancel = (event: React.SyntheticEvent) => {
        const { onTouchCancel } = this.props;
        if (onTouchCancel) {
            onTouchCancel(event);
        }
    };

    getMaskedInputInstance() {
        const { mask } = this.props;
        if (typeof mask !== 'undefined') {
            return this.root;
        }
        return null;
    }

    changeValue(value: string) {
        const { onChange } = this.props;
        if (onChange) {
            onChange(value);
        }
    }

    isMaskFilled() {
        const { mask } = this.props;
        if (typeof mask !== 'undefined' && this.root.current!.isFilled) {
            return this.root.current!.isFilled();
        }
        return false;
    }

    focus() {
        this.root.current!.focus();
    }

    blur() {
        this.root.current!.blur();
    }

    render() {
        const {
            type,
            value,
            formNoValidate,
            autoComplete,
            maxLength,
            id,
            name,
            tabIndex,
            pattern,
            title,
            placeholder,
            disabled,
            status,
            icon,
            iconPosition,
            boundless,
            centered,
            leftAddons,
            rightAddons,
            largeFont,
            mask,
            maskFormatCharacters,
            onProcessMaskInputEvent,
            className,
            style,
            'data-testid': dataTestId,
        } = this.props;
        const { isFocused } = this.state;
        const isMaskedInput = typeof mask !== 'undefined';
        const inputProps = {
            ref: this.root,
            type,
            value,
            formNoValidate,
            autoComplete: autoComplete ? 'on' : 'off',
            maxLength,
            id,
            name,
            tabIndex,
            pattern,
            title,
            placeholder,
            disabled,
            'data-testid': dataTestId,
            onChange: this.onChange,
            onFocus: this.onFocus,
            onBlur: this.onBlur,
            onClick: this.onClick,
            onKeyDown: this.onKeyDown,
            onKeyUp: this.onKeyUp,
            onPaste: this.onPaste,
            onTouchStart: this.onTouchStart,
            onTouchEnd: this.onTouchEnd,
            onTouchMove: this.onTouchMove,
            onTouchCancel: this.onTouchCancel,
        };

        return (
            <Wrapper
                focused={Boolean((!value || value.length === 0) && isFocused)}
                filling={Boolean(value && value.length > 0 && isFocused)}
                status={status}
                disabled={disabled}
                boundless={boundless}
                className={className}
                style={style}
            >
                <Inner>
                    {leftAddons && (
                        <Addon leftGutter>{leftAddons}</Addon>
                    )}
                    {icon !== null && (
                        <IconWrapper
                            iconBefore={Boolean(icon && iconPosition === 'before')}
                            iconAfter={Boolean(icon && iconPosition === 'after')}
                        >
                            {icon}
                        </IconWrapper>
                    )}
                    <FieldWrapper>
                        <Field
                            as={isMaskedInput ? MaskedInput : 'input'}
                            large={largeFont}
                            centered={centered}
                            iconBefore={icon && iconPosition === 'before'}
                            iconAfter={icon && iconPosition === 'after'}
                            {...inputProps}
                            /* свойства только для MaskedInput */
                            mask={mask}
                            formatCharacters={maskFormatCharacters}
                            onProcessInputEvent={onProcessMaskInputEvent}
                        />
                    </FieldWrapper>
                    {rightAddons && (
                        <Addon rightGutter>{rightAddons}</Addon>
                    )}
                </Inner>
            </Wrapper>
        );
    }
}
