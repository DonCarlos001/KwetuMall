import React from 'react'
import '../styles/kagcard.css'

const KagCard=()=>{
    return(
        <div classname="church">
            <div className="crd1">
               <div>
                <img src="./images/kag.jpg" alt="product"className="kag"/>
                </div> 
                <div className="body">
                    <div className="wbc">WAKA BARAKA CHURCH</div>
                    <div className="fun">Fundraiser</div>
                    <div className="wsi">WE SOLEMNLY INVITE</div>
                    <div className="mms">MR/MRS: ..............................</div>
                    <div className="lubtc">LET US BUILD THE CHURCH</div>
                    <div className="frs">Fundraising for our Church Construction</div>
                    <button className="j2023">
                        <p className="jn">JAN 15, 2023</p>
                        <p className="jn">WAKA CENTER RONGAI- NAKURU</p>
                    </button>
                        <p>RSVP John Ndegwa at</p>
                        <p>0728700633</p>
                </div>
            </div>
        </div>
    )
}
export default KagCard;