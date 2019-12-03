import React, { useState } from 'react'

function NBA() {
	const [count, setCount] = useState(0)

	return (
		<div>
			<p>you clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>Click Me</button>
		</div>
	)
}

export default NBA;
