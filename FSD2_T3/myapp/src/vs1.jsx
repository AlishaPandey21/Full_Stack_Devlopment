function Vs1()
{
    const students=[{id:1,name:"abc",std:4},
        {id:2,name:"PQR",std:5},
        {id:3,name:"xys",std:6}
    ];
    return(
        <div>
            <h2>Student Details</h2>
            {
                students.filter((student)=>student.std===5).map((student)=>
                <div key={student.id}>
                    <h2>Student Name:{student.name}</h2>
                    <h2>Updated Standard:{student.std+1}</h2>
                    </div>
                )}
                
             </div>
    )
}
export default Vs1