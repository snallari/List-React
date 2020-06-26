import React from'react' 

function TodayDate(){
    const dat= new Date().getDate()+1
    const styles={color:"#FF8C00", fontSize:"120px"}

    if(dat <= 27){
        styles.color="#FF8888"
    }else{
        styles.color="#00000"
    }
    return (
    <h1 style={styles}>{dat} this is the date</h1>  
    )
}

export default TodayDate