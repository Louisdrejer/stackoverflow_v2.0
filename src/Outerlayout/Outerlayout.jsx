import { Outlet } from "react-router-dom"

function reducedLayout() {
  return (
    <>
      <Outlet context={{ hello: "world" }} />
    </>
  )
}

export default reducedLayout