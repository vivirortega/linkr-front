import styled from 'styled-components';

export const SignUpWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: #333333;
`;

export const Infos = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 63%;
    padding-left: 144px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    background: #151515;
    color: #ffffff;
    box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);

    h1 {
        font-family: 'Passion One';
        font-weight: 700;
        font-size: 106px;
        line-height: 117px;
        letter-spacing: 0.05em;
    }

    h2 {
        font-family: 'Oswald';
        font-weight: 700;
        font-size: 43px;
        line-height: 64px;
        width: 442px;
        margin: 0 0 64px 0;
    }

    @media (max-width: 1024px) {
        width: 100%;
        height: 175px;
        padding-left: 0;
        align-items: center;

        h1 {
            font-size: 76px;
            line-height: 84px;
        }

        h2 {
            font-size: 23px;
            line-height: 34px;
            margin: 0;
            width: 237px;
        }
    }
`;

export const FormWrapper = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 37%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 1024px) {
        width: 100%;
        height: calc(100% - 175px);
        justify-content: flex-start;
        padding-top: 20px;
    }
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 65px;
    background: #1877f2;
    border-radius: 6px;
    border: none;
    font-family: 'Oswald';
    font-weight: 700;
    font-size: 27px;
    color: #ffffff;
    cursor: pointer;

    &:hover,
    &:focus {
        opacity: 0.9;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 13px;
    width: 100%;
    padding: 0 55px;

    .link {
        font-family: 'Lato';
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        text-decoration-line: underline;
        color: #ffffff;
        cursor: pointer;
    }

    @media (max-width: 1024px) {
        padding: 22px;
        justify-content: flex-start;
    }
`;

export const Input = styled.input`
    width: 100%;
    height: 65px;
    border: none;
    padding: 0 16px;
    font-family: 'Oswald';
    font-weight: 700;
    font-size: 27px;
    color: #9f9f9f;
    background: #ffffff;
    border-radius: 6px;
`;
