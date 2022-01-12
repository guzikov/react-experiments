import React, { useEffect, useState } from "react";

export default () => {
  const [state, setState] = useState(null)

  useEffect(() => {
    fetch('https://api.agify.io?name=sergei')
      .then(res => res.json())
      .then(data => setState(data.age))
  })

  return <h1>{state}</h1>
}