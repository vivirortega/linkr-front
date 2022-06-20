import styled from "styled-components";

export const SideBar = styled.aside`
  width: 32%;
  height: 410px;
  background-color: #171717;
  color: #fff;
  font-family: 'Oswald', sans-serif;
  border-radius: 16px;
  padding: 9px 16px;
  overflow-y: scroll;
  -ms-overflow-style: none;  /* Hide scrollbar on IE and Edge */
  scrollbar-width: none;  /* Hide scrollbar on  Firefox */

  /* Hide scrollbar for Chrome, Safari and Opera */
::-webkit-scrollbar {
  display: none;
}


  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 27px;
    line-height: 40px;
    padding-bottom: 12px;
    border-bottom: 1px solid #484848;
  }

  ul {
    margin-top: 22px;

    display:flex;
    flex-direction: column;

    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    line-height: 23px;
    letter-spacing: 0.05em;
    color: #FFFFFF;
  }

  ul li {
    margin-bottom: 12px;
    cursor: pointer;
  }

  @media (max-width: 500px) {
    display: none;
  }
`