import React from "react";

interface InputProps {
  onFilter: (value: string) => void
}

export class Input extends React.Component<InputProps> {

  onChange = (event: any) => {
    this.props.onFilter(event.target.value);
  };

  render() {

    return (
      <div>
        <input onChange={this.onChange} />
      </div>
    );

  }

}