import Dropdown from "./Dropdown"
import Button from "./Button"

export default function InputContainer({ generateBoardHandler }: any): any {
    return (
        <>
            <div>
                <Dropdown />
                <Dropdown />
                <Dropdown />
            </div>
            <Button
                generateBoardHandler={generateBoardHandler}
            ></Button>
        </>
    )
}