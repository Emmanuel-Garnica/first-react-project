import { useContext } from "react";
import styled from "styled-components";
import { SecondaryButton } from "../collections/Buttons";
import { UserContext } from "../contexts/UserContext";

const DevChanger = ({className})=> {
    let [user, setUser] = useContext(UserContext);

    let changeUsername = ()=> {
        const newUsername = user.devToUsername === "emmanuelgarnica" ? "microsoft" : "emmanuelgarnica";
        setUser({ ...user, devToUsername: newUsername })
    }

    return (
        <div className={className}>
            <p>
                También puedes
                <SecondaryButton onClick={changeUsername}>
                    Ver los
                    { user.devToUsername === "emmanuelgarnica" ? " de mi trabajo" : " míos"}
                </SecondaryButton>
            </p>
        </div>
    );
}

export default styled(DevChanger)`

`;