

const Filter=(props)=>{

    let filterData=props.filterData;
    let category=props.category;
    let setCategory=props.setCategory;

    function filterHandler(title){
        setCategory(title)
    }

     return (
        <div className="w-11/12 flext flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
           
            {
                filterData.map((data)=>(
                    <button key={data.id} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
                    
                         onClick={()=>{filterHandler(data.title)}}
                    >


                        {data.title}
                    </button>
                ))
            }
        
        </div>
    
    )
}

export default Filter;