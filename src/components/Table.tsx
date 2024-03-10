interface TableProps {
    className?: string;
    blind?: string;
}

function Table({ className, blind }: TableProps) {

    return (

        <table>
            <caption className={blind}>테이블</caption>
            <thead>
                <tr>
                    <th>title</th>
                    <th>title</th>
                    <th>title</th>
                    <th>title</th>
                    <th>title</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>content</td>
                    <td>content</td>
                    <td>content</td>
                    <td>content</td>
                    <td>content</td>
                </tr>
                <tr>
                    <td>content</td>
                    <td>content</td>
                    <td>content</td>
                    <td>content</td>
                    <td>content</td>
                </tr>
                <tr>
                    <td>content</td>
                    <td>content</td>
                    <td>content</td>
                    <td>content</td>
                    <td>content</td>
                </tr>
                <tr>
                    <td>content</td>
                    <td>content</td>
                    <td>content</td>
                    <td>content</td>
                    <td>content</td>
                </tr>
                <tr>
                    <td>content</td>
                    <td>content</td>
                    <td>content</td>
                    <td>content</td>
                    <td>content</td>
                </tr>
            </tbody>
        </table>

    )

}

export default Table