
function Caps(data) {
  
  const caps = data.data;

    return (
        <>
            {caps.map((cap) => (
                <div key={cap.id} id="capsContainer">
                    <button className="seriesCaps m button capsButtons" id="cap3">
                        Cap. {cap.number}
                    </button>
                </div>
            ))}
        </>
    );
}

export default Caps;
