// function that builds a grid in the "container"
export default function Grid({size}) {

    const squares = [];

    for (var rows = 0; rows < size; rows++) {
        for (var columns = 0; columns < size; columns++) {
            squares.push(`${rows},${columns}`);
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
