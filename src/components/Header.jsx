import { useGlobalContext } from "../context/context"
import patternBG from "../assets/pattern-bg.png"
import Arrow from "../icons/Arrow"
import styled from "styled-components"

const Header = () => {
  const { test } = useGlobalContext()
  return (
    <HeaderWrapper>
      <div className="inner-header">
        <h1>IP Address Tracker</h1>
        <div className="search-bar">
          <input spellcheck="false" className="search-input" type="text" />
          <button className="search-btn" onClick={test}>
            <Arrow />
          </button>
        </div>
      </div>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  position: relative;
  padding: 2.6rem 2.4rem;
  background-image: url(${patternBG});
  background-position: center;
  background-size: cover;
  color: hsl(var(--white));
  text-align: center;

  .inner-header {
    margin-bottom: 15.7rem;

    h1 {
      margin-bottom: 2.9rem;
      font-size: 2.6rem;
      font-weight: 400;
      line-height: 3rem;
    }

    .search-bar {
      display: flex;
      justify-content: center;
      max-width: 55.5rem;
      margin: 0 auto;

      .search-input {
        font-family: inherit;
        padding: 1.8rem 2.4rem;
        border-top-left-radius: 1.5rem;
        border-bottom-left-radius: 1.5rem;
        border: none;
        width: 100%;
        font-size: 1.8rem;
        line-height: 2.1rem;

        &::selection {
          color: hsl(var(--white));
          background-color: hsl(var(--black));
        }
      }

      button {
        height: 5.8rem;
        width: 5.8rem;
        border-top-right-radius: 1.5rem;
        border-bottom-right-radius: 1.5rem;
        background-color: hsl(var(--black));
        cursor: pointer;
      }
    }
  }
`

export default Header
