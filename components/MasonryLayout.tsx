type Props = {
    columns: number,
    gap: number,
    children: JSX.Element[]
}

const MasonryLayout = ({ columns, gap, children }: Props) => {

    const columnWrapper = {}
    const result = []

    for (let i = 0; i < columns; i++) {
        columnWrapper[`col_${i}`] = []
    }

    for (let i = 0; i < children.length; i++) {
        const columnIndex = i % columns;
        columnWrapper[`col_${columnIndex}`].push(
            <div className="hover:scale-110 transition-all flex items-center justify-center">
                {children[i]}
            </div>
        );
    }

    for (let i = 0; i < columns; i++) {
        result.push(
            <div className={`flex flex-col gap-[${gap}px]`}>
                {columnWrapper[`col_${i}`]}
            </div>
        );
    }
    return (
        <div className={`flex gap-[${gap}px] w-[70vw]`}>
            {result}
        </div>
    );
}

export default MasonryLayout