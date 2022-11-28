// function that builds a grid in the "container"
export default function Grid({columns, rows}) {

    const squares = [];

    for (var r = 0; r < rows; r++) {
        for (var c = 0; c < columns; c++) {
            squares.push(`${r},${c}`);
        };
    };
    console.log(squares);

    return (
        <section id="grid">
            {squares.map((item) => {
            return(
                <div className="square" key={item} id={item}>{item}</div>
            )
        })}
        </section>
    )

};

// function that clears the grid
// export default function clearGrid(){
//     document.querySelector(".grid").remove();
// };
