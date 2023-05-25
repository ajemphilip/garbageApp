const Visualization = (props) => {
    const years = props.data.years.map(datum => <button onClick={props.displayBags(datum)} className="yearSelectButton">{datum}</button>)
    return (
        <div className="visualizationInterface">
            <div className="menuWrapper">
            <div onClick={props.back} className="arrow"><svg xmlns="http://www.w3.org/2000/svg" width="44.03" height="24.68" viewBox="0 0 22.03 14.68">
  <path id="Union_1" data-name="Union 1" d="M16.718-44.492l-5.033-5.033a2.078,2.078,0,0,1-.3-.245,2.072,2.072,0,0,1-.281-.349,1.988,1.988,0,0,1-.134-.231,1.956,1.956,0,0,1,.338-2.313A1.964,1.964,0,0,1,11.6-52.9L16.694-58a2.063,2.063,0,0,1,2.919,0,2.063,2.063,0,0,1,0,2.919l-1.855,1.855h13.02a1.991,1.991,0,0,1,1.991,1.991,1.99,1.99,0,0,1-1.991,1.991H17.5l1.983,1.983a1.956,1.956,0,0,1,0,2.765,1.95,1.95,0,0,1-1.383.573A1.95,1.95,0,0,1,16.718-44.492Z" transform="translate(-10.739 58.6)" fill="#fff"/>
</svg>
</div>
            </div>
          <div className="tonnesWrapper">
            <div className="tonnesIndicator">
            <h5 style={{padding:'0'}}  className="tonnesHeader">{props.tonnes}
            </h5>
          <div className="inl">
          <h5 className="unit">tonnes</h5>
            <h5 className="meter">1bag = 1000tonnes</h5>
          </div>
            </div>
          </div>
         <div className="buttonWrapper">
            {years}
         </div>
        </div>
    )
    }
export default Visualization