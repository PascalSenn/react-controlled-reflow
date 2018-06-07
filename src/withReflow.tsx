import * as React from "react";
import { Reflow } from "./Reflow";

type reflowComponentFunction<TOriginalProps> = (
  Component: React.ComponentType<TOriginalProps>
) => React.ComponentType<TOriginalProps>;

export function reflow<TOriginalProps>(
  ...triggers: Array<keyof TOriginalProps>
): reflowComponentFunction<TOriginalProps> {
  return (
    Component: React.ComponentType<TOriginalProps>
  ): React.ComponentType<TOriginalProps> => {
    return class WithReflow extends React.Component<TOriginalProps> {
      public render(): JSX.Element {
        return (
          <Reflow trigger={triggers.map(x => this.props[x])}>
            <Component {...this.props} />
          </Reflow>
        );
      }
    };
  };
}
