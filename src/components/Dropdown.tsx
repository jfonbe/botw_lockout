import { useState } from "react"

export default function Dropdown(props: any): any {
    const [isOpen, setIsOpen] = useState(false)

    const clickHanlder = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        setIsOpen(!isOpen)
    }

    return (
        <div className="dropdown-container">
            <button
                onClick={clickHanlder}
                className="btn_settings"
            >
                Test
            </button>

            {isOpen && (
                <div className="dropdown">
                    <div>Value 1</div>
                    <div>Value 2</div>
                    <div>Value 3</div>
                </div>
            )}
        </div>
    )
}