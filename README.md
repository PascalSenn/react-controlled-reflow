# react-controlled-reflow

Reflow is a wrapper for react components that gives you control over render updates.
You are smarter than react. Only you know what really needs to update the UI.

Simple as that. Nothing more.

## But why?!

### 1. There are many libraries out there that have a terrible rerender behaviour.

Fact.

### 2. Arrow function updates render

```js
> (val) => this.setState({ name: val }) !== (val) => this.setState({ name: val })
> true
```

### 3. Event handler creator updates render

```js
> const createHandlerFor = (property) => (value) =>  this.setState({[property]: value})
>
> createHandlerFor("username") !== createHandlerFor("username")
> true
```

### 4. Arrays

```js
>   ["foo", "bar"] !== ["foo", "bar"]
> true
```

### 5. Config Objects

```js
>   {borderColor: "red" } !== {borderColor: "red" }
> true
```



This issues in a massive overhead. A form usually doesn't have to rerender totally when the state changes.

Just wrap the component with `Reflow` and stop unnecessary render cycles. 

# Props

| Prop    | Type                | Description                                            |
| ------- | ------------------- | ------------------------------------------------------ |
| trigger | `any | undefined`   | The value that triggers the rerender                   |
| oneOf   | `any[] | undefined` | An array that triggers the rerender if an item changes |

# Examples

## trigger

### Bad update behaviour

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

### Event handler creator

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

### Arrow functions

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

## oneOf

### Arrays

Before: Items is an array. So rerenders on every render

```tsx
<List items={this.state.listItems} {...someMoreProps} />
```

After: List only rerenders if an array items changed

```tsx
<Reflow oneOf={this.state.listItems}>
  <List items={this.state.listItems} {...someMoreProps} />
</Reflow>
```

### Complex Arrays

Before: Items is an object array. So rerenders on every render

```tsx
<List items={this.state.listItems} {...someMoreProps} />
```

After: List only rerenders if an array items changed

```tsx
<Reflow oneOf={this.state.listItems.map(x => x.key)}>
  <List items={this.state.listItems} {...someMoreProps} />
</Reflow>
```
