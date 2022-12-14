import React from 'react'

const styleComponents=()=>{
    return(
        <div style={styles.container}>
            <div style={styles.div2}></div>
            <div style={styles.div3}></div>
        </div>
    )
}

const styles={
    container:{
        display:'flex',
        height:'200px',
        backgroundColor:'red',
        justifyContent:'space-between',
        // space-around  gives space on both left and right side
        // space-between displays them on both ends
        // flex-end    display them both on far right side
        // flex-start    displays them both on far left side
        // center    displays them both at the center
        // left   displays them both on far left side
        // right   display them both on far right side

    },
    div2:{
        backgroundColor:'green',
        // height: '200px',
        width:'200px'
        // flex: 2
    },
    div3:{
        backgroundColor:'blue',
        // flex:1
        width:'200px'
    }
}

export default styleComponents;