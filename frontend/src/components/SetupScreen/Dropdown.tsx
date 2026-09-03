import React, { useState, useRef, useEffect } from "react"

import DropdownButton from "./DropdownButton"

import type { DropdownOptions } from "../../types/components"

import styles from "../../css/Dropdown.module.css"


type DropdownProps<T> = {
    inputOptions: DropdownOptions<T>
    label: string
    onChange: (value: T) => void
    variant:
        | "grid"
        | "difficulty"
        | "timer",
    children?: (closeDropdown: () => void) => React.ReactNode
    closeOnSelect: boolean
}

export default function Dropdown<T> ({inputOptions, label, onChange, variant, children, closeOnSelect}: DropdownProps<T>) {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    const clickHandler = () => {
        setIsOpen(prev => !prev)
    }

    const closeDropdown = () => {
        setIsOpen(false)
    }

    const handleSelect = (value: T) => {
        onChange(value)

        if (closeOnSelect) {
            closeDropdown()
        }
    }

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
                {label}
            </button>
            <div
                className={`${styles.dropdownMenu} ${styles[variant]}  ${isOpen ? styles.visible : styles.hidden}`}
            >
                {inputOptions.options.map((option => (
                    <DropdownButton
                        value={option.value}
                        label={option.label}
                        onChange={handleSelect}
                        key={option.label}
                    />
                )))}
                {children?.(closeDropdown)}
            </div>
        </div>
    )
}