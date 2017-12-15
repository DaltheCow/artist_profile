import React from 'react';

class InfoField extends React.Component {
  constructor(props) {
    super(props);

    this.state = { edit: false, fieldValue: props.fieldValue };
  }

  handleChange(e) {
    this.setState({ fieldValue: e.target.value });
  }

  openEdit() {
    this.setState({ edit: true });

  }

  save(e) {
    e.preventDefault();
    this.props.action(this.state.fieldValue);
    if (this.state.fieldValue === this.props.fieldValue) {
      this.setState({ edit: false })
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({ edit: false, fieldValue: newProps.fieldValue });
  }

  componentDidUpdate(nextProps, nextState) {
    if (this.textInput) {
      this.textInput.focus();
    }
  }

  render() {
    const { edit, fieldValue } = this.state;
    const { inputType, fieldType } = this.props;

    return (
      <div className="info-field">
        { edit ? (
          <form onSubmit={e => this.save(e)} className="">
            { inputType === "input-text" ? (
              <div className="input-text">
                <input ref={(input) => { this.textInput = input; }} onChange={e => this.handleChange(e)}
                  type="text" value={fieldValue} />
              </div>
            ) : (
              <div className="textarea">
                <textarea onChange={e => this.handleChange(e)} value={fieldValue} />
              </div>
            )}
          </form>
        ) : (
          <div onClick={() => this.openEdit()} className={'field-text ' + fieldType} >
            {fieldValue}
          </div>
        )}
        { edit ? (
          <div onClick={(e) => this.save(e)} className="field-btn">
            SAVE
          </div>
        ) : (
          null
        )}
      </div>
    );
  }


}

export default InfoField;
