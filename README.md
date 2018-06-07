# react-controlled-reflow

Reflow is a simple wrapper component that only updates if the input changes.

Simple as that. Nothing more.

## But why

There are many libraries out there that have a terrible rerender behaviour.

Also, arrow functions and event handler creator return a new function. So on every parent render the component gets rerendered.

Just wrap the component with `Reflow` and stop unnecessary render cycles.

# Overview

## Props

| Prop    | Type                | Description                                            |
| ------- | ------------------- | ------------------------------------------------------ |
| trigger | `any | undefined`   | The value that triggers the rerender                   |
| oneOf   | `any[] | undefined` | An array that triggers the rerender if an item changes |

## Example

## Bad update behaviour

Before: TextField rerenders even nothing changes.

```tsx
<TextField value={this.state.userName} {...someMoreProps} />
```

After : TextField only rerenders when userName changes

```tsx
<Reflow trigger={this.state.userName}>
  <TextField value={this.state.userName} {...someMoreProps} />
</Reflow>
```

## Event handler creator

Before: TextField rerenders even nothing changes.

```tsx
<TextField
  key={"username"}
  value={this.state.userName}
  onChanged={this.createHandlerFor("username")}
/>
```

After : TextField only rerenders when userName changes

```tsx
<Reflow trigger={this.state.userName}>
  <TextField
    key={"username"}
    value={this.state.userName}
    onChanged={this.createHandlerFor("username")}
  />
</Reflow>
```

## Arrow functions

Before: TextField rerenders even nothing changes.

```tsx
<TextField
  key={"username"}
  value={this.state.userName}
  onChanged={this.createHandlerFor("username")}
/>
```

After : TextField only rerenders when userName changes

```tsx
<Reflow trigger={this.state.userName}>
  <TextField
    key={"username"}
    value={this.state.userName}
    onChanged={_ => this.handleUserNameChange(_)}
  />
</Reflow>
```
