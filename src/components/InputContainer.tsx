import Dropdown from "./Dropdown"
import Button from "./Button"

export default function InputContainer({ generateBoardHandler }: any): any {
    return (
        <>
            <div>
                <Dropdown
                    variant="grid-settings"
                />
                <Dropdown
                    variant="difficulty-settings"
                />
                <Dropdown
                    variant="timer-settings"
                />
            </div>
            <Button
                generateBoardHandler={generateBoardHandler}
            ></Button>
        </>
    )
}