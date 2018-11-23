/// <reference types="node" />
import * as React from 'react';
import './index.scss';
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    suggestionFunction: (value: string) => Promise<string[]>;
    suggestionFuncDelay?: number;
}
interface State {
    value: string;
    suggestions: string[];
    suggestionFuncDelay: number;
    suggestionFuncTimeout: NodeJS.Timer | null;
    loading: boolean;
    focused: boolean;
    lastOnChangeEvent: React.ChangeEvent<HTMLInputElement> | null;
}
declare class JohnnyMnemonic extends React.Component<Props, State> {
    private inputRef;
    private ulRef;
    constructor(props: Props);
    componentDidMount(): void;
    componentWillUnmount(): void;
    private fetchSuggestions;
    private manageTimeout;
    private manageFocus;
    private manageKeyDown;
    private onChange;
    private onInputFocus;
    private onInputBlur;
    private onSuggestionClick;
    render(): JSX.Element;
}
export default JohnnyMnemonic;
