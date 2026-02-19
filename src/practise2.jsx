export default function MenuItem({list=[]}) {
return <div>
{
list && list.length ?
list.map(listItem=><MenuItem item={listItem}/>)

 : null}

</div>

}