import '../../App';

const WantToCook = ({ wantToCook , handleDelete, currentCook}) => {
    console.log(wantToCook)

    return (
        <div>
            <h1 className="text-2xl font-semibold text-center pb-5 border-b-2 w-80 mx-auto">want to cook: {wantToCook.length} </h1>
            
                
                    <div className="overflow-hidden mt-3">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th className=" text-[16px] font-medium fira"></th>
                                    <th className="text-[#878787] text-[16px] font-medium fira">Name</th>
                                    <th className="text-[#878787] text-[16px] font-medium fira">Time</th>
                                    <th className="text-[#878787] text-[16px] font-medium fira">Calories</th>
                                    <th className="text-[#878787] text-[16px] font-medium fira"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                wantToCook.map((item, index) => (
                                <tr key={index} className="bg-base-200">
                                    <th className=" text-[16px] font-medium fira">{index+1}</th>
                                    <td className="text-[#878787] text-[16px] font-normal fira">{item.recipe_name}</td>
                                    <td className="text-[#878787] text-[16px] font-normal fira">{item.preparing_time}</td>
                                    <td className="text-[#878787] text-[16px] font-normal fira">{item.calories}</td>
                                    <td className="text-[#878787] text-[16px] font-normal fira"><button onClick={()=>handleDelete(item)} className="py-2 px-4 w-24 bg-[#0BE58A] text-[#150B2B] rounded-3xl text-[16px] font-medium">Preparing</button></td>
                                </tr>))}
                                

                            </tbody>
                        </table>
                    </div>
                    {/* current cook */}
                    <h1 className="text-2xl font-semibold text-center mt-7 pb-5 border-b-2 w-80 mx-auto">Currently cooking: {currentCook.length} </h1>
                    <div className="overflow-x-auto mt-6">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th className="text-[#878787] text-[16px] font-medium fira"></th>
                                    <th className="text-[#878787] text-[16px] font-medium fira">Name</th>
                                    <th className="text-[#878787] text-[16px] font-medium fira">Time</th>
                                    <th className="text-[#878787] text-[16px] font-medium fira">Calories</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                
                                {
                                currentCook.map((item, index) => (
                                <tr key={index} className="bg-base-200">
                                    <td className=" text-[16px] font-normal fira">{index+1}</td>
                                    <td className="text-[#878787] text-[16px] font-normal fira">{item.recipe_name}</td>
                                    <td className="text-[#878787] text-[16px] font-normal fira">{item.preparing_time}</td>
                                    <td className="text-[#878787] text-[16px] font-normal fira">{item.calories}</td>
                                    
                                </tr>))}
                                

                            </tbody>
                        </table>
                    </div>
                
            
        </div>
        // <table>
        //     <thead>
        //         <tr>
        //             <th></th>
        //             <th>Name</th>
        //             <th>Time</th>
        //             <th>Calories</th>                            <th></th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         {wantToCook.map((item, index) => (
        //             <tr key={index} className="bg-base-200">
        //                 <th>1</th>
        //                 <td>{item.recipe_name}</td>
        //                 <td>{item.preparing_time}</td>
        //                 <td>{item.calories}</td>
        //                 <td><button className="btn">Preparing</button></td>
        //             </tr>
        //         ))}
        //     </tbody>
        // </table>
    );
};

export default WantToCook;