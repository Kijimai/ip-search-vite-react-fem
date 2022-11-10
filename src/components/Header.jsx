import { useGlobalContext } from "../context/context"

const Header = () => {
  const { test } = useGlobalContext()
  return (
    <div>
      <button onClick={test}>Test</button>
    </div>
  )
}

export default Header
