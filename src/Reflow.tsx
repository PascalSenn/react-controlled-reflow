import * as React from "react";

interface IReflowProps {
  children: any;
  trigger: any;
}

export class Reflow extends React.Component<IReflowProps> {
  public shouldComponentUpdate(nextProps: IReflowProps): boolean {
    return this.props.trigger !== nextProps.trigger;
  }

  public render(): JSX.Element {
    return this.props.children;
  }
}
