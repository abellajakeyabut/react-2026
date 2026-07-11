import Tour from './Tour';

const Tours = ({ tours,removeTour }) => {
  console.log("tours xxcalled")
  console.log(tours)

   if (tours.length == 0) {
     return  <section className="tours"><h3>No more tours left</h3></section>
  }
  return (
 
    <section className="tours">
       {
        tours.map((tour)=><Tour {...tour} removeTour={removeTour}/>)
       }
      </section>
  )
}
export default Tours;