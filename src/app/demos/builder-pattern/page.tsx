'use client'

import { parseAsInteger, useQueryState } from '../../../../dist'

export default function BuilderPatternDemoPage() {
  const [counter, setCounter] = useQueryState(
    'counter',
    parseAsInteger
      .withOptions({
        history: 'push',
        shallow: false,
        scroll: true
      })
      .withDefault(0)
  )

  return (
    <>
      <h1>Builder pattern</h1>
      <button onClick={() => setCounter(x => x - 1)}>-</button>
      <button onClick={() => setCounter(x => x + 1)}>+</button>
      <button onClick={() => setCounter(null)}>Reset</button>
      <p>{counter}</p>
      <p>
        <em>
          History is pushed, network requests are sent and scroll restoration is
          enabled.
        </em>
      </p>
    </>
  )
}