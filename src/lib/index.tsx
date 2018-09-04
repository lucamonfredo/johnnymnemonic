import * as React from 'react'
import './index.scss'

interface Props {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  suggestionFunction: (value: string) => Promise<string[]>
  debounceTimeout?: number
  className?: string
  placeholder?: string
  required?: boolean
}

interface State {
  value: string
  suggestions: string[]
  loading: boolean
  lastCall: number | null
  debounceTimeout: number
  lastOnChangeEvent: React.ChangeEvent<HTMLInputElement> | null
}

class JohnnyMnemonic extends React.Component<Props, State> {

  public constructor(props: Props) {
    super(props)
    this.state = {
      value: '',
      suggestions: [],
      loading: false,
      lastCall: Date.now(),
      debounceTimeout: props.debounceTimeout || 250,
      lastOnChangeEvent: null
    }
    this.onChange = this.onChange.bind(this)
    this.onSuggestionClick = this.onSuggestionClick.bind(this)
  }

  private async onChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.persist()
    const value = event.target.value
    this.setState({ value, lastOnChangeEvent: event })
    this.props.onChange(event)
    const now = Date.now()
    if (value && ((now - this.state.lastCall) > this.state.debounceTimeout)) {
      this.setState({ lastCall: Date.now(), loading: true })
      try {
        const suggestions = await this.props.suggestionFunction(value)
        this.setState({ suggestions, loading: false })
      } catch (error) {
        console.error(error)
      }
    }
    if (!this.state.value) {
      this.setState({ suggestions: [] })
    }
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
          type="text"
          className={`johnnymnemonic input ${this.props.className || ''}`}
          value={this.state.value}
          onChange={this.onChange}
          placeholder={this.props.placeholder || undefined}
          required={this.props.required || undefined}
        >
        </input>
        {
          this.state.loading
            ? (
              <div className="johnnymnemonic la-ball-scale la-sm">
                <div></div>
              </div>
            )
            : null
        }
        {
          this.state.suggestions.length > 0
            ? (
              <ul className="johnnymnemonic suggestion-list">
                {
                  this.state.suggestions.map(suggestion => (
                    <li onClick={this.onSuggestionClick} data-value={suggestion}>{suggestion}</li>
                  ))
                }
              </ul>
            )
            : null
        }
      </React.Fragment>
    )
  }
}

export default JohnnyMnemonic