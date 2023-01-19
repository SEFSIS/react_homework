import {findAllByDisplayValue} from "@testing-library/react";
export default function SimpsonComponent(props){
    console.log(props);
    let {itemName,pic,itemInfo,quote1,quote2,quote3}=props;
    let classNameItem='person';
    return(
        <div className={classNameItem}>
            <h2>{itemName}</h2>
            <img src={pic}/>
            <h3> Biography</h3>
            <p>{itemInfo}</p>
            <h3> Favourite phrases</h3>
            <p>{quote1}</p>
            <p>{quote2}</p>
            <p>{quote3}</p>
        </div>
    )
}
