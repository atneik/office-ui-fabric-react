import * as React from 'react';
import { Button, ButtonType } from '../../Button';
import './MessageBar.scss';
import { css } from '../../utilities/css';
import { IMessageBarProps, MessageBarType } from './MessageBar.Props';

export interface IMessageBarState {
  labelId?: string;
}

let _instance = 0;

export class MessageBar extends React.Component<IMessageBarProps, IMessageBarState> {

  public static defaultProps: IMessageBarProps = {
    messageBarType: MessageBarType.info,
    onDismiss: null,
    isMultiline: true,
  };

  // TODO bug 230228: Success icon not circled.
  private ICON_MAP = {
    [MessageBarType.info]:    'Info',
    [MessageBarType.warning]: 'Info',
    [MessageBarType.error]: 'ErrorBadge',
    [MessageBarType.remove]: 'CircleRing',
    [MessageBarType.severeWarning]: 'IncidentTriangle',
    [MessageBarType.success]: 'CircleRing'
  };

  constructor(props: IMessageBarProps) {
    super(props);

    this.state = {
      labelId: `MessageBar-${ _instance++ }`,
    };
  }

  public render(): JSX.Element {
    let { isMultiline } = this.props;

    return isMultiline ? this._renderMultiLine() : this._renderSingleLine();
  }

  private _getActionsDiv(): JSX.Element {
    if (this.props.actions) {
      return this.props.isMultiline ?
        <div className='ms-MessageBar-actions'> { this.props.actions } </div> :
        <div className='ms-MessageBar-actionsOneline'> { [this._getDismissDiv(), this.props.actions] } </div>;
    }
    return null;
  }

  private _getClassName(): string {
    return css(this.props.className, 'ms-MessageBar', {
      'ms-MessageBar': this.props.messageBarType === MessageBarType.info,
      'ms-MessageBar--error': this.props.messageBarType === MessageBarType.error,
      'ms-MessageBar--remove': this.props.messageBarType === MessageBarType.remove,
      'ms-MessageBar--severeWarning': this.props.messageBarType === MessageBarType.severeWarning,
      'ms-MessageBar--success' : this.props.messageBarType === MessageBarType.success,
      'ms-MessageBar--warning' : this.props.messageBarType === MessageBarType.warning
    });
  }

  private _getDismissDiv(): JSX.Element {
    if (this.props.onDismiss != null) {
      return <Button
        disabled={ false }
        className='ms-MessageBar-dismissal'
        buttonType={ ButtonType.icon }
        onClick={ this.props.onDismiss }
        icon='Cancel'
        title='Close'
        ariaLabel={ this.props.dismissButtonAriaLabel }
      />;
    }
    return null;
  }

  private _getIconSpan(): JSX.Element {
    return <div className='ms-MessageBar-icon'><i className={ `ms-Icon ms-Icon--${this.ICON_MAP[this.props.messageBarType]}` }></i></div>;
  }

  private _getInnerTextClassName(): string {
    return this.props.onDismiss ? 'ms-MessageBar-innerTextPadding' : 'ms-MessageBar-innerText';
  }

  private _renderMultiLine(): React.ReactElement<React.HTMLProps<HTMLAreaElement>> {
    return (
      <div className={ this._getClassName() + ' ms-MessageBar-multiline' } role='status' aria-live='polite' aria-controls='ms-MessageBar-text'>
        <div className='ms-MessageBar-content'>
          { this._getIconSpan() }
          <div className='ms-MessageBar-actionables'>
            { this._getDismissDiv() }
            <div className='ms-MessageBar-text' id={ this.state.labelId }>
              <span className={ this._getInnerTextClassName() }>
              {  this.props.children }
              </span>
            </div>
          { this._getActionsDiv() }
          </div>
        </div>
      </div>
    );
  }

  private _renderSingleLine(): React.ReactElement<React.HTMLProps<HTMLAreaElement>> {
    return (
      <div className={this._getClassName() + ' ms-MessageBar-singleline' } role='status' aria-live='polite' aria-controls='ms-MessageBar-text'>
        <div className='ms-MessageBar-content'>
          { this._getIconSpan() }
          <div className='ms-MessageBar-actionables'>
            <div className='ms-MessageBar-text' id={ this.state.labelId }>
              <span className={ this._getInnerTextClassName() }>
              {  this.props.children }
              </span>
            </div>
          { this._getActionsDiv() }
          </div>
        </div>
      </div>
    );
  }
}
