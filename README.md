# React template

React template with TypeScript, Storybook and Chakra UI
## Data component

A data component consist of two parts: the discrete component and the connected component. The purpose of splitting them apart is to make testing and development of the individual component easier.

### Discrete component

Discrete components should have the following variants:
* Skeleton (when data is loading)
* Empty (when there is no data to present)
* Error (when an error occurs)
* Data rich components (when data is loaded)

Discrete components should not care about:
* Fetching data
* API calls
* Side effects (all actions should be contained to the component itself)

A good UX pattern is to present a loading indicator in the shape and size of the content that will be presented to the user when the data is loaded.

All states of of the discrete component should be available in storybook.

### Connected components

When a component needs to fetch data, the discrete components should be wrapped in a connected component. The responsibility for the connected component is to fetch the right data and present the right version of the component for the current state of the fetching.

## Generic component

When a component can be used in more than one place it should be a generic component. It's similar to the discrete component, but it doesn't require a connected component.