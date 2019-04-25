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

## Contributions

Contributions are welcome. File bug reports, create pull requests, feel free to reach out at tothab@gmail.com.

## Licence

LGPL-3.0
