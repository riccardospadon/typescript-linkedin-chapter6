// part 3

declare global {
    /** this formats a date value to a human-readable format */
    function formatDate(date: Date): string

    interface Window {
        /** this is my custom global variable */
        MY_VAR: string
    }
}

export{}