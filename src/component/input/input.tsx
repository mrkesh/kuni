import React from "react";

interface InputProps {
  onFilter: (value: string | null) => void
}

export class Input extends React.Component<InputProps> {

  onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.props.onFilter(event.target.value);
  };

  onClick = (event: React.MouseEvent): void => {
    this.props.onFilter(null);
  };

  render() {

    return (
      <div>
        <input onChange={this.onChange} />
        <button onClick={this.onClick}>Reset</button>
      </div>
    );

  }

}