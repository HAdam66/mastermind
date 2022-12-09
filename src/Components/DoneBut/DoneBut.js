import React from 'react';

function DoneBut() {

    const [done, setDone] = React.useState("not ready");
  return (
    <button disabled={done === "ready"} onClick={() => {setDone("ready")}}>Done</button>
  )
}

export default DoneBut