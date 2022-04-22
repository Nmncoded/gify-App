export default function Pagination(props){
    let {offset,limit,handleOffset} = props;
    return (
        <section className="pagination" >
            <button onClick={ () => handleOffset("prev") } class="button-shrink">Prev</button>
            <button class="button-shrink">{1}</button>
            <button onClick={ () => handleOffset("next") }  class="button-shrink">Next</button>
        </section>
        
    )
}