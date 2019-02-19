# react-hook-media-query :triangular_ruler:

A React hook to match media queries.

## Installation

Using `npm`:

```sh
npm install --save react-hook-media-query
```

Using `yarn`:

```sh
yarn add react-hook-media-query
```

## Usage

```jsx
import React from 'react'
import useMediaQuery from 'react-hook-media-query'

const ComponentWithMediaQuery = () => {
  const small = useMediaQuery('(max-width: 720px)')

  return (
    <p>Viewport width is {small ? 'below' : 'above'} 720.</p>
  )
}
```

## Notes

The media query will be matched again every time a `resize` or an `orientationchange` event occurs on `window`. This is hopefully a reliable way to detect when the match value could change.

## Contributions

Contributions are welcome. File bug reports, create pull requests, feel free to reach out at tothab@gmail.com.

## Licence

LGPL-3.0
