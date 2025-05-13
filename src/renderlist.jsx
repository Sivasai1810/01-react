function renderlist(){
 const fruits=[{ id:1, name:"apple" },
    {id:2, name:"banana"},
    {id:3, name:"orange"},
    {id:4, name:"pineapple"}]
     fruits.sort((a,b)=> b.name.localeCompare(a.name))
 
 const listItems=fruits.map( fruits=> <li key={fruits.id}>{fruits.id} : &nbsp; {fruits.name} : &nbsp;</li>)
                                                        
 return(<ol>{listItems}</ol>)
}
export default renderlist 