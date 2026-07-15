import InputContainer from "./InputContainer"

export default function Settings({ generateBoardHandler, gridSettingsHandler }: any): any {
    return (
        <>
            <h1>Breath of the Wild - Lockout</h1>
            <InputContainer
                generateBoardHandler={generateBoardHandler}
                gridSettingsHandler={gridSettingsHandler}
            />
        </>
    )
}