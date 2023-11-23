import { Outlet } from "react-router-dom"

function reducedLayout() {
  return (
    <>
      <div className="container1">
        <div className="container2">
            <Outlet context={{ hello: "world" }} />
        </div>
      </div>
    </>
  )
}

export default reducedLayout