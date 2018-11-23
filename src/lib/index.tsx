import * as React from 'react'
import './index.scss'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  suggestionFunction: (value: string) => Promise<string[]>
  suggestionFuncDelay?: number
}

interface State {
  value: string
  suggestions: string[]
  suggestionFuncDelay: number
  suggestionFuncTimeout: NodeJS.Timer | null
  loading: boolean
  focused: boolean
  lastOnChangeEvent: React.ChangeEvent<HTMLInputElement> | null
}

class JohnnyMnemonic extends React.Component<Props, State> {

  private inputRef: React.RefObject<HTMLInputElement>
  private ulRef: React.RefObject<HTMLUListElement>

  public constructor(props: Props) {
    super(props)
    this.state = {
      value: '',
      suggestions: [],
      suggestionFuncDelay: props.suggestionFuncDelay || 250,
      suggestionFuncTimeout: null,
      loading: false,
      focused: false,
      lastOnChangeEvent: null,
    }
    this.inputRef = React.createRef()
    this.ulRef = React.createRef()
    this.onChange = this.onChange.bind(this)
    this.onInputFocus = this.onInputFocus.bind(this)
    this.onInputBlur = this.onInputBlur.bind(this)
    this.onSuggestionClick = this.onSuggestionClick.bind(this)
    this.manageFocus = this.manageFocus.bind(this)
    this.manageKeyDown = this.manageKeyDown.bind(this)
    this.fetchSuggestions = this.fetchSuggestions.bind(this)
    this.manageTimeout = this.manageTimeout.bind(this)
  }

  public componentDidMount() {
    document.addEventListener('click', this.manageFocus)
    document.addEventListener('keydown', this.manageKeyDown)
  }

  public componentWillUnmount() {
    document.removeEventListener('click', this.manageFocus)
    document.removeEventListener('keydown', this.manageKeyDown)
  }

  private async fetchSuggestions() {
    if (this.state.value) {
      this.setState({ loading: true })
      try {
        const suggestions = await this.props.suggestionFunction(this.state.value)
        this.setState(currentState => ({
          ...currentState,
          suggestions: currentState.focused ? suggestions : [],
          loading: false
        }))
      } catch (error) {
        this.setState({ suggestions: [], loading: false })
        console.error(error)
      }
    }
  }

  private manageTimeout() {
    if (this.state.suggestionFuncTimeout) { clearTimeout(this.state.suggestionFuncTimeout) }
    this.setState({ suggestionFuncTimeout: setTimeout(this.fetchSuggestions, this.state.suggestionFuncDelay)})
  }

  private manageFocus() {
    const activeElement = document.activeElement
    const inputElement = this.inputRef.current
    const ulElement = this.ulRef.current
    if (activeElement !== inputElement || activeElement !== ulElement) {
      this.setState({ suggestions: [] })
    }
  }

  private manageKeyDown(event: KeyboardEvent) {
    if (event.keyCode === 9) this.setState({ suggestions: [] })
  }

  private async onChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.persist()
    const value = event.target.value
    this.setState({ value, lastOnChangeEvent: event })
    this.props.onChange(event)
    this.manageTimeout()
    if (!this.state.value) { this.setState({ suggestions: [] })}
  }

  private onInputFocus() {
    this.setState({ focused: true })
  }

  private onInputBlur() {
    this.setState({ focused: false })
  }

  private onSuggestionClick(event: React.SyntheticEvent<HTMLLIElement>) {
    event.persist()
    const value = event.currentTarget.dataset.value
    this.setState({ value, suggestions: [] })
    const onChangeEvent = this.state.lastOnChangeEvent
    onChangeEvent.target.value = value
    this.props.onChange(onChangeEvent)
  }

  public render() {
    return (
      <React.Fragment>
        <input
          {...this.props}
          ref={this.inputRef}
          type={this.props.type || 'text'}
          className={`johnnymnemonic input ${this.props.className || ''}`}
          value={this.state.value || this.props.value || ''}
          onChange={this.onChange}
          onFocus={this.onInputFocus}
          onBlur={this.onInputBlur}
        />

        {this.state.loading ? (<div className="johnnymnemonic la-ball-scale la-sm"><div></div></div>) : null}

        {this.state.suggestions.length > 0 ? (
          <ul
            ref={this.ulRef}
            className="johnnymnemonic suggestion-list"
          >
            {this.state.suggestions.map(suggestion => (
              <li
                onClick={this.onSuggestionClick}
                data-value={suggestion}>{suggestion}
              </li>
            ))}
          </ul>
        ) : null}
      </React.Fragment>
    )
  }
}

export default JohnnyMnemonic
