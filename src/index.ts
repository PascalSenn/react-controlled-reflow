import * as React from "react";
import shallowEqual from "recompose/shallowEqual";
interface IReflowProps {
  children?: any;
  trigger?: any;
  oneOf?: any[];
}

export class Reflow extends React.Component<IReflowProps> {
  public shouldComponentUpdate(nextProps: IReflowProps): boolean {
    return (
      this.props.trigger !== nextProps.trigger ||
      (this.props.oneOf !== undefined &&
        nextProps.oneOf !== undefined &&
        !shallowEqual(this.props.oneOf, nextProps.oneOf))
    );
  }

  public render(): JSX.Element {
    return this.props.children;
  }
}
