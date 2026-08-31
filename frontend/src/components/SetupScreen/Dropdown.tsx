import React, { useState, useRef, useEffect } from "react"

import DropdownButton from "./DropdownButton"

import type { DropdownOptions } from "../../types/components"

import styles from "../../css/Dropdown.module.css"


type DropdownProps<T> = {
    inputOptions: DropdownOptions<T>,
    currentInput: T,
    onChange: (value: T) => void,
    getValueKey: (value: T) => React.Key
    variant:
        | "grid"
        | "difficulty"
        | "timer",
}

export default function Dropdown<T> ({inputOptions, currentInput, onChange, getValueKey, variant}: DropdownProps<T>) {
    const [isOpen, setIsOpen] = useState(false)
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsVisible(false)
                setTimeout(() => {
                    setIsOpen(false)
                }, 100)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    const clickHandler = () => {
        setIsVisible(!isVisible)

        if(isOpen) {
            setTimeout(() => {
                setIsOpen(!isOpen)
            }, 100)
        } else {
            setIsOpen(!isOpen)
        }
    }

    const currentOption = inputOptions.options.find(
        option => getValueKey(option.value) === getValueKey(currentInput)
    )

    return (
        <div
            ref={dropdownRef}
            className={styles.dropdown}>
            <label
                className={styles.label}
            >{inputOptions.title}</label>
            <button
                onClick={clickHandler}
                className={styles.dropdownInput}
            >
                {currentOption?.label ?? inputOptions.title}
            </button>

            {isOpen && (
                <div
                    className={`${styles.dropdownMenu} ${isVisible ? styles.visible : styles.hidden}`}
                >
                    {inputOptions.options.map((option => (
                        <DropdownButton
                            value={option.value}
                            label={option.label}
                            onChange={onChange}
                            variant={variant}
                            setIsOpen={setIsOpen}
                            setIsVisible={setIsVisible}
                            closeOnSelect={true}
                            key={getValueKey(option.value)}
                        />
                    )))}
                </div>
            )}
        </div>
    )
}