import React from "react";
import { IReflowProps } from "./interfaces/IReflowProps";
import shallowEqual from "recompose/shallowEqual";

export class Reflow extends React.Component<IReflowProps> {
  public shouldComponentUpdate(nextProps: IReflowProps): boolean {
    return (
      this.props.trigger !== nextProps.trigger ||
      !shallowEqual(this.props.oneOf, nextProps.oneOf)
    );
  }

  public render(): JSX.Element {
    return this.props.children;
  }
}
